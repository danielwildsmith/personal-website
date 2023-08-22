import { Metadata } from 'next'
import { Badge, Box, Flex, List, ListItem, Text, SimpleGrid } from "@/components/chakra";
import { TextLink } from '@/components/links';
import { ChevronRightIcon } from '@/components/icons';
import Image from "next/legacy/image";

export const metadata: Metadata = {
    title: 'Building Strength - Daniel Wildsmith',
}

export default function BuildingStrength() {
    return (
        <>
            <SimpleGrid columns={{ base: 1, md: 2 }} h={'52vh'}>
                <Box h={'100%'} position="relative">
                    <Image
                        src='/images/projects/strength-1.jpg'
                        alt='My Physique'
                        layout='fill'
                        objectFit='contain'
                    />
                </Box>
                <Box h={'100%'} position="relative">
                    <Image
                        src='/images/projects/strength-2.jpg'
                        alt='Dream Physique'
                        layout='fill'
                        objectFit='contain'
                    />
                </Box>
            </SimpleGrid>

            <Flex alignItems='center' mt={2}>
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
                    <span>Strict muscle up, handstand hold, 315lb squat</span>
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