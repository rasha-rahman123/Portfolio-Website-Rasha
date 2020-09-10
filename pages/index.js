import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import {Flex, Box, Text, Image} from 'rebass'
import Projector from '../components/Projects'
import styled from '@emotion/styled'
import { jsx, css, keyframes } from '@emotion/core'
import { useEffect } from 'react'
import ProjModal from '../components/Modal'
import { useRouter } from 'next/router'
import ProjectWindow from './posts/projectWindow'
import {m as motion} from 'framer-motion'
import { AnimatePresence, AnimationFeature, ExitFeature, GesturesFeature, MotionConfig } from 'framer-motion'
import { BlogJsonLd } from 'next-seo'


const customStylesModal = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


export default function Home({ webTools, projects, icon}) {
  const[showCurrents, setCurrentShow] = React.useState(false);
  const[typeState, setTypeState] = React.useState(0);
  const[modalUp, setModalUp] = React.useState(1);
  const[isToggled, setToggle] = React.useState(false);
  const router = useRouter()
  const blogs = []
  const projectData = projects.filter(x => x === router.query.slug)
  const projData = projectData
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
       <ProjModal router={router} icon={icon} projects={projects} setToggle={setToggle} isToggled={isToggled}>
</ProjModal>

    <Box variant="container" pt={2} >

<Flex flexDirection={['column','column','row']} justifyContent="center" alignItems="center" height={'100%'}>
 
      {blogs.map(blogs => (

        <Box key={blogs.id}>
      
                {/* <motion.div 
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0, y: -20}}
                whileHover={{scale: showCurrents ? 1 : 1.05, y: showCurrents ? 0 : -5}}
                onTap={() => setCurrentShow(!showCurrents)}
               
           
                > <Box as={'h4'} pb={3} sx={{
                  transform: showCurrents ? 'scale(1.05) translateY(-5px)' : '',
                  color: showCurrents ? '#9EE493' : '#06D6A0'
                  
                }}  >
            {typeState === blogs.Title.length ? blogs.Title : subtitleTyper(blogs.Title)}
          </Box>
          </motion.div> */}

<MotionConfig features={[AnimationFeature, ExitFeature, GesturesFeature]}>    
<motion.div key={blogs.id}
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1, transition: {duration: 0.5, delay: 0}}}
                exit={{opacity: 0, scale: 0, y: -20}}
               
           
                >
                  <Flex  pt={[0,0,2]} flexDirection="column" justifyContent="space-between" alignItems="center" textAlign="center" > 
                       <motion.div key={blogs.Title}
                initial={{opacity: 0, scale: 0, x: -10000}}
                animate={{opacity: 1, scale: 1, x: 0, transition: {duration: 0.5}}}
                exit={{opacity: 0, scale: 0, y: -20}}
                whileHover={{scale: 1.05}}
                style={{
                  width: '80%'
                }}
               
           
                >
                    <Box height={1/2}>{blogs.Title}</Box>
	      </motion.div>   
             
                    <motion.div key={blogs.id}
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 0.7, scale: 1, transition: {duration: 0.5, delay: 0.4}}}
                exit={{opacity: 0, scale: 0, y: -20}}
                whileHover={{opacity: 0.9}}
                style={{
                  width: '80%'
                }}
               
           
                >
	      <Box  height={1/2} py={[3,3,5]}as={"h6"} >{blogs.subtitle}</Box>     
	      </motion.div>  
                  </Flex>  </motion.div> </MotionConfig>
    
          
    
          </Box>
       
      ))}
      <Projector projects={projects} setToggle={setToggle} isToggled={isToggled} icon={icon}/>
      
</Flex>

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
.ReactModal__Overlay {
    opacity: 0;
    transition: opacity 2000ms ease-in-out;
}

.ReactModal__Overlay--after-open{
    opacity: 1;
}

.ReactModal__Overlay--before-close{
    opacity: 0;
}
    h4 {
        text-decoration: underline;
        transition: transform 300ms ease-in-out ;
        -webkit-transition: color 300ms ease-in-out, transform 300ms ease-in-out ;
        margin-bottom: -0.5em;
       
        cursor: pointer;
    }
    h4:hover {
      color: #9EE493;
    }
    h5 {
      width: 60%;
      margin-top: 10px;
      margin-bottom: -20px;
    }
    p {
    
    }
    h1:focus{
      cursor:grabbing;
    }
   
`
