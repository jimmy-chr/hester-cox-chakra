import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Heading, Link, Text } from "@chakra-ui/react";

export interface BreadcrumbProps {
  titleId: string;
  titleKey: string;
  subTitleId?: string;
  subTitleKey?: string;
  titleLink?: string;
}
const Breadcrumb: React.FC<BreadcrumbProps> = ({
  titleId,
  titleKey,
  subTitleId,
  subTitleKey,
  titleLink,
}: BreadcrumbProps) => {
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems={{ base: "flex-start", md: "center" }}
      gap="1em"
    >
      {subTitleKey ? (
        <Box display="flex" flexDirection="row" gap="1em">
          <Link
            href={titleLink}
            id={titleId}
            textDecoration="none"
            color={"green.700"}
            colorScheme="green"
          >
            <Heading as="h3" size="lg">
              {t(titleKey)}
            </Heading>
          </Link>
          <Text fontSize="2xl" color={"green.700"}>
            {"/"}
          </Text>
        </Box>
      ) : (
        <Heading as="h3" size={"lg"}>
          {t(titleKey)}
        </Heading>
      )}

      {subTitleKey && (
        <Heading id={subTitleId} as="h4" size="lg">
          {t(subTitleKey)}
        </Heading>
      )}
    </Box>
  );
};

export default Breadcrumb;
