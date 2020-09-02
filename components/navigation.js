import styled from '@emotion/styled'
import {Flex, Box} from 'reflexbox'
import Link from 'next/link'
import {Image} from 'rebass'
import {useRouter} from 'next/router'

const Navigation = ({webTools, navigation}) => {

    const router = useRouter()
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
      
<Box mx={1} sx={{cursor: 'pointer'}}  as={'a'} onClick={() => {

    nav.Link === '' ? router.replace(`/`) : router.replace(`${nav.Link}`)
}}  className={path === '/' + nav.Link ? 'active' : 'inactive'}>{nav.Label}</Box>
    
                
          
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
        color: #06D6A0;
        transition: transform 300ms ease-in-out;
        transition: text-shadow;
        transition: color 300ms ease-in-out;
        transition: border-bottom 100ms ease-in-out;
    }
    .active {
        color: #FFD166;
        border-bottom: 3px solid #FFD166;
    }
    a:hover {
        color: #FFD166;
        transform: translateY(-2px);
        text-shadow: 2px 2px 1px #06D6A0;
        
    }
`

export default Navigation;