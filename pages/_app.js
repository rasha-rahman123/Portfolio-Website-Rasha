import Header from '../components/header'
import Footer from '../components/footer'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from '../components/GlobalStyles'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
import theme from '../theme/theme'
import {Flex, Box} from 'rebass'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { AnimationFeature, MotionConfig, AnimatePresence} from 'framer-motion'
import { m as motion} from 'framer-motion'
import { useRouter} from 'next/router'
import { useEffect } from 'react'


function MyApp({ Component, pageProps}) {

  const router = useRouter()
  const dummy = [1,2,3,4,5]
  return(  <> <MotionConfig features={[AnimationFeature]}>
     <motion.div initial="bodyInitial" animate="bodyAnimate" variants = {{
       bodyInitial: {
      
       },
       bodyAnimate: {

       }
     }}

     >
     <DefaultSeo {...SEO} />
    <ThemeProvider theme={theme}>
    
      <Box height="100%">
        <Flex flexDirection="column" justifyContent="space-between" alignItems="right">
          <GlobalStyles />
          <Header webTools={dummy} navigation={dummy}/>
        
            <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants ={{
              pageInitial: {
                opacity: 0,
                scale: 0
              },
              pageAnimate: {
                opacity: 1,
                scale: 1

              }
            }}>
            <Component {...pageProps} projects={dummy} icon={dummy}/>
            </motion.div>
 
          
          <Footer />
      </Flex>
      </Box>

    </ThemeProvider>
  </motion.div>         </MotionConfig></>)
}

export default MyApp
const {publicRuntimeConfig} = getConfig()

// MyApp.getInitialProps = async () => {
//   const res = await fetch(`${publicRuntimeConfig.API_URL}/journals`)
//   const data = await res.json()
//   const wtres = await fetch(`${publicRuntimeConfig.API_URL}/web-tools`)
//   const wtdata = await wtres.json()
//   const navres = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
//   const navdata = await navres.json()
//   const projres = await fetch(`${publicRuntimeConfig.API_URL}/projects`)
//   const projdata = await projres.json()
//   const iconres = await fetch(`${publicRuntimeConfig.API_URL}/icons`)
//   const icondata = await iconres.json()

//   return {
//       blogs: data,
//       webTools: wtdata,
//       navigation: navdata,
//       projects: projdata,
//       icon: icondata
//   }
// }
