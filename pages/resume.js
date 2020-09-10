
import {Flex, Box} from 'reflexbox'
import {Text} from 'rebass'
import {NextSeo} from 'next-seo'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from '@emotion/styled'

const resume = ({Component, resume, resumeLink}) => {
	const { API_URL } = process.env
  const router = useRouter()
  const resu = resume.reduce((acc, resume) => {
    console.log(resumeLink)
	  return { ...acc, [resume.id]: resume};
}, {})

  const SEO = {
    title: `Rasha's Resume`,
description: `Rasha Rahman's resume`,

openGraph: {    
  title: `Rasha's Resume`,
  description: `Rasha Rahman's resume`,
},

}
    return (
      <>  
          <NextSeo {...SEO} />
          <ResumeStyled>
          <Box variant="container">
           <Flex flexDirection={'column'}>
              {/* Row */}
            <Flex flexDirection={'row'} justifyContent="center" alignItems="center" textAlign="center">
              {/* <Box p={3} width={1/3}>
                <Box as={'h1'}>

                </Box>
              </Box> */}
              <Box p={3} width={1}>
                <Box as={'h5'}>
            <Link href={API_URL + resumeLink.ResumeFile.url}>
		<a>
	    		[click here for pdf version]
            	</a>
	</Link>
	    </Box>
              </Box>
              {/* <Box p={3} width={1/3}>
                <Box as={'h2'}>
           
                </Box>
              </Box> */}
            </Flex>
              {/* Row */}
              <Flex flexDirection={'column'} textAlign="left">
              <Box px={3} py={1}>
                    <Box sx={{
                      textDecoration: 'underline'
                    }} as={'h1'}>
                      Education
                    </Box>
                    {resu[1].Education.map(edu => <Flex flexDirection={'row'}>
                          <Box p={3}  fontWeight={600} as={'h5'}>
                            {edu.schoolName}-
                          </Box>
                          <Box  p={3}  fontWeight={400} as={'h5'}>
                          -{edu.major}-
                          </Box>
                          <Box p={3}  fontWeight={400} as={'h5'}>
                          -{edu.timeSpent}-
                          </Box>
                    </Flex>)}
              </Box>
            </Flex>
             {/* Row */}
             <Flex flexDirection={'column'} textAlign="left">
             <Box px={3} py={1}>
                    <Box sx={{
                      textDecoration: 'underline'
                    }} as={'h1'}>
                      Skillset
                    </Box>
                   {resu[1].Skillset.map(skill => <>
                    <Flex flexDirection={'row'} justifyContent="left" alignItems="center">
                    <Box p={3}  fontWeight={600} as={'h5'}>
                            {skill.field}-
                          </Box>
                          <Box  p={3}  fontWeight={400} as={'h5'}>
                            -{skill.subfields}-
                          </Box>
                          <Box p={3}  fontWeight={400} as={'h5'}>
                            -{skill.experience}
                          </Box>
                    </Flex>
                    <Box fontWeight={600} pb={1} px={3} as={'h6'}>
                            tools used:
                          </Box>
                          <Box fontWeight={600} pb={3} px={3} as={'h6'}>
                           {skill.tools}
                          </Box>
                          
                   </>)}
                    
              </Box>
              
            </Flex>
              {/* Row */}
              <Flex flexDirection={'column'}>
              <Box px={3} py={1}>
                    <Box sx={{
                      textDecoration: 'underline'
                    }} as={'h1'}>
                      Work
                    </Box>
                   {resu[1].Work.map(job => <>
                    <Flex key={job.id} flexDirection={'row'}  justifyContent="left" alignItems="center">
                    <Box p={3}  fontWeight={600} as={'h5'}>
                            {job.company}
                          </Box>
                          <Box  p={3}  fontWeight={400} as={'h5'}>
                            {job.jobTitle}
                          </Box>
                          <Box  p={3}  fontWeight={400} as={'h5'}>
                            {job.timeSpent}
                          </Box>
                    </Flex>
                    <Flex flexDirection="column" alignItems="left" justifyContent="left">
                          <Box px={3} pb={2} as={'h6'}>
                            {job.mainDesc}
                          </Box>
                          <Box px={2}  as={'h6'}>
                            <Box  as={'ul'}>
                              {job.Responsibilities.map(res =><Box key={res.id} as={'li'}>{res.task}</Box> )}
       
                            </Box>
                          </Box>
                    </Flex>
                   </>)}
              </Box>
            </Flex>
            <Box as="h4" color="lightyellow" opacity={0.5} mt={2} sx={{cursor:"pointer", ':hover': {opacity: 1} }}><Box onClick={() => router.back()} sx={{textDecoration:"none"}}>Click Here To Go Back</Box></Box>
           </Flex>
            
          </Box>   
          </ResumeStyled>
      </>
    
    )
}

const ResumeStyled = styled.div`
cursor: default;
}
a {
  text-decoration: none;
  color: #FFD166;
}
a:hover {
  color: #06D6A0;
}
`
export default resume;

export async function getServerSideProps(context) {
  const { API_URL } = process.env
  const res = await fetch(`${API_URL}/resumes`)
  const data = await res.json()
  const resume = await fetch(`${API_URL}/resume-file`)
  const resumedata = await resume.json()


  return {
    props: {
      resume: data,
	resumeLink: resumedata
    }
  }
}
