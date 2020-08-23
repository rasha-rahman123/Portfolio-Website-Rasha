import Header from '../components/header'

import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from '../components/GlobalStyles'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
import theme from '../theme/theme'



function MyApp({ Component, pageProps, webTools, navigation, projects}) {
  return(
     <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header webTools={webTools} navigation={navigation}/>
      <Component {...pageProps} projects={projects}/>
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

  return {
      blogs: data,
      webTools: wtdata,
      navigation: navdata,
      projects: projdata
  }
}
