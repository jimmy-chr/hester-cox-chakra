import { Heading, Text, Divider, Image } from "@chakra-ui/react";
import Page from "../components/Page";
import { Trans, useTranslation } from "react-i18next";
import collection from "../config/collection.json";

function Collection() {
  const { t } = useTranslation();

  const items = collection.map((item) => {
    return (
      <>
        <Divider />
        <Heading id={item.id} as="h4" size={"lg"}>
          {item.name}
        </Heading>
        <Text>
          <Image
            maxW={["10em", "15em", "30em"]}
            height="auto"
            borderRadius="0.5em"
            src={item.pictures[0].file}
            alt={`${item.name} ${t("collection.picture")}`}
            float="left"
            marginRight="1em"
          />
          <Trans i18nKey={`collection.${item.id}.description`} />
        </Text>
      </>
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
