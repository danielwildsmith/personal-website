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
    <html lang="en" style={{width: '100%', minHeight: '100%', margin: 0, padding: 0}}>
      <body style={{width: '100%', minHeight: '100%', marginTop: 0, padding: 0}}>
        <Providers>
          <div style={{position: 'relative', minHeight: '100%'}}>
            <Container maxWidth={'container.lg'}>
              <Flex mt={3} mb={9}>
                <Logo />
                <Navbar />
              </Flex>
            </Container>
            <Container maxWidth={'850px'}>
              {children}
              <Flex>
                <Footer />
              </Flex>
            </Container>
          </div>
        </Providers>
      </body>
    </html>
  );
}