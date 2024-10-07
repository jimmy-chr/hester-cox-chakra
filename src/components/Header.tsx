import { Box, Flex, Heading, Link, Spacer, Stack } from "@chakra-ui/react";
import { LanguageSelect } from "./LanguageSelect";
import { useTranslation } from "react-i18next";
import { Link as ReactRouterLink } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
  const { t } = useTranslation();
  return (
    <Box bg="green.800" p={"1em"} color="orange.50">
      <Flex justify="space-between" align="flex-start">
        <Stack direction={"column"}>
          <Link
            mx={"1em"}
            as={ReactRouterLink}
            to="/"
            style={{ textDecoration: "none" }}
          >
            <Heading as="h1" size="lg" paddingY={"0.5em"}>
              {t("header.title")}
            </Heading>
            <Heading as="h2" size="md" paddingY={"0.25em"}>
              {t("header.subtitle")}
            </Heading>
          </Link>
        </Stack>
        <Flex flexDirection="column" align="flex-end">
          <LanguageSelect />
          <Spacer />
          <Navigation />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
