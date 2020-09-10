import {Box, Text, Flex, Image} from 'rebass'
import React, { useEffect, Component } from 'react'
import ReactDOM from 'react-dom'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
const ReactMarkdown = require('react-markdown')
import styled from '@emotion/styled'
import {NextSeo} from 'next-seo'
import {useRouter} from 'next/router'

const projID = () => {

    const router = useRouter()
    // const SEO = {
    //     title: `Rasha's ${projData.headline} Project`,
    // description: `Rasha Rahman's project ${projData.headline} is about ${projData.desc}`,
    
    // openGraph: {    
    //     title: `Rasha's ${projData.headline} Project`,
    //     description: `Rasha Rahman's project ${projData.headline} is about ${projData.desc}`
    // },
    // twitter: {
    //     handle: '@raaahhh_sha',
    //     site: '@kingkb2400',
    //     cardType: 'summary_large_image',
    // },

    // }
    const colorArr = [
        '#073B4D',
        '#118AB2',
        '#EF476F',
        '#118AB2',
        '#073B4D'
    ]
    
   const [opac, setOpac] = React.useState(0.5)
    return (
        <>
        {/* <NextSeo {...SEO} /> */}
        <ProjectStyled>
        <Box variant="container" py={10}>
            {/* <Flex flexDirection="column" justifyContent="center" alignItems="center">
            <Flex alignItems="right" justifyContent="left" textAlign="right"><Box className="highlight" as={"h1"} mb={10}>"{projData.headline}"</Box>  <Box className="highlight" as={'h3'} color="#DAF7DC">{projData.desc}</Box></Flex>
        
            <Image src={projData.displayImage.url}
                sx={{width:['90%','70%','40%'], borderRadius: 20, border: 'solid 1px #DAF7DC'}}
                mb={10}></Image>
            <Box px={[10,50,100,100,100]}>
            
         
            <Box id="preview"><ReactMarkdown source={projData.longDesc} /></Box>
        
           
            </Box>
            <Flex justifyContent="center" flexDirection="column" mt={1} alignItems="center" height="100%">
                <hr />
                      <Text fontWeight="bold" opacity={0.9} fontStyle="italic" mb={2}>Technologies Used:</Text>

           <Flex flexWrap="wrap" width="70%" justifyContent="center" flexDirection="row">
            {projData.technologies.map(tech => 

                <Box m={0.8} display={['inline-block']}
            sx={{
                
                opacity: 1,
                bg: '#118AB2',
                color: 'inherit',
                px: 2,
                py: 2,
                my: 1,
                fontWeight: '800',
                borderRadius: 3,
            }}>
            
            {tech.Title}
            </Box>
  
            )}
                  </Flex>
                <Box as="h4" color="lightyellow" mt={2} sx={{cursor:"grab", }} opacity={opac} onMouseEnter={() => setOpac(1)} onMouseLeave={() => setOpac(0.5)}><Box onClick={() => router.back()} sx={{textDecoration:"none"}}>Click Here To Go Back</Box></Box>
            </Flex>
            </Flex>
             */}
        </Box>
        </ProjectStyled>
        </>
    )

}

export default projID;



export const ProjectStyled = styled.div`
    a {
        text-decoration: none;
        color: #DAF7DC;
    }

    h1,h3:hover {
        z-index: 1;
    }

    


`
