"use client"

import { Logo } from "@/components/logo";
import { Providers } from "@/components/chakra";
import { Container } from "@chakra-ui/react";

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
            <Logo />
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}