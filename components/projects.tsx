import { Box, Heading, Stack, Text, SimpleGrid, Image, Flex } from "@/components/chakra"
import Link from "next/link"

export const Project = ({ id, title, image }: { id: string, title: string, image: string }) => {
    return (
        <>
            <Box as={Link} href={`/projects/${id}`} w={'100%'}>
                <Image
                    src={image}
                    alt={title}
                    borderRadius={'12px'}
                    style={{ aspectRatio: "4 / 2.5" }} 
                />
                <Text textAlign={'center'} fontSize={17} >
                    {title}
                </Text>
            </Box>
        </>
    )
    
}

export const ProjectSection = () => {
    return (
        <>
            <Flex flexDir={'column'} height={{ base: 'auto', md: '77vh'}} justifyContent={'center'} alignItems={'center'} id="projects">
                <Stack display={'flex'} justifyContent={'center'} h={'100%'}>
                    <Heading size={'md'} w={'fit-content'} borderBottom={'1px solid'}>
                        Projects
                    </Heading>
                    <Text mt={0.5} mb={3} >
                        Nothing makes me lose track of time like working on a project. Here are some I am proud of.
                    </Text>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} maxH={{ base: '100%', md: '55vh'}}>
                        <Project id="finance-dashboard" title="Finance Dashboard Website" image='images/projects/finance-dashboard-preview.png' />
                        <Project id="osc-website" title="UF Open Source Club Website" image="images/projects/osc-website-preview.png" />
                        <Project id="sudoku-solver" title="Sudoku Solver" image="images/projects/sudoku-solver-preview.png" />
                        <Project id="strength" title="Building Strength" image="images/projects/strength-preview.jpg" />
                    </SimpleGrid>
                </Stack>
            </Flex>
        </>
    )
}