import { Box, Text } from '@/components/chakra'
import { TextLink } from '@/components/links'

export const Footer = () => {
    return(
        <>
            <Text mt={'5'} textAlign={'center'}>
                © Daniel Wildsmith 2023
            </Text>
            <Box textAlign={'center'}>
                <TextLink content='Source Code' link='https://github.com/danielwildsmith/personal-website'/>
            </Box>
        </>
        
    )
}