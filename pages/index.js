import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import {Flex, Box} from 'reflexbox'
import Projector from '../components/Projects'
import styled from '@emotion/styled'
import { jsx, css, keyframes } from '@emotion/core'
import { useEffect } from 'react'

export default function Home({blogs, webTools, projects, icon}) {
  const[showCurrents, setCurrentShow] = React.useState(false);
  const[movX, setMovX] = React.useState();
  const[movY, setMovY] = React.useState();
  const[typeState, setTypeState] = React.useState(0);
  
  const handleMove = (event) => {
    setMovX(event.movementX);
    setMovY(event.movementY);
    return;
  }

    const subtitleTyper = (text) => {
      while(typeState < text.length) {
        setTimeout(()=>{
          setTypeState(typeState + 1);
        }, 100);
        return text.substring(0,typeState);
      }
    }

  return (
    <IndexSyled>
    <Box variant="container" mt={20}>
<Flex justifyContent="center" alignItems="center">
      <Head>
        <title>Rasha's World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {blogs.map(blogs => (
                  <Flex justifyContent="center" alignItems="center" textAlign="center">
        <Box onMouseMove={handleMove} key={blogs.id}>
          <Box as={'h4'} style={{color: showCurrents && '#9EE493', transform: showCurrents ? 'scale(1.05) translateY(-5px)' : ''}} onMouseDown={()=> {
            {!showCurrents ? setCurrentShow(!showCurrents) : setCurrentShow()};
          }}>
            {typeState === blogs.Title.length ? blogs.Title : subtitleTyper(blogs.Title)}
          </Box>

          <Box as={"p"}   style={{visibility: showCurrents ? 'visible' : 'hidden', transition: 'transform 1000ms ease-in-out', display: showCurrents ? 'inline' : 'none', transform: showCurrents && 'translateX(3vw) translateY(0px)'}} >{blogs.subtitle}</Box>
          
    
          </Box>
                </Flex>
      ))}
</Flex>
<Projector projects={projects} icon={icon}/>
    </Box>
    </IndexSyled>
  )

}


const textDrop = keyframes`
  0% {
        transform: scale(1.2) translateY(-5px); 
  }
  100% {

transform: scale(1.0) translateY(0px);
color: lightskyblue;
}
`;
const IndexSyled = styled.div`


    h4 {
        text-decoration: underline;
        transition: transform 300ms ease-in-out ;
        -webkit-transition: color 300ms ease-in-out, transform 300ms ease-in-out ;
  
        cursor: pointer;
    }
    h4:hover {
      color: #9EE493;
      transform: scale(1.05) translateY(-5px); 
    
    }
    p {
      position: absolute;
      
      transform: translateX(3vw) translateY(-1.5vw);
      text-align: center;
      margin-left: -15vw;
    }
    h1:focus{
      cursor:grabbing;
    }
   
`
export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/journals`)
  const data = await res.json()
  const wtres = await fetch(`${API_URL}/web-tools`)
  const wtdata = await wtres.json()
  const projres = await fetch(`${API_URL}/projects`)
  const projdata = await projres.json()

  return {
    props: {
      blogs: data,
      webTools: wtdata,
      projects: projdata
    }
  }
}
