import React, { useEffect } from 'react'
import { AnimationFeature, MotionConfig, AnimatePresence, ExitFeature, GesturesFeature} from 'framer-motion'
import { m as motion} from 'framer-motion'
import { Card, Image, Box, Flex} from 'rebass'
import ProjectWindow from '../pages/posts/projectWindow'
import styled from '@emotion/styled'
import Link from 'next/link'
import getConfig from 'next/config'

const ProjModal = ({ isToggled, router, setToggle, icon, projects}) => {

   
const { publicRuntimeConfig } = getConfig()
    const result = projects.reduce((acc, project) => {
        return { ...acc, [project.id]: project};
}, {})

const icons = icon.reduce((acc, icon) => {
    return { ...acc, [icon.id]: icon};
}, {})

useEffect(() => {

}, [])


    return (
        <ModalStyled>
        <AnimatePresence>
            {isToggled && (
                <Flex justifyContent="center" overflow="hidden">
                    <MotionConfig features={[AnimationFeature, ExitFeature, GesturesFeature]}>
                <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {
                    duration: 0.1
                }}}
                exit={{opacity: 0, transition: {
                    delay: .3}}}
                onTap={async () => {

                    await router.push('/')
                     await setToggle(!isToggled)
       
                 }}
                >
                 {!!router.query.projID &&   
                <Box sx={{ position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                
                backgroundColor: 'rgba(1, 1, 1, 0.75)',
                zIndex: 99999}}>
             <motion.div
                    // whileHover={{ y: -40, scale: 1.05}}
                  
                    initial={{scale: 0, opacity: 0}}
                    style={{
                       
                    }}
                    animate={{scale: 1,opacity: 1, transition: {
                        delay: .1, duration: 0.2
                    }}}
               
                 
                    // exit={{scale: 1, opacity: 0, transition: {
                    // }}}
                    >  
                 <Flex justifyContent="center" sx={{ position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      scrollbarWidth: 'none',
      WebkitOverflowScrolling: 'touch',
      boxSizing: 'content-box',
      paddingRight: 17,
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'}}> 
                   
{/*      
         <Box   
    width={2/12}
                >
                    
                </Box> */}
    <Flex    onClick={() => router.reload()}     
                    onTouchStart={() => router.reload()}      justifyContent="center" backgroundColor="#073B4C" sx={{borderStyle: 'inline', borderColor: '#118AB2', borderWidth: '2px',borderRadius: '20px', cursor: 'pointer'}} >
  
  {/* <Box
    p={3}
    width={1/6}
    color='white'
    sx={{ textAlign: 'left'}}
   >
    {!!router.query.projID ?? <Link href={!isToggled ? `/` : `/?projID=${result[router.query.projID - 1].id}`} as={!isToggled ? `/` : `/projects/${result[router.query.projID - 1].genre.slug}/${result[router.query.projID - 1].slug}`}><a><Box as={'h5'} sx={{fontSize: '3em'}}>{'<'}</Box></a></Link>}
  </Box> */}
  <Box className="hoverMe"
    p={3}

    width={5/6}
    color='white'

    >
       <Flex height="100%" width="100%" justifyContent="center" alignItems="center" flexDirection="column">
            {isToggled ? <ProjectWindow id={router.query.projID} propData={projects} pathname={router.pathname} /> : <></>}
        </Flex> 
  </Box>
  
  {/* <Box
    p={3}
    width={1/6}
    color='white'
    sx={{ textAlign: 'right'}}
    >
    <Box as={'h5'} sx={{fontSize: '3em'}}>{'>'}</Box>
  </Box> */}

</Flex>



</Flex>
</motion.div>

</Box>              }      </motion.div></MotionConfig>
                </Flex>
                
            )}
        </AnimatePresence>
        </ModalStyled>
    ) 
}

export default ProjModal;

export const ModalStyled = styled.div`
.hoverMe:hover {
    transform: translateY(-2px);
}
h5:hover {
    color: #0C617D;
}
`

