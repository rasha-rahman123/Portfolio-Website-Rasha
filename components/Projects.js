
import styled from '@emotion/styled'
import {Flex, Box} from 'reflexbox'
import {Button, Card, Image, Text} from 'rebass'
import Link from 'next/link'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import projID from '../pages/projects/[genre]/[slug]'
import {motion} from 'framer-motion'



export default function Projector({projects, icon, isToggled, setToggle}) {
    const router = useRouter()
    const colorArr = [
        '#00BFFF',
        '#FF1493',
        '#CD5C5C',
        '#4B0082',
        '#20B2AA'
    ]

    const [genreFilter, setGenre] = React.useState(['web-dev', 'psychology']);

    let filteredRes = projects.filter(j => j.genre.slug !== genreFilter);

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
        <ProjectStyled><Flex justifyContent="center" alignItems="center" textAlign="center">
            <Box opacity="1" variant="roundedContainer"  flexGrow={1}>
                
            <motion.div initial="pageInitial" animate="pageAnimate" variants ={{
            pageInitial: {
              opacity: 0,
              scale: 0,
            },
            pageAnimate: {
              opacity: 1,
            scale: [0,1.1,1],
              transition: {
                  delay: .4,
                  when: "beforeChildren",
      staggerChildren: 0.3,
              }

            }
          }}>   <Flex flexDirection="row"  justifyConten="left" alignItems="left"  textAlign="left">
          <Box pt={1} pb={3}
         as={'h5'}
          color='inherit'
         
         
         
          >projects:
          </Box>
  </Flex> 

                    <Flex flexDirection={["row","row","column"]} justifyContent="space-between" flexWrap="wrap"  flexGrow={2}   >
                     
                        {filteredRes.map(proj => <ProjectInner><Link href={isToggled ? `/` : `/?projID=${proj.id}`} as={isToggled ? `/` : `/projects/${proj.genre.slug}/${proj.slug}`}><a><Box id="slide" 
                                key={proj.id}
                                onClick={async () => {
                                    await setToggle(!isToggled)
                   
                                }}
                                color='#073B4C'
                                width={['100%', '100%', '400px']}
                                bg={'#06D6A0'+ (100 - (5 * proj.id)).toString()}
                                py={['2','2','1']}
                                sx = {{borderRadius: 5, border: '2px inset #DAF7DC' + (100 - (10 * proj.id)).toString(), boxShadow: '1px 1px 10px #00000020'}}
                                filter='blur(10px)'
                                my={2}>
                          
                                    <Flex width={['100%','100%','100%']} flexDirection={['row']} justifyContent={['center','space-between', 'space-between']} textAlign="left" alignItems="center"flexGrow={1}>
                                        <Image display={['none','none','inline','inline','inline']} src={`${API_URL}` + `${proj.displayImage.url}`}
                                                sx={{
                                                    width: [ '90%', '5%' ],
                                                    borderRadius: 10
                                                   
                                                }} mx={2}mb={[2,2,0,0,0]}>
                                                </Image>
                                        <Box ml={1} sx={{overflow: 'hidden', whiteSpace: 'nowrap'}}            as={'h6'} px={[1,1,0]} fontWeight={'bold'}>{proj.headline}</Box>
                                        <Box >
                                            <Flex justifyContent="center" alignItems="center"  flexDirection="row" flexWrap="nowrap" textAlign="center" flexGrow={1}>
                                                <Box mr={1} className="opacHover"
                                                as={'h6'}
                                                sx={{
                                                    opacity: 'inherit',
                                                    display: 'inline-block',
                                                    bg: proj.genre.slug === 'music' ? 
                                                    '#118AB2' : proj.genre.slug === 'web-dev' ? 
                                                    '#073B4C' : proj.genre.slug === 'psychology' ?
                                                    '#540941' : proj.genre.slug === 'art' ? 'tangerine' : 'white' ,
                                                    color: '#EF476F',
                                                    px: 2,
                                                    py: 1,
                                                    fontWeight: '600',
                                                    borderRadius: 9999,
                                                    overflow: 'hidden',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                {proj.genre.slug === 'music' ? 
                                                    'music' : proj.genre.slug === 'web-dev' ? 
                                                    'web dev' : proj.genre.slug === 'psychology' ?
                                                    'psych' : proj.genre.slug === 'art' ? 'art' : 'uncategorized'}
                                                </Box>
                                            </Flex>
                                    
                                        </Box>

                                     
                                    </Flex>
                                

                                    
                                     


                     
                        </Box></a></Link></ProjectInner> )}
                         
                    </Flex>
                    </motion.div>
            </Box>
            </Flex>
        </ProjectStyled>
    )
}
const { publicRuntimeConfig } = getConfig()

const ProjectStyled = styled.div`
    


`
const ProjectInner = styled.div`
    opacity: 0.9;
    transition: opacity 300ms ease-in-out;
    transition: transform 300ms ease-in-out;
    margin: 1px;
    :hover {
        transform: translateY(-3px);
        opacity: 1;
        cursor: pointer;
        color: #FFD166;
        
    }
    text-align: left;
    img {
        border-radius: 3px;
    }
    a {
        text-decoration: none;
        color: lightskyblue;   
    }
    .opacHover:hover {
        opacity: 1;
        color: inherit;
    }
    .opacHover {
        transition: opacity 300ms ease-in-out;
    }
    #slide:hover {
        color: #FFD166;
    }
`

const LinkStyle = Projector.LinkStyle;