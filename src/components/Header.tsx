import { Box, Flex, Heading, Link, Stack } from "@chakra-ui/react";
import { LanguageSelect } from "./LanguageSelect";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  return (
    <Box bg="green.800" p={4} color="orange.50">
      <Flex justify="space-between" align="center">
        <Stack direction={"column"}>
          <Heading as="h1" size="lg" paddingY={2}>
            {t("header.title")}
          </Heading>
          <Heading as="h2" size="md" paddingY={1}>
            {t("header.subtitle")}
          </Heading>
        </Stack>
        <Stack direction={"row"} alignItems={"center"}>
          <nav>
            <Link mx={3} href="#home">
              {t("menu.collection")}
            </Link>
            <Link mx={3} href="#home">
              {t("menu.accessories")}
            </Link>
            <Link mx={3} href="#about">
              {t("menu.about-me")}
            </Link>
            <Link mx={3} href="#contact">
              {t("menu.contact")}
            </Link>
          </nav>
          <LanguageSelect />
        </Stack>
      </Flex>
    </Box>
  );
}

export default Header;
