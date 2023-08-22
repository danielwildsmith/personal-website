import { Metadata } from 'next'
import { Badge, Box, Flex, Image, List, ListItem, Text } from "@/components/chakra";
import { TextLink } from '@/components/links';
import { ChevronRightIcon, ExternalLinkIcon } from '@/components/icons';

export const metadata: Metadata = {
    title: 'Finance Dashboard - Daniel Wildsmith',
}

export default function FinanceDashboard() {
    return (
        <>
            <Box display={'flex'} justifyContent={'center'}>
                <Image
                    src='../images/projects/finance-dashboard-1.png'
                    alt='Finance Dashboard'
                    minH={'30vh'}
                    maxH={'45vh'}
                    mb={2}
                />
            </Box>
            <Flex alignItems='center'>
                <TextLink content='Projects' link='/#projects' />
                <ChevronRightIcon ml={1} mr={1}/>
                <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: '"M PLUS Rounded 1c", sans-serif'}}>
                    Finance Dashboard
                </span>
                <Badge ml={3} mt={0.5}>June 2023</Badge>
            </Flex>

            <Text mt={3} textIndent={'1rem'}>
                A full-stack web application that integrates with the Plaid API to enable users to link multiple financial accounts and gain insights through visualizations of balance and transaction data.
            </Text>

            <List mx={5} mt={5}>
                <ListItem mx={2}>
                    <Badge colorScheme='green' mr={2}>
                        Website
                    </Badge>
                    <TextLink content='https://danielwildsmith.github.io/finance-dashboard/' link={'https://danielwildsmith.github.io/finance-dashboard/'} />
                    <ExternalLinkIcon mx={2} />
                </ListItem>
                <ListItem mx={2}>
                    <Badge colorScheme='green' mr={2}>
                        Source
                    </Badge>
                    <TextLink content='https://github.com/danielwildsmith/finance-dashboard' link={'https://github.com/danielwildsmith/finance-dashboard'} />
                    <ExternalLinkIcon mx={2} />
                </ListItem>
                <ListItem mx={2}>
                    <Badge colorScheme='green' mr={2}>
                        Stack
                    </Badge>
                    <span>React, NodeJS, MySQL</span>
                </ListItem>
            </List>
    
        </>
    )
}