"use client"

import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons"
import { Box, HStack, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, useColorMode } from "@chakra-ui/react"
import NextLink from 'next/link'

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
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
                <IconButton
                    aria-label="Toggle theme"
                    colorScheme={colorMode === 'light' ? 'purple' : 'orange'}
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    onClick={toggleColorMode}
                ></IconButton>

                <Box display={{ base: 'inline-block', md: 'none' }} ml={2}>
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