import { Box, Button, Flex, Heading, Stack, Text } from "@/components/chakra"
import { TextLink } from "@/components/links"
import Link from "next/link"
import { ChevronRightIcon } from '@/components/icons'

export const AboutSection = () => {
    return (
        <>
            <Box display={'flex'} h={'77vh'} justifyContent={'center'} alignItems={'center'}>
                <Stack display={'flex'} justifyContent={'center'} h={'100%'}>
                    <Heading size={'md'} w={'fit-content'} borderBottom={'1px solid'}>
                        About Me
                    </Heading>
                    <Text mt={1} mb={3}>
                        Hello! I am currently a student at the <TextLink content='University of Florida' link='https://www.ufl.edu/'/> studying Computer Science and Philosophy.
                        {' '} This past summer, I worked at <TextLink content='JEA' link='https://www.jea.com/About/' /> as a Software Developer Intern. 
                    </Text>   
                    <Text mb={3}>
                        I love to build and learn new things. Stemmed from my first ever Hello World program in Java, my passion for coding and software development 
                        {' '} has only grown as I have learned more. My recent projects have focused on full-stack web development.
                    </Text> 
                    <Text mb={2}>
                        Outside of tech, I am obsessed with becoming stronger and recently have undertaken calisthenics. I also love <TextLink content="anime" link="https://youtu.be/1dDvMEisEC8"/>
                        , minimalism, <TextLink content='traveling' link='/travel' />, soccer, and philosophy.
                    </Text>
                    <Flex justifyContent={'center'}>
                        <Button as={Link} rightIcon={<ChevronRightIcon />} variant={'solid'} colorScheme='teal' href={'/projects'}>
                            My Projects
                        </Button>
                    </Flex>
                </Stack>
            </Box>
        </>
    )
}