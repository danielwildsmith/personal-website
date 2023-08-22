'use client'

import { Text, useColorModeValue, Theme } from '@/components/chakra'
import Link from 'next/link'

export const TextLink = ({ content, link }: { content: string, link: string }) => {
    return (
        <Text 
            color={useColorModeValue(Theme.colors.light.link, Theme.colors.dark.link)}
            as={Link}
            href={link}
            _hover={{cursor: 'pointer', borderBottom: `1px solid ${useColorModeValue(Theme.colors.light.link, Theme.colors.dark.link)}`}}
            target={content != 'Projects' ? '_blank' : ''}
        >
            {content}
        </Text>
    )
}

export const PageLink = ({ content, link }: { content: string, link: string }) => {
    return (
        <Text 
            as={Link}
            href={link}
            _hover={{cursor: 'pointer', borderBottom: `1px solid`}}
            target={content == 'Resume' ? '_blank' : ''}
        >
        {content}
        </Text>
    )
}
