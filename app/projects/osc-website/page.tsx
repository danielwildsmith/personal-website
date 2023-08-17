import { Metadata } from 'next'
import { Badge, Box, Flex, Image, List, ListItem, Text } from "@/components/chakra";
import { TextLink } from '@/components/links';
import { ChevronRightIcon, ExternalLinkIcon } from '@/components/icons';

export const metadata: Metadata = {
    title: 'UF OSC Website - Daniel Wildsmith',
}

export default function OSCWebsite() {
    return (
        <>
            <Box display={'flex'} justifyContent={'center'}>
                <Image
                    src='../images/projects/osc-website-1.png'
                    alt='UF Open Source Club Website'
                    minH={'30vh'}
                    maxH={'45vh'}
                    mb={2}
                />
            </Box>
            <Flex alignItems='center'>
                <TextLink content='Projects' link='/projects' />
                <ChevronRightIcon ml={1} mr={1}/>
                <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: '"M PLUS Rounded 1c", sans-serif'}}>
                    UF OSC Website
                </span>
                <Badge ml={3} mt={0.5}>September 2022-</Badge>
            </Flex>

            <Text mt={3} textIndent={'1rem'}>
                A full-stack web application that serves as the landing page for the UF Open Source Club. As a Tech Lead, I led biweekly coding sessions
                for a team of 10 and developed several key features for the small content management system and landing page.
            </Text>

            <List mx={5} mt={5}>
                <ListItem mx={2}>
                    <Badge colorScheme='green' mr={2}>
                        Website
                    </Badge>
                    <TextLink content='https://ufosc.org/' link={'https://ufosc.org/'} />
                    <ExternalLinkIcon mx={2} />
                    <span> (In beta testing)</span>
                </ListItem>
                <ListItem mx={2}>
                    <Badge colorScheme='green' mr={2}>
                        Source
                    </Badge>
                    <TextLink content='https://github.com/ufosc/Club_Website_2' link={'https://github.com/ufosc/Club_Website_2'} />
                    <ExternalLinkIcon mx={2} />
                </ListItem>
                <ListItem mx={2}>
                    <Badge colorScheme='green' mr={2}>
                        Stack
                    </Badge>
                    <span>NodeJS, EJS, CSS, MongoDB</span>
                </ListItem>
            </List>
    
        </>
    )
}