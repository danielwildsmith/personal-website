'use client'

import { Text, useColorModeValue } from '@/components/chakra'

export const PageHeader = ({ content }: { content: string }) => {
    return (
        <Text fontSize={'18px'} mb={9} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
        {content}
      </Text>
    )
}