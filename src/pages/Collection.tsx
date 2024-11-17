import {
  Heading,
  Text,
  Divider,
  Box,
  Button,
  Flex,
  VStack,
} from "@chakra-ui/react";
import Page from "../components/Page";
import { Trans, useTranslation } from "react-i18next";
import collection from "../config/collection.json";
import Carousel from "../components/Carousel";
import React from "react";
import { useNavigate } from "react-router-dom";

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
        <Flex direction={{ base: "column", sm: "row" }}>
          <Box width={"full"}>
            <Carousel
              slides={slides}
              maxW={["10em", "15em", "30em"]}
              float="left"
              marginRight="1em"
            />
          </Box>
          <VStack width={"full"}>
            <Text>
              <Trans i18nKey={`collection.${item.id}.description`} />
            </Text>
            <Button
              colorScheme="teal"
              w="full"
              onClick={() => goToDetails(item.id)}
            >
              {t("collection.more-details")}
            </Button>
          </VStack>
        </Flex>
      </React.Fragment>
    );
  });

  return (
    <Page titleId="collection" titleKey="collection.title">
      <Text>{t("collection.introduction")}</Text>
      {items}
    </Page>
  );
}

export default Collection;
