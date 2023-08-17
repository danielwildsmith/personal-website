import { Box, Text } from '@/components/chakra'
import { TextLink } from '@/components/links'

export const Footer = () => {
    return(
        <>
            <Box position={'absolute'} bottom={0} w={'100%'} display={'flex'} flexDir={'column'} alignItems={'center'} mb={5}>
                <Text>
                    © Daniel Wildsmith 2023
                </Text>
                <Box w={'fit-content'}>
                    <TextLink content='Source Code' link='https://github.com/danielwildsmith/personal-website'/>
                </Box>
            </Box>
        </>
    )
}