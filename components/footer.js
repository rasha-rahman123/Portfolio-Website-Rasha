import styled from '@emotion/styled'
import {Flex, Box, Text, Link} from 'rebass'


function Footer() {
    return (
        <FooterStyled>
           <Box my={10}>
               <Flex justifyContent="center">
                    <Text>[ rasha.world 2020 ]</Text>
                </Flex>
                <Flex alignItems="center" justifyContent="center" flexDirection="row">
                    <Link href="http://twitter.com/raaahhh_sha" mx={1}><a>Twitter</a></Link>
                    <Link href="" mx={1}><a>Github</a></Link>
                    <Link href="" mx={1}><a>Email</a></Link>
                </Flex>
           </Box>

        </FooterStyled>
    )
}


  

  const FooterStyled = styled.footer`
  position:relative;
   bottom:0;
   width:100%;
   height:10px;
  text-align: center;
  opacity: 0.4;
  :hover{
    opacity: 1;
  }
  a {
      text-decoration: none;
      font-size: smaller;
      color: white;
      
      transition: transform 300ms;
  }

  a:hover {
      color: lightskyblue;
      
      transform: translateY(-3px)
  }
`
  
export default Footer;
