import {Box, Text, Flex, Image} from 'rebass'
import React, { useEffect, Component } from 'react'
import ReactDOM from 'react-dom'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
const ReactMarkdown = require('react-markdown')
import styled from '@emotion/styled'





const projID = ({projData}) => {
    console.log(projData)
   const [opac, setOpac] = React.useState(0.5)
    return (
        <ProjectStyled>
        <Box variant="container" py={10}>
            <Flex flexDirection="column" justifyContent="center" alignItems="center">
            <Flex alignItems="right" justifyContent="left" textAlign="right"><Text as={"h1"} mb={10}>"{projData.headline}"</Text>     <Text as={'h3'} color="white" opacity={0.5}>{projData.desc}</Text></Flex>
        
            <Image src={publicRuntimeConfig.API_URL + projData.displayImage.url}
                sx={{width:['90%','70%','40%'], borderRadius: 20, border: 'solid 1px white'}}
                mb={10}></Image>
            <Box px={[80,70,100,100,100]}>
            
         
            <Box id="preview"><ReactMarkdown source={projData.longDesc} /></Box>
        
           
            </Box>
            <Flex justifyContent="center" flexDirection="column" mt={1} alignItems="center" height="100%">
                <hr />
                      <Text fontWeight="bold" opacity={0.9} fontStyle="italic" mb={2}>Technologies Used:</Text>
            {projData.technologies.map(tech => 
                <Box>
                    <Text>{tech.Title}</Text>
                </Box>)}
                <Box as="h4" color="lightyellow" mt={2} sx={{cursor:"grab", }} opacity={opac} onMouseEnter={() => setOpac(1)} onMouseLeave={() => setOpac(0.5)}><Link href="/" sx={{textDecoration:"none"}}><a>Click Here To Go Back</a></Link></Box>
            </Flex>
            </Flex>
            
        </Box>
        </ProjectStyled>
    )

}

export default projID;

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context) {
    const { id } = context.query;
    const res = await fetch(`${publicRuntimeConfig.API_URL}/projects/${id}`)
    const data = await res.json()
    return {
        props: {
            projData: data
        },
    }
}

const ProjectStyled = styled.div`
    a {
        text-decoration: none;
        color: white;
    }

    


`