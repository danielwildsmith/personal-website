"use client"

import Link from 'next/link'
import { Text, useColorModeValue, Box } from '@chakra-ui/react'

export const Logo = () => {
  return (
    (<Link href="/" scroll={false}>
      <Box as="span" display={'inline-flex'} alignItems={'center'} marginTop={4} _hover={{color: '#88CCCA'}}>
        <Text
          // color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='"M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          fontSize={'larger'}
        >
          Daniel Wildsmith
        </Text>
      </Box>
    </Link>)
  );
}
