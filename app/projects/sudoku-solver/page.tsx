import { Metadata } from 'next'
import { Badge, Box, Flex, Image, List, ListItem, Text } from "@/components/chakra";
import { TextLink } from '@/components/links';
import { ChevronRightIcon, ExternalLinkIcon } from '@/components/icons';
import PageWrapper from '@/components/animations';

export const metadata: Metadata = {
    title: 'Sudoku Solver - Daniel Wildsmith',
}

export default function SudokuSolver() {
    return (
        <>
        <PageWrapper>
            <Box display={'flex'} justifyContent={'center'}>
                <Image
                    src='../images/projects/sudoku-solver-1.gif'
                    alt='Sudoku Solver'
                    minH={'30vh'}
                    maxH={'45vh'}
                    mb={2}
                />
            </Box>
            <Flex alignItems='center'>
                <TextLink content='Projects' link='/#projects' />
                <ChevronRightIcon ml={1} mr={1}/>
                <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: '"M PLUS Rounded 1c", sans-serif'}}>
                    Sudoku Solver
                </span>
                <Badge ml={3} mt={0.5}>September 2022-</Badge>
            </Flex>

            <Text mt={3} textIndent={'1rem'}>
                A remake of the classic game "Sudoku" that can visually auto solve any complex board using a backtracking algorithm.
            </Text>

            <List mx={5} mt={5}>
                <ListItem mx={2}>
                    <Badge colorScheme='green' mr={2}>
                        Source
                    </Badge>
                    <TextLink content='https://github.com/danielwildsmith/sudoku-solver' link={'https://github.com/danielwildsmith/sudoku-solver'} />
                    <ExternalLinkIcon mx={2} />
                </ListItem>
                <ListItem mx={2}>
                    <Badge colorScheme='green' mr={2}>
                        Stack
                    </Badge>
                    <span>Python, Pygame</span>
                </ListItem>
            </List>
        </PageWrapper>
        </>
    )
}