import { Logo } from "@/components/logo";
import { Providers, Container, Flex } from "@/components/chakra";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
            <Footer />
          </Container>

        </Providers>
      </body>
    </html>
  );
}