import { Metadata } from 'next'
import { Badge, Box, Flex, List, ListItem, Text, SimpleGrid } from "@/components/chakra";
import Link from "next/link"
import Image from "next/legacy/image";
import PageWrapper from '@/components/animations';
 
export const metadata: Metadata = {
  title: 'Travel - Daniel Wildsmith',
}

const Header = ({title, date}: {title: string, date: string}) => {
    return (
        <>
            <Flex alignItems='center' mt={5}>
                <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: '"M PLUS Rounded 1c", sans-serif'}}>
                    {title}
                </span>
                <Badge ml={4} mt={0.5}>{date}</Badge>
            </Flex>

            
        </>
    )
}

export default function TravelPage() {
  return (
    <>
    <PageWrapper>

        <Header title='Newcastle, England' date='April 2023' />
        <SimpleGrid columns={{ base: 2, md: 4 }} h={'25vh'} spacing={2}>
        <Box h={'100%'} position="relative">
                    <Image
                        src='/images/travel/england1-1.JPG'
                        alt='Newcastle, England 1'
                        layout='fill'
                        objectFit='contain'
                    />
                </Box>
                <Box h={'100%'} position="relative">
                    <Image
                        src='/images/travel/england1-2.jpg'
                        alt='Newcastle, England 2'
                        layout='fill'
                        objectFit='contain'
                    />
                </Box>
                <Box h={'100%'} position="relative">
                    <Image
                        src='/images/travel/england1-3.JPG'
                        alt='Newcastle, England 3'
                        layout='fill'
                        objectFit='contain'
                    />
                </Box>
                <Box h={'100%'} position="relative">
                    <Image
                        src='/images/travel/england1-4.jpg'
                        alt='Newcastle, England 4'
                        layout='fill'
                        objectFit='contain'
                    />
                </Box>
        </SimpleGrid>
        <Header title='New York, New York' date='March 2023' />
        <SimpleGrid columns={{ base: 2, md: 4 }} h={'25vh'} spacing={2}>
            <Box h={'100%'} position="relative">
                    <Image
                        src='/images/travel/nyc-1.JPG'
                        alt='NYC 1'
                        layout='fill'
                        objectFit='contain'
                    />
            </Box>
            <Box h={'100%'} position="relative">
                    <Image
                        src='/images/travel/nyc-2.JPG'
                        alt='NYC 2'
                        layout='fill'
                        objectFit='contain'
                    />
            </Box>
            <Box h={'100%'} position="relative">
                    <Image
                        src='/images/travel/nyc-3.JPG'
                        alt='NYC 3'
                        layout='fill'
                        objectFit='contain'
                    />
            </Box>
            <Box h={'100%'} position="relative">
                    <Image
                        src='/images/travel/nyc-4.JPG'
                        alt='NYC 4'
                        layout='fill'
                        objectFit='contain'
                    />
            </Box>
        </SimpleGrid>

        <Header title='Washington DC' date='December 2022' />
        <SimpleGrid columns={{ base: 2, md: 4 }} h={'25vh'} spacing={2}>
            <Box h={'100%'} position="relative">
                    <Image
                        src='/images/travel/dc-1.jpg'
                        alt='Washington DC 1'
                        layout='fill'
                        objectFit='contain'
                    />
            </Box>
            <Box h={'100%'} position="relative">
                    <Image
                        src='/images/travel/dc-2.JPG'
                        alt='Washington DC 2'
                        layout='fill'
                        objectFit='contain'
                    />
            </Box>
            <Box h={'100%'} position="relative">
                    <Image
                        src='/images/travel/dc-3.jpg'
                        alt='Washington DC 3'
                        layout='fill'
                        objectFit='contain'
                    />
            </Box>
            <Box h={'100%'} position="relative">
                    <Image
                        src='/images/travel/dc-4.JPG'
                        alt='Washington DC 4'
                        layout='fill'
                        objectFit='contain'
                    />
            </Box>
        </SimpleGrid>

        <Header title='Cashiers, North Carolina' date='August 2022' />
        <SimpleGrid columns={{ base: 2, md: 4 }} h={'25vh'} spacing={2} mb={2}>
            <Box h={'100%'} position="relative">
                    <Image
                        src='/images/travel/nc1-1.JPG'
                        alt='Cashiers, North Carolina 1'
                        layout='fill'
                        objectFit='contain'
                    />
            </Box>
            <Box h={'100%'} position="relative">
                    <Image
                        src='/images/travel/nc1-2.JPG'
                        alt='Cashiers, North Carolina 2'
                        layout='fill'
                        objectFit='contain'
                    />
            </Box>
            <Box h={'100%'} position="relative">
                    <Image
                        src='/images/travel/nc1-3.JPG'
                        alt='Cashiers, North Carolina 3'
                        layout='fill'
                        objectFit='contain'
                    />
            </Box>
            <Box h={'100%'} position="relative">
                    <Image
                        src='/images/travel/nc1-4.JPG'
                        alt='Cashiers, North Carolina 4'
                        layout='fill'
                        objectFit='contain'
                    />
            </Box>
        </SimpleGrid>
    </PageWrapper>

    </>
  )
}