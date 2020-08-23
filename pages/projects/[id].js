import {Box, Text, Flex, Image} from 'rebass'
import React, { useEffect, Component } from 'react'
import ReactDOM from 'react-dom'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import htmlentities from 'he'
const showdown = require('showdown')
var markdown = require( "markdown" ).markdown;



const projID = ({projData}) => {
   
       
      
      
     
   
    return (
        <Box variant="container" py={10}>
            <Flex flexDirection="column" justifyContent="center" alignItems="center">
                <Image src={publicRuntimeConfig.API_URL + projData.displayImage.url}
                sx={{width:['100%','80%','50%'], borderRadius: 20, border: 'solid 1px white'}}
                mb={10}></Image>
            <Box px={100}>
            <Text as={"h1"}>{projData.headline}</Text>
            <Text as={'h2'}>{projData.desc}</Text>
            <Box id="preview"></Box>
            </Box>
            </Flex>
        </Box>
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