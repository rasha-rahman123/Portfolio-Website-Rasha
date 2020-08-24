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
                        sx={{
                            border: 'solid 3px #DAF7DC'
                        }}
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
        color: #DAF7DC;
        transition: transform 300ms ease-in-out;
        transition: text-shadow;
        transition: color 300ms ease-in-out;
        transition: border-bottom 100ms ease-in-out;
    }
    .active {
        color: #9EE493;
        border-bottom: 3px solid #DAF7DC;
    }
    a:hover {
        color: #DAF7DC;
        transform: translateY(-2px);
        text-shadow: 2px 2px 1px #9EE493;
        
    }
`

export default Navigation;