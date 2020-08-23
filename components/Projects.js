
import styled from '@emotion/styled'
import {Flex, Box} from 'reflexbox'
import {Button, Card, Image, Text, Link} from 'rebass'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import projID from '../pages/projects/[id]'


export default function Projector({projects, icon}) {
    const router = useRouter()


    const { API_URL } = process.env
    let LinkStyle = null;
    const [linkHover, setHover] = React.useState(false)
    if (linkHover) {
        LinkStyle = styled.div`
        color: 'green';
        `
    } else {
        LinkStyle = styled.div`
        color: 'white';
        `
    }

    return (
        <ProjectStyled>
            <Box variant="roundedContainer" width={["80vw","70vw","60vw","50vw","40vw"]}>
                    <Flex flexDirection="column">
                        <Flex justifyContent="space-evenly" flexDirection="row" textAlign="center">
                                <Box width='auto' 
                                fontSize={4}
                                color='white'
                                bg='#5757b140'
                                filter='blur(10px)'
                                sx = {{borderRadius: 10, cursor:"none"}}   
                                py={'5px'}
                                px={2}
                               
                                >
                                
                                    projects
                                </Box>
                        </Flex> 
                    
                        {projects.map(proj => <ProjectInner><Box onClick={() => router.push(`/projects/${proj.id}`)}
                                key={proj.id}
                                color='white'
                                bg={'#5757b1'+ (10 - (2 * proj.id)).toString() + '0'}
                                sx = {{borderRadius: 10}}
                                filter='blur(10px)'
                                my={2}>
                            <Flex width="100%" justifyContent="space-between" flexDirection={['row','row','row','row','row']} py={1}>
                                    <Flex width={['100%','100%','60%']} flexDirection={['row','row','row','row','row']} justifyContent={['center','center', 'left']} textAlign="left" alignItems="center" my={2}>
                                        <Image display={['none','none','inline','inline','inline']} src={`${API_URL}` + `${proj.displayImage.url}`}
                                                sx={{
                                                    width: [ '100%', '20%' ],
                                                    borderRadius: 10,
                                                }} mx={2} px={2}mb={[2,2,0,0,0]}>
                                                </Image>
                                        <Text fontSize={2} px={10} fontWeight={'bold'}>{proj.headline}</Text>
                                    </Flex>
                                

                                    <Flex flexDirection={['row','row','row','row','row']} justifyContent="space-around" alignItems="center" mx={2}>
                                       <Flex justifyContent="center" textAlign="center" alignItems="center"><Box as="a" onMouseEnter={() => setHover(true)} ><Image src={API_URL + icon.icon.url} opacity={linkHover ? (10 - (2 * proj.id)).toString() + '0%' : 1} sx={{width:'32px'}}></Image></Box></Flex>
                                    </Flex>


                            </Flex>
                        </Box></ProjectInner> )}
                         
                    </Flex>
            </Box>
            
        </ProjectStyled>
    )
}
const {publicRuntimeConfig} = getConfig()

const ProjectStyled = styled.div`
    padding: 40px 0;
    


`
const ProjectInner = styled.div`
    opacity: 0.9;
    transition: opacity 300ms ease-in-out;
    transition: transform 300ms ease-in-out;
    :hover {
        transform: translateY(-2px);
        opacity: 1;
        cursor: pointer;
    }
    text-align: left;
    img {
        border-radius: 3px;
    }
    a {
        text-decoration: none;
        color: lightskyblue;   
    }



`

const LinkStyle = Projector.LinkStyle;