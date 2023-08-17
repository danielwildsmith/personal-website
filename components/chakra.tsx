'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import '@fontsource/m-plus-rounded-1c';
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { ColorModeScript } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: props.colorMode === 'light' ? '#f0e7db' : '#202023',
    }
  })
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  dark: {
    box: '#2b2b30',
    highlight: '#81E6D9',
    link: '#FF63C3'
  },
  light: {
    box: '#f0ebe4',
    highlight: '#2C7A7B',
    link: '#3D7AED'
  }
}

export const Theme = extendTheme({ config, styles, fonts, colors })

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <>
      <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
      <ChakraProvider theme={Theme}>
        {children}
      </ChakraProvider>
    </>
    
  )
}

export {
  Container, Flex, Heading, Image, Stack, Text, Button, useColorModeValue, Box, SimpleGrid, Badge, List, ListItem
} from '@chakra-ui/react'