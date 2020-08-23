import styled from '@emotion/styled'
import {Flex, Box} from 'reflexbox'
import Navigation from './navigation'

function Header({webTools, navigation}) {
    console.log(webTools)
    return (
        <HeaderStyled>
           <Box>
               <Navigation webTools={webTools} navigation={navigation}/>
           </Box>

        </HeaderStyled>
    )
}


  

  const HeaderStyled = styled.header`
    a {
        text-decoration: none;
    }
    a:active {
        color: purple;
    }
`
  
export default Header;
