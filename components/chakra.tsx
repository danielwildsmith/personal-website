'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import '@fontsource/m-plus-rounded-1c';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

export const Theme = extendTheme({ config, fonts })

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}