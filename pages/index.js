import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import {Flex, Box} from 'reflexbox'
import Projector from '../components/Projects'
import styled from '@emotion/styled'
import { jsx, css, keyframes } from '@emotion/core'

export default function Home({blogs, webTools, projects, icon}) {
  const[showCurrents, setCurrentShow] = React.useState(false);
  const[movX, setMovX] = React.useState();
  const[movY, setMovY] = React.useState();

  const handleMove = (event) => {
    setMovX(event.movementX);
    setMovY(event.movementY);
    return;
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
        <Box onMouseMove={handleMove} key={blogs.id}>
          <Box as={'h1'} style={{color: showCurrents ? 'lightblue' : '', transform: showCurrents ? 'scale(1.05) translateY(-5px)' : ''}} onMouseUp={()=> {
            {!showCurrents ? setCurrentShow(!showCurrents) : setCurrentShow()};
          }}>
            {blogs.Title}
          </Box>
          <p  style={{visibility: showCurrents ? 'visible' : 'hidden', display: showCurrents ? 'inline' : 'none'}}>{blogs.subtitle}</p>
          
            
          </Box>
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


    h1 {
        text-decoration: none;
        transition: transform 300ms ease-in-out ;
        -webkit-transition: color 300ms ease-in-out, transform 300ms ease-in-out ;
        color: white;
        cursor: pointer;
    }
    h1:hover {
      color: lightblue;
      transform: scale(1.05) translateY(-5px); 
    
    }
    p {
      transition: transform 300ms ease-in-out;

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
