
import styled from '@emotion/styled'
import {Flex, Box} from 'reflexbox'
import {Button, Card, Image, Text, Link} from 'rebass'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import projID from '../pages/projects/[id]'


export default function Projector({projects}) {
    const router = useRouter()
    console.log(projects)

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
                                sx = {{borderRadius: 10}}   
                                py={'5px'}
                                px={2}>
                                
                                    projects
                                </Box>
                        </Flex> 
                    
                        {projects.map(proj => <Box
                                key={proj.id}
                                color='white'
                                bg={'#5757b1'+ (10 - (2 * proj.id)).toString() + '0'}
                                sx = {{borderRadius: 10}}
                                filter='blur(10px)'
                                my={2}>
                            <Flex width="100%" justifyContent="space-between" flexDirection={['column','column','row','row','row']} py={1}>
                                    <Flex width={['100%','100%','40%']} flexDirection={['column','column','row','row','row']} justifyContent={['center','center', 'left']} textAlign="left" alignItems="center" my={2}>
                                            <Image src={`${API_URL}` + `${proj.displayImage.url}`}
                                            sx={{
                                                width: [ '100%', '20%' ],
                                                borderRadius: 10,
                                            }} mx={2} px={2}mb={[2,2,0,0,0]}>
                                            </Image>
                                        <Text fontSize={2} fontWeight={'bold'}>{proj.headline}</Text>
                                    </Flex>
                                

                                    <Flex flexDirection={['row','row','row','row','row']} justifyContent="space-around" alignItems="center" mx={2}>
                                       <Flex width="50%" justifyContent="center" textAlign="center"><Box as="a" onMouseEnter={() => setHover(true)} onClick={() => router.push(`/projects/${proj.id}`)}><Text><LinkStyle>[process]</LinkStyle></Text></Box></Flex>
                                       <Flex width="50%" justifyContent="center" textAlign="center"><Box ml={2}><Text>[demo]</Text></Box></Flex>
                                    </Flex>


                            </Flex>
                        </Box> )}
                         
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
    background-color: #37516580;
    border-radius: 3px;
    box-shadow: 1px 1px 10px 1px #00000020;
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