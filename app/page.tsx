import { Button, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@/components/chakra"
import { PageHeader } from "@/components/header"
import { GitHubIcon, LinkedInIcon } from '@/components/icons'
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
          </Flex>
        </Stack>

        <Image
          borderRadius='full'
          boxSize='100px'
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
        />
      </Flex>

      <Heading size={'md'}>
        About Me
      </Heading>
      <Text mt={1} mb={3}>
        I am currently a student at the University of Florida studying Computer Science and Philosophy.
        {' '} This past summer, I worked at JEA as a Software Developer Intern. 
      </Text>   
      <Text mb={3}>
        I love to build and learn new things. Stemmed from my first ever Hello World program in Java, my passion for coding and software development 
        {' '} has only grown as I have learned more. My recent projects have focused on full-stack web development.
      </Text> 
      <Text>
        Outside of tech, I am obsessed with becoming stronger and recently have undertaken calisthenics. I also love anime, minimalism, traveling, 
        {' '} soccer, and philosophy.
      </Text>
    </>
  )
}
