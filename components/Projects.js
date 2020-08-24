
import styled from '@emotion/styled'
import {Flex, Box} from 'reflexbox'
import {Button, Card, Image, Text, Link} from 'rebass'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import projID from '../pages/projects/[id]'

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

export default function Projector({projects, icon}) {
    const router = useRouter()
    const colorArr = [
        '#00BFFF',
        '#FF1493',
        '#CD5C5C',
        '#4B0082',
        '#20B2AA'
    ]
 
    const { API_URL } = process.env
    const shuffled = (proj) => { return shuffle(proj)};
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
            <Box opacity="1" variant="roundedContainer" width={["80vw","70vw","60vw","50vw","40vw"]}>
                    <Flex flexDirection="column">
                        <Flex justifyContent="space-evenly" flexDirection="row" textAlign="center">
                                <Box width='auto' 
                                fontSize={4}
                                color='#DAF7DC'
                                filter='blur(10px)'
                                sx = {{borderRadius: 10, cursor:"default"}}   
                                py={'5px'}
                                px={2}
                               
                                >
                                
                                    projects
                                </Box>
                        </Flex> 
                    
                        {projects.map(proj => <ProjectInner><Box onClick={() => router.push(`/projects/${proj.id}`)}
                                key={proj.id}
                                color='#DAF7DC'
                                bg={'#9EE493'+ (10 - (1 * proj.id)).toString() + '0'}
                                sx = {{borderRadius: 10, border: '2px solid #DAF7DC'}}
                                filter='blur(10px)'
                                my={2}>
                            <Flex width="100%" justifyContent="space-between" flexDirection={['row','row','row','row','row']} py={1}>
                                    <Flex width={['100%','100%','100%']} flexDirection={['row','row','row','row','row']} justifyContent={['center','center', 'left']} textAlign="left" alignItems="center" my={2}>
                                        <Image display={['none','none','inline','inline','inline']} src={`${API_URL}` + `${proj.displayImage.url}`}
                                                sx={{
                                                    width: [ '90%', '10%' ],
                                                    borderRadius: 10,
                                                    border: '2px inset #DAF7DC'
                                                }} mx={2}mb={[2,2,0,0,0]}>
                                                </Image>
                                        <Text fontSize={2} px={10} fontWeight={'bold'}>{proj.headline}</Text>
                                        <Box ml={4} width={350}>
                                        <Flex justifyContent="center" alignItems="center" flexWrap="nowrap" textAlign="center">
                                        <Box mr={1}
  sx={{
      opacity: 0.5,
    display: 'inline-block',
    bg: proj.genre.slug === 'music' ? 
    'orange' : proj.genre.slug === 'web-dev' ? 
    'blue' : proj.genre.slug === 'psychology' ?
    'red' : proj.genre.slug === 'art' ? 'tangerine' : 'white' ,
    color: 'inherit',
    px: 2,
    py: 1,
    fontSize: '0.5em',
    fontWeight: '800',
    borderRadius: 9999,
  }}>
  {proj.genre.slug === 'music' ? 
    'music' : proj.genre.slug === 'web-dev' ? 
    'web dev' : proj.genre.slug === 'psychology' ?
    'psych' : proj.genre.slug === 'art' ? 'art' : 'uncategorized'}
</Box>
<Flex justifyContent="center" alignItems="center" flexWrap="nowrap">
{shuffled(proj.technologies).slice(0,3).map(tech => <Box mx={0.5} display={['none','none','inline-block']}
  sx={{
      
      opacity: 0.5,
    bg: colorArr[Math.round((Math.random() * 4))],
    color: 'inherit',
    px: 2,
    py: 1,
    fontSize: '10%',
    fontWeight: '800',
    borderRadius: 3,
  }}>
  
  {tech.Title}
</Box>)}</Flex></Flex>
                                        </Box>
                                    </Flex>
                                

                                    <Flex flexDirection={['row','row','row','row','row']} justifyContent="space-around" alignItems="center" mx={2}>
                                       <Flex justifyContent="center" textAlign="center" alignItems="center"><Box as="a"><Image className="opacityImage" src={API_URL + icon.icon.url} opacity={(10 - (1 * proj.id)).toString() + '0%'} sx={{width:'32px'}}></Image></Box></Flex>
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