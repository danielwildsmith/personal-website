'use client'

import { Text, Box, useColorModeValue } from '@/components/chakra'

export const PageHeader = ({ content }: { content: string }) => {
    return (
        <Box bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={2} mb={9} borderRadius={5} textAlign={'center'}>
          <Text fontSize={'18px'}>
            {content}
          </Text>
        </Box>
    )
}