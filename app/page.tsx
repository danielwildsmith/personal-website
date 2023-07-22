import { Button, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@/components/chakra"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/header"
import { GitHubIcon, LinkedInIcon, ChevronRightIcon, EmailIcon } from '@/components/icons'
import { TextLink } from "@/components/links"
import { Metadata } from 'next'
import Link from "next/link"
 
export const metadata: Metadata = {
  title: 'Homepage - Daniel Wildsmith',
}

export default function Home() {
  return (
    <>
      <PageHeader content={'You have reached my cozy space on the internet. Feel free to rest here and explore a bit about me. '} />

      <Flex justifyContent={'space-between'} mb={9}>
        <Stack gap={0}>
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

        <Image
          borderRadius='full'
          boxSize='100px'
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
        />
      </Flex>

      <Heading size={'md'} w={'fit-content'} borderBottom={'1px solid'}>
        About Me
      </Heading>
      <Text mt={1} mb={3}>
        I am currently a student at the <TextLink content='University of Florida' link='https://www.ufl.edu/'/> studying Computer Science and Philosophy.
        {' '} This past summer, I worked at <TextLink content='JEA' link='https://www.jea.com/About/' /> as a Software Developer Intern. 
      </Text>   
      <Text mb={3}>
        I love to build and learn new things. Stemmed from my first ever Hello World program in Java, my passion for coding and software development 
        {' '} has only grown as I have learned more. My recent projects have focused on full-stack web development.
      </Text> 
      <Text mb={2}>
        Outside of tech, I am obsessed with becoming stronger and recently have undertaken calisthenics. I also love <TextLink content="anime" link="https://youtu.be/1dDvMEisEC8"/>
        , minimalism, <TextLink content='traveling' link='/travel' />, soccer, and philosophy.
      </Text>
      <Flex justifyContent={'center'}>
        <Button as={Link} rightIcon={<ChevronRightIcon />} variant={'solid'} colorScheme='teal' href={'/projects'}>
          My Projects
        </Button>
      </Flex>

    </>
  )
}
