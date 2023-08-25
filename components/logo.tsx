"use client"

import { Link } from '@chakra-ui/next-js';
import { Text, useColorModeValue, Box, Center } from '@chakra-ui/react'
import { PageLink } from './links';

export const Logo = () => {
  return (
    <Center fontSize={'large'} fontWeight={'bold'} fontFamily='"M PLUS Rounded 1c", sans-serif' _hover={{borderBottom: ''}}>
      <Box display={{base: 'none', md: 'inline-block'}}>
        <PageLink content='Daniel Wildsmith' link="/#about" style={{ color: useColorModeValue('gray.800', 'whiteAlpha.900') }} />
      </Box>
      <Box display={{base: 'inline-block', md: 'none'}}>
        <PageLink content='Daniel Wildsmith' link="/" style={{ color: useColorModeValue('gray.800', 'whiteAlpha.900') }} />
      </Box>
    </Center>
  );
}
