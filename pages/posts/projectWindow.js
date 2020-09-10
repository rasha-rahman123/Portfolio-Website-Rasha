import {Box, Text, Flex, Image} from 'rebass'
import React, { useEffect, Component } from 'react'
import ReactDOM from 'react-dom'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import {useRouter} from 'next/router'
import Link from 'next/link'
const ReactMarkdown = require('react-markdown')
import styled from '@emotion/styled'
import {NextSeo} from 'next-seo'





const ProjectWindow = ({id, pathname, propData}) => {
    const context = id;

    
    const colorArr = [
        '#00BFFF',
        '#FF1493',
        '#CD5C5C',
        '#4B0082',
        '#20B2AA'
    ]
    const router = useRouter()
    const result = propData.reduce((acc, project) => {
        return { ...acc, [project.id]: project};
}, {})



   const [opac, setOpac] = React.useState(0.5)
    return (
        <>  {!!id && <>
        <ProjectStyled>
        <Box variant="container">
            <Flex flexDirection="column" justifyContent="center" textAlign="center" >
            <Box  as={"h1"} mb={10}>"{result[id].headline}"</Box>
            <Flex alignItems="center" justifyContent="center" textAlign="center"> <br/>    <Text as={'h3'}  mb={10} color="#DAF7DC" opacity={0.5}>{result[id].desc}</Text>
	
          <Image src={result[id].displayImage.url}
                sx={{width:['90%','100%','100%'], borderRadius: 20, border: 'solid 1px #DAF7DC'}}
                m={10}></Image> 
	</Flex>
           
        
           <Flex></Flex>
            <Box px={[10,10,30]}>
            
         
            <Box id="preview" fontSize={'0.8em'}><ReactMarkdown source={result[id].longDesc.substring(0,250)} />... <Link href={`/projects/${result[id].genre.slug}/${result[id].slug}`}><a>Read More about <span style={{textDecoration: 'underline', color: '#DAF7DC'}}>{result[id].headline}</span> by clicking here</a></Link></Box>
        
           
            </Box>
          
       
       
            </Flex>
            
        </Box>
        </ProjectStyled>
        </>
       }  </>
    )

}

export default ProjectWindow;

const { publicRuntimeConfig } = getConfig()



export async function getServerSideProps(context) {
    const { projID } = context.query
    const res = await fetch(`${publicRuntimeConfig.API_URL}/projects`)
    const data = await res.json()
    return {
        props: {
            test: data
        },
    }
  }


export const ProjectStyled = styled.div`

    a {
        text-decoration: none;
        color: #9EE493;
        font-style: italic;
    }

    


`
