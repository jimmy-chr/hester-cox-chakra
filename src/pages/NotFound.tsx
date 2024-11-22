import { Box, Button, Center, Flex, Icon, Link, Text } from "@chakra-ui/react";
import Page from "../components/Page";
import { BreadcrumbProps } from "../components/Breadcrumb";
import { useTranslation } from "react-i18next";
import { PiWarning } from "react-icons/pi";

function NotFound() {
  const { t } = useTranslation();
  const breadcrumb: BreadcrumbProps = {
    titleId: "not-found",
    titleKey: "not-found.title",
  };
  return (
    <Page breadcrumb={breadcrumb}>
      {/* Flex container for responsive layout */}
      <Flex
        direction={{ base: "column", md: "row" }} // Stacks on mobile and aligns horizontally on desktop
        align="center"
        gap={4} // Adds space between the icon and the text
      >
        {/* Icon on the left in desktop and on top in mobile */}
        <Icon as={PiWarning} boxSize={75} color={"red.600"} />

        {/* Text */}
        <Box>
          <Text fontSize="xl" mb={2}>
            {t("not-found.introduction")}
          </Text>
          <Text fontSize="md" mb={4}>
            {t("not-found.details")}
          </Text>
        </Box>
      </Flex>

      <Center>
        <Link href="/">
          <Button
            colorScheme="green"
            bgColor={"green.700"}
            textColor={"orange.50"}
          >
            {t("not-found.link-home")}
          </Button>
        </Link>
      </Center>
    </Page>
  );
}

export default NotFound;
