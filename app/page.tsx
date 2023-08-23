import { AboutSection } from "@/components/about"
import PageWrapper from "@/components/animations"
import { Box, Button, Flex, Heading, Image, Stack, Text } from "@/components/chakra"
import { GitHubIcon, LinkedInIcon, EmailIcon } from '@/components/icons'
import { MoreSection } from "@/components/more"
import { ProjectSection } from "@/components/projects"
import { Metadata } from 'next'
import Link from "next/link"
 
export const metadata: Metadata = {
  title: 'Homepage - Daniel Wildsmith',
}

export default function Home() {
  return (
    <>
    <PageWrapper>
      <Flex height={{ base: 'auto', md: '77vh'}} direction={{ base: 'column', md: 'row' }}>
        <Stack gap={0} display={'flex'} justifyContent={'center'} alignItems={'center'} w={{ base: '100%', md: '30%'}}>
          <Image
            borderRadius='full'
            boxSize='200px'
            src='images/pfp.jpg'
            alt='Daniel Wildsmith'
            mb={1}
          />
          <Heading size={'lg'}>
            Daniel Wildsmith
          </Heading>
          <Text>
            CS Student / Software Developer
          </Text>
          <Flex>
            <Link href={'https://github.com/danielwildsmith'} target='_blank'>
              <Button
                leftIcon={<GitHubIcon />}
                variant={'ghost'}
                colorScheme='teal'
                p={0}
                pl={2}
              ></Button>
              
            </Link>
            <Link href={'https://www.linkedin.com/in/danielwildsmith/'} target='_blank'>
              <Button
                leftIcon={<LinkedInIcon />}
                variant={'ghost'}
                colorScheme='teal'
                p={0}
                pl={2}
              ></Button>
            </Link>
            <Link href={'mailto:danielwildsmith@ufl.edu?subject=Hey!'}>
              <Button
                leftIcon={<EmailIcon />}
                variant={'ghost'}
                colorScheme='teal'
                p={0}
                pl={2}
              ></Button>
            </Link>
          </Flex>
        </Stack>
        <Box w={['0', '0', '15%']} />
        <Box overflowY={'auto'} w={{ base: '100%', md: '55%'}}>
          <AboutSection />
          <ProjectSection />
          <MoreSection />
        </Box>
      </Flex>
    </PageWrapper>
    </>
  )
}
