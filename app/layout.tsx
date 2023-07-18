"use client"

import { Logo } from "@/components/logo";
import { Providers, Theme } from "@/components/chakra";
import { Container, Flex } from "@chakra-ui/react";
import { Navbar } from "@/components/navbar";

export const metadata = {
  title: 'Daniel Wildsmith - Homepage',
  description: 'Home Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Container maxWidth={'container.md'}>
            <Flex mt={3}>
              <Logo />
              <Navbar />
            </Flex>
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}