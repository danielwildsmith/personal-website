"use client"

import { Link } from '@chakra-ui/next-js'
import { Button, Center, Flex, Heading, Icon, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Homepage - Daniel Wildsmith',
}

export default function Home() {
  return (
    <>
    <Text fontSize={'18px'} mb={6}>
      You have reached my cozy space on the internet. Feel free to rest here and explore a bit about me. 
    </Text>

    <Flex justifyContent={'space-between'}>
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
              leftIcon={<GitHub />}
              variant={'ghost'}
              colorScheme='teal'
              p={0}
              pl={2}
            ></Button>
            
          </Link>
          <Link href={'https://www.linkedin.com/in/danielwildsmith/'} target='_blank'>
            <Button
              leftIcon={<LinkedIn />}
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
    </>
  )
}
