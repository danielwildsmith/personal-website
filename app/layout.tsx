"use client"

import { Logo } from "@/components/logo";
import { Providers, Theme } from "@/components/chakra";
import { Container, Flex } from "@chakra-ui/react";
import { Navbar } from "@/components/navbar";

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
            <Flex mt={3} mb={9}>
              <Logo />
              <Navbar />
            </Flex>
          </Container>
          <Container maxWidth={'540px'}>
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}