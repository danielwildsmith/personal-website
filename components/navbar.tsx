import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, HStack, IconButton, Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import NextLink from 'next/link'

export const Navbar = () => {
    return (
        <>
            <HStack direction={'row'} spacing={7} ml={8} display={{base: 'none', md: 'flex'}}>
                <Link as={NextLink} href="/projects">
                    Projects
                </Link>
                <Link as={NextLink} href="/travel">
                    Travel
                </Link>
                <Link as={NextLink} href="/resume" target="_blank">
                    Resume
                </Link>
            </HStack>

            <Box flex={1} display={'flex'} justifyContent={'flex-end'}>
                <Box display={{ base: 'inline-block', md: 'none' }}>
                    <Menu isLazy>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem as={NextLink} href="/">About</MenuItem>
                            <MenuItem as={NextLink} href="/projects">Projects</MenuItem>
                            <MenuItem as={NextLink} href="/travel">Travel</MenuItem>
                            <MenuItem as={NextLink} href="/resume" target="_blank">Resume</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
        </>
    )
}