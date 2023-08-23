"use client"

import { Link } from '@chakra-ui/next-js';
import { Text, useColorModeValue, Box, Center } from '@chakra-ui/react'
import { PageLink } from './links';

export const Logo = () => {
  return (
    <Center fontSize={'large'} fontWeight={'bold'} fontFamily='"M PLUS Rounded 1c", sans-serif' _hover={{borderBottom: ''}}>
          <PageLink content='Daniel Wildsmith' link="/#about" style={{ color: useColorModeValue('gray.800', 'whiteAlpha.900') }} />
    </Center>
  );
}
