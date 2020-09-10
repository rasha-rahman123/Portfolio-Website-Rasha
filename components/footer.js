import styled from '@emotion/styled'
import {Flex, Box, Text, Link} from 'rebass'

function Footer() {
    console.log(socialLinks)
    return (
        <FooterStyled>
           <Box my={10}>
               <Flex justifyContent="center">
                    <Link href="/"><a><Text>[ rasha.world 2020 ]</Text></a></Link>
                </Flex>
                <Flex alignItems="center" justifyContent="center" flexDirection="row">
                    {socialLinks.map(social => <Link
                    sx={{cursor: 'pointer'}}
                    onClick={()=> window.open(social.link)}
                    key={social.id}
                    mx={1}
                    ><a>
                        {social.name}
                    </a>
                    </Link>)}
         
                </Flex>
           </Box>

        </FooterStyled>
    )
}


  export const socialLinks = [
                {
                    id: 1, 
                    name: 'Twitter', 
                    link: 'http://twitter.com/raaahhh_sha'
                },
                {
                    id: 2, 
                    name: 'Github', 
                    link: 'https://github.com/rashasDemos'
                },
                {
                    id: 3, 
                    name: 'Email', 
                    link: 'mailto:rasha.r.rahman@gmail.com'
                }
  ]

  const FooterStyled = styled.footer`
  cursor: default;
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
      color: #DAF7DC;
      
      transition: transform 300ms;
  }

  a:hover {
      color: lightskyblue;
      
      transform: translateY(-3px)
  }
`
  
export default Footer;

