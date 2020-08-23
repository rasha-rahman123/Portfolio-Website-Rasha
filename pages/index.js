import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import {Flex, Box} from 'reflexbox'
import Projector from '../components/Projects'
import styled from '@emotion/styled'
import { jsx, css, keyframes } from '@emotion/core'

export default function Home({blogs, webTools, projects}) {
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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {blogs.map(blogs => (
        <Box onMouseMove={handleMove} key={blogs.id}>
          <h1 style={{color: showCurrents ? 'lightblue' : 'white'}} onMouseUp={()=> {
            {!showCurrents ? setCurrentShow(!showCurrents) : setCurrentShow()};
          }}>
            {blogs.Title}
          </h1>
          <p  style={{visibility: showCurrents ? 'visible' : 'hidden', display: showCurrents ? 'inline' : 'none'}}>{blogs.subtitle}</p>
          
            
          </Box>
      ))}
</Flex>
<Projector projects={projects}/>
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
        transition: transform 5s ease-in-out;
        transform: scale(1);
        transition: text-shadow 1s  ease-in-out; 
    }
    
    p {
      ${Home.showCurrents ? 'animation: ${textDrop} 300ms forwards ease-in' : 'animation: none'}
    }
    h1:hover {
        cursor: grab; 
        transform: scale(1.0) translateY(-2px);

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
