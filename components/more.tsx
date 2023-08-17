import { Box, Heading, Stack, Text, Button, Flex } from "@/components/chakra"
import { TextLink } from "./links"
import Link from "next/link"
import { ChevronRightIcon } from '@/components/icons'

export const MoreSection = () => {
    return (
        <>
            <Box display={'flex'} h={'77vh'} justifyContent={'center'} alignItems={'center'}>
                <Stack display={'flex'} justifyContent={'center'} h={'100%'}>
                    <Heading size={'md'} w={'fit-content'} borderBottom={'1px solid'}>
                        More
                    </Heading>
                    <Text mt={0.5} mb={3} >
                        Outside of tech, I ♥ calisthenics, <TextLink content="anime/manga" link="https://myanimelist.net/profile/danwildsmith"/>, minimalism, soccer, <TextLink content='lofi' link='https://www.youtube.com/@LofiGirl' />, and video games.
                    </Text>
                    <Flex justifyContent={'center'} mb={3}>
                        <Button as={Link} rightIcon={<ChevronRightIcon />} variant={'solid'} colorScheme='teal' href={'/travel'} w={'fit-content'} mr={2}>
                            My travels
                        </Button>
                        <Button as={Link} rightIcon={<ChevronRightIcon />} variant={'solid'} colorScheme='teal' href={'/travel'} w={'fit-content'}>
                            My resume
                        </Button>
                    </Flex>
                    
                    <Text>
                        Thank you for visiting my cozy space on the internet :) Feel free to reach out or connect with me on one of my socials!
                    </Text>
                </Stack>
            </Box>
        </>
    )
}