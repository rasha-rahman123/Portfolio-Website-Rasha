import styled from '@emotion/styled'
import {Flex, Box} from 'reflexbox'
import Link from 'next/link'
import {Image} from 'rebass'
import {useRouter} from 'next/router'

const Navigation = ({webTools, navigation}) => {

    const router = useRouter()
    console.log(router)
    const path = router.pathname
    return (
        <NavStyled>
    <Box variant="container" py={0}width={{xl:'100%', sm:'90%'}}>
    <Flex justifyContent="space-between" flexDirection={{_:'column', md:'row'}} alignItems="center" width="100%">
        <Link href="/">
            <a>
            {webTools.map(webTools => (
                <Flex key={webTools.id}justifyContent="space-between" alignItems="center"  my={20}>
                        <Image
                        src="/avatar.png"
                        variant='avatar'
                        />
                        <Box key={webTools.id} as="h4">{webTools.websiteTitle}</Box>
                </Flex>
))}     </a>
        </Link>
    
            <Box>
            <Flex justifyContent="space-evenly" flexDirection='row'>
            {navigation.map(nav => (
      
                <Link key={nav.id} href={nav.Link}><a className={path === nav.Link ? 'active' : 'inactive'}><Box mx={1}>{nav.Label}</Box></a></Link>
    
                
          
               ))}
               </Flex>
                </Box>
       
    </Flex>
</Box>
</NavStyled>
)
}

const NavStyled = styled.div`


    a {
        text-decoration: none;
        color: white;
        transition: transform 300ms ease-in-out;
        transition: text-shadow;
    }
    .active {
        color: darkgoldenrod;
    }
    a:hover {
        color: gold;
        transform: translateY(-2px);
        text-shadow: 2px 2px 1px darkgoldenrod;
        
    }
`

export default Navigation;