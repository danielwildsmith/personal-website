"use client"

import { Box, Heading, Stack, Text, Button, Flex } from "@/components/chakra"
import { TextLink } from "./links"
import Link from "next/link"
import { ChevronRightIcon } from '@/components/icons'
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

export const MoreSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const variants = {
        hidden: { opacity: 0, x: -200 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.9,
                ease: [0.17, 0.55, 0.55, 1],
                delay: 0.5,
            },
        },
    };

    return (
        <>
            <Box display={'flex'} h={'77vh'} justifyContent={'center'} alignItems={'center'}>
                <Stack display={'flex'} justifyContent={'center'} h={'100%'}>
                    <Heading size={'md'} w={'fit-content'} borderBottom={'1px solid'}>
                        More
                    </Heading>
                    <Text mt={0.5} mb={0.5} >
                        Outside of tech, I ♥ calisthenics, <TextLink content="anime/manga" link="https://myanimelist.net/profile/danwildsmith"/>, minimalism, soccer, <TextLink content='lofi' link='https://www.youtube.com/@LofiGirl' />, and video games.
                    </Text>
                    <Text mt={0.5} mb={3} >
                        If you are interested in more about me, check out the links below or reach out to me! Thank you for visiting my cozy space on the internet :)
                    </Text>
                    <Flex justifyContent={'center'} mb={3} ref={ref}>
                    <motion.div ref={ref} variants={variants} initial="hidden" animate={inView ? 'show' : 'hidden'}>
                        <Button as={Link} rightIcon={<ChevronRightIcon />} variant={'solid'} colorScheme='teal' href={'/travel'} w={'fit-content'} mr={2}>
                            My travels
                        </Button>
                        <Button as={Link} rightIcon={<ChevronRightIcon />} variant={'solid'} colorScheme='teal' href={'/resume.pdf'} target={'_blank'} w={'fit-content'}>
                            My resume
                        </Button>
                    </motion.div>
                    </Flex>
                </Stack>
            </Box>
        </>
    )
}