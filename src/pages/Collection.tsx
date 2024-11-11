import { Heading, Text, Divider, Box } from "@chakra-ui/react";
import Page from "../components/Page";
import { Trans, useTranslation } from "react-i18next";
import collection from "../config/collection.json";
import Carousel from "../components/Carousel";
import React from "react";

function Collection() {
  const { t } = useTranslation();

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
        <Box>
          <Carousel
            slides={slides}
            maxW={["10em", "15em", "30em"]}
            float="left"
            marginRight="1em"
          />
          <Text>
            <Trans i18nKey={`collection.${item.id}.description`} />
          </Text>
        </Box>
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
