"use client"

import { Link } from '@chakra-ui/next-js';
import { Text, useColorModeValue, Box, Center } from '@chakra-ui/react'

export const Logo = () => {
  return (
    <Center>
      <Link href="/#about">
        <Box as="span" display={'inline-flex'} alignItems={'center'} _hover={{color: '#88CCCA'}}>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='"M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            fontSize={'large'}
          >
            Daniel Wildsmith
          </Text>
        </Box>
      </Link>
    </Center>
  );
}
