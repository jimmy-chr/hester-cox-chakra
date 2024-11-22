import {
  Heading,
  Text,
  Divider,
  Box,
  Button,
  Flex,
  VStack,
  Center,
} from "@chakra-ui/react";
import Page from "../components/Page";
import { Trans, useTranslation } from "react-i18next";
import collection from "../config/collection.json";
import Carousel from "../components/Carousel";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BreadcrumbProps } from "../components/Breadcrumb";

function Collection() {
  const { t } = useTranslation();
  let navigate = useNavigate();

  const goToDetails = (id: string) => {
    navigate(`/collection/${id}`);
  };

  const items = collection.map((item) => {
    const slides = item.pictures.map((picture) => ({
      img: picture.file,
      alt: `${item.name} ${t("collection.picture")}`,
    }));
    return (
      <React.Fragment key={item.id}>
        <Divider />
        <Heading id={item.id} as="h4" size={"lg"}>
          {item.name}
        </Heading>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={4} // Adds spacing between the carousel and text content
        >
          <Box width={"full"}>
            <Center>
              <Carousel slides={slides} maxW={["30em"]} />
            </Center>
          </Box>
          <VStack width={"full"} alignItems={"flex-start"}>
            <Text>
              <Trans i18nKey={`collection.${item.id}.description`} />
            </Text>
            <Box width={"full"}>
              <Center>
                <Button
                  colorScheme="green"
                  bgColor={"green.700"}
                  textColor={"orange.50"}
                  width={{ base: "full", md: "20em" }}
                  onClick={() => goToDetails(item.id)}
                >
                  {t("collection.more-details")}
                </Button>
              </Center>
            </Box>
          </VStack>
        </Flex>
      </React.Fragment>
    );
  });

  const breadcrumb: BreadcrumbProps = {
    titleId: "collection",
    titleKey: "collection.title",
  };

  return (
    <Page breadcrumb={breadcrumb}>
      <Text>{t("collection.introduction")}</Text>
      {items}
    </Page>
  );
}

export default Collection;
