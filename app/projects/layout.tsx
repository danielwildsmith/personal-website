import { Flex } from "@/components/chakra"

export default function ProjectLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <>
            <Flex height={{ base: 'auto'}} flexDir={'column'} mb={4}>
                {children}
            </Flex>
        </>
    )
  }