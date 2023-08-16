"use client"

import { Box, Heading, Stack, Text, Flex, Theme, useColorModeValue } from "@/components/chakra"
import { TextLink } from "@/components/links"
import { motion } from "framer-motion";

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
                    <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} mt={3}>
                        <Box w={'35px'} h={'64px'} borderRadius={'3rem'} borderWidth={'4px'} borderColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.300')} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} p={2}>
                            <motion.div
                                animate={{
                                    y: [0, 26, 0],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                                style={{width: 8, height: 8, borderRadius: '50%', backgroundColor: 'darkgrey' }}
                            />
                        </Box>
                    </Flex>
            
                </Stack>
            </Box>
        </>
    )
}