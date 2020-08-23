import Header from '../components/header'
import Footer from '../components/footer'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from '../components/GlobalStyles'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
import theme from '../theme/theme'
import {Flex, Box} from 'rebass'



function MyApp({ Component, pageProps, webTools, navigation, projects, icon}) {
  return(
     <>
    <ThemeProvider theme={theme}>
      <Box height="100%">
        <Flex flexDirection="column" justifyContent="space-between" alignItems="right">
          <GlobalStyles />
          <Header webTools={webTools} navigation={navigation}/>
          <Component {...pageProps} projects={projects} icon={icon}/>
          <Footer />
      </Flex>
      </Box>
    </ThemeProvider>
  </>)
}

export default MyApp
const {publicRuntimeConfig} = getConfig()

MyApp.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/journals`)
  const data = await res.json()
  const wtres = await fetch(`${publicRuntimeConfig.API_URL}/web-tools`)
  const wtdata = await wtres.json()
  const navres = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
  const navdata = await navres.json()
  const projres = await fetch(`${publicRuntimeConfig.API_URL}/projects`)
  const projdata = await projres.json()
  const iconres = await fetch(`${publicRuntimeConfig.API_URL}/r-arrow-icon`)
  const icondata = await iconres.json()

  return {
      blogs: data,
      webTools: wtdata,
      navigation: navdata,
      projects: projdata,
      icon: icondata
  }
}
