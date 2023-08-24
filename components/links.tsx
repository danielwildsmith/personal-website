'use client'

import { Text, useColorModeValue, Theme } from '@/components/chakra'
import { MenuItem } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { MouseEvent } from 'react'

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

export const PageLink = ({ content, link, style }: { content: string, link: string, style?: React.CSSProperties }) => {
    const router = useRouter();

    const handleClick = (e : MouseEvent) => {
        e.preventDefault();
        const hash = link.substring(link.indexOf('#') + 1);
        const element = document.getElementById(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            router.push(`/#${hash}`, { scroll: false });
        } else {
            router.push(link);
        }
    };

    return (
        <Text 
            as="a"
            href={link}
            onClick={handleClick}
            _hover={content == 'Daniel Wildsmith' ? {cursor: 'pointer'} : {cursor: 'pointer', borderBottom: `1px solid`}}
            target={link == '/resume.pdf' ? '_blank' : ''}
        >
        {content}
        </Text>
    )
}

export const MenuItemPageLink = ({ content, link, style }: { content: string, link: string, style?: React.CSSProperties }) => {
    const router = useRouter();

    const handleClick = (e : MouseEvent) => {
        e.preventDefault();
        const hash = link.substring(link.indexOf('#') + 1);
        const element = document.getElementById(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            router.push(`/#${hash}`, { scroll: false });
        } else {
            router.push(link);
        }
    };

    return (
        <MenuItem 
            as={Link}
            href={link}
            onClick={handleClick}
        >
            {content}
        </MenuItem>
    )
}
