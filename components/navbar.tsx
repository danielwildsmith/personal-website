"use client"

import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons"
import { Box, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, useColorMode, Text } from "@chakra-ui/react"
import NextLink from 'next/link'
import { MenuItemPageLink, PageLink } from "./links"

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
                <HStack direction={'row'} spacing={7} ml={8} display={{base: 'none', md: 'flex'}}>
                    <PageLink content="Projects" link="/#projects" />
                    <PageLink content="Travel" link="/travel" />
                    <Text 
                        as="a"
                        href={"/resume.pdf"}
                        _hover={{cursor: 'pointer', borderBottom: `1px solid`}}
                        target={'_blank'}
                    >
                        Resume
                    </Text>
                </HStack>

            <Box flex={1} display={'flex'} justifyContent={'flex-end'}>
                <IconButton
                    aria-label="Toggle theme"
                    // colorScheme={colorMode === 'light' ? 'purple' : 'orange'}
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
                            <MenuItemPageLink content='About' link="/#about" />
                            <MenuItemPageLink content='Projects' link="/#projects" />
                            <MenuItemPageLink content='Travel' link="/travel" />
                            <MenuItem 
                                as={NextLink}
                                href={'/resume.pdf'}
                                target="_blank"
                            >
                                Resume
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
        </>
    )
}