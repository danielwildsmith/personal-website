import { Metadata } from 'next'
import { Badge, Box, Flex, Image, List, ListItem, Text } from "@/components/chakra";
import { TextLink } from '@/components/links';
import { ChevronRightIcon, ExternalLinkIcon } from '@/components/icons';

export const metadata: Metadata = {
    title: 'Building Strength - Daniel Wildsmith',
}

export default function SudokuSolver() {
    return (
        <>
            <Box display={'flex'} flexDir={{base: 'column', md: 'row'}}  justifyContent={'center'}>
                <Image
                    src='../images/projects/strength-1.jpg'
                    alt='Physique'
                    minH={{base: '15vh', md: '30vh'}}
                    maxH={{base: '15vh', md: '45vh'}}
                    mb={2}
                    w={'auto'}
                />
                <Image
                    src='../images/projects/strength-2.jpg'
                    alt='Dream Physique'
                    minH={'30vh'}
                    maxH={'45vh'}
                    mb={2}
                />
            </Box>
            <Flex alignItems='center'>
                <TextLink content='Projects' link='/projects' />
                <ChevronRightIcon ml={1} mr={1}/>
                <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: '"M PLUS Rounded 1c", sans-serif'}}>
                    Building Strength
                </span>
                <Badge ml={3} mt={0.5}>August 2020-</Badge>
            </Flex>

            <Text mt={3} textIndent={'1rem'}>
                A major life project of mine is becoming stronger. I have always wanted to be strong, so I began weightlifting a few years ago and am now venturing into calisthenics. Trying to look like Dio ^_^
            </Text>

            <List mx={5} mt={5}>
                <ListItem mx={2}>
                    <Badge colorScheme='green' mr={2}>
                        Goals
                    </Badge>
                    <span>Strict muscle up, 225lb bench, 315lb squat</span>
                </ListItem>
                <ListItem mx={2}>
                    <Badge colorScheme='green' mr={2}>
                        Phase
                    </Badge>
                    <span>Cutting</span>
                </ListItem>
            </List>
        </>
    )
}