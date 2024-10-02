import { Box, Flex, Heading, Link, SimpleGrid } from "@chakra-ui/react";
import { LanguageSelect } from "./LanguageSelect";

function Header() {
  return (
    <Box bg="green.800" p={4} color="orange.50">
      <Flex justify="space-between" align="center">
        <SimpleGrid columns={1}>
          <Heading as="h1" size="lg" paddingY={2}>
            HESTER COX
          </Heading>
          <Heading as="h2" size="md" paddingY={1}>
            Handtassen en accessoires in leer
          </Heading>
        </SimpleGrid>
        <nav>
          <Link mx={2} href="#home">
            Home
          </Link>
          <Link mx={2} href="#home">
            Collection
          </Link>
          <Link mx={2} href="#about">
            About
          </Link>
          <Link mx={2} href="#contact">
            Contact
          </Link>
          <LanguageSelect />
        </nav>
      </Flex>
    </Box>
  );
}

export default Header;
