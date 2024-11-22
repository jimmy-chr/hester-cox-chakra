import { Box, Flex, Heading, Link, Center } from "@chakra-ui/react";
import { LanguageSelect } from "./LanguageSelect";
import { useTranslation } from "react-i18next";
import { Link as ReactRouterLink } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
  const { t } = useTranslation();
  return (
    <Box bg="green.800" p={["1em", "2em"]} color="orange.50">
      <Center>
        <Flex
          justify="space-between"
          align="flex-start"
          width={"80em"}
          maxWidth={"80em"}
        >
          {/* Title and Subtitle */}
          <Link as={ReactRouterLink} to="/" style={{ textDecoration: "none" }}>
            <Flex
              flexDirection={"column"}
              justifyContent="space-between"
              height={"5em"} // Set a fixed height for proper alignment
            >
              <Heading as="h1" size="lg" paddingBottom={"0.5em"}>
                {t("header.title")}
              </Heading>
              <Heading as="h2" size="md">
                {t("header.subtitle")}
              </Heading>
            </Flex>
          </Link>
          {/* Language Select and Navigation */}
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            align="flex-end"
            height={"5em"} // Set a fixed height for proper alignment
          >
            <LanguageSelect />
            <Navigation />
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
}

export default Header;
