import { Heading, Text, Divider, Image } from "@chakra-ui/react";
import Page from "../components/Page";
import { Trans, useTranslation } from "react-i18next";

function Collection() {
  const { t } = useTranslation();
  return (
    <Page titleId="collection" titleKey="collection.title">
      <Text>{t("collection.introduction")}</Text>

      <Divider />
      <Heading id="aimant" as="h4" size={"lg"}>
        Aimant
      </Heading>
      <Text>
        <Image
          maxW={["10em", "15em", "30em"]}
          height="auto"
          borderRadius="0.5em"
          src="assets/aimant1.jpg"
          alt="Hester Cox Atelier"
          float="left"
          marginRight="1em"
        />
        <Trans i18nKey="home.introduction" />
      </Text>

      <Divider />
      <Heading id="aimant" as="h4" size={"lg"}>
        Aimant
      </Heading>
      <Text>
        <Image
          maxW={["10em", "15em", "30em"]}
          height="auto"
          borderRadius="0.5em"
          src="assets/aimant1.jpg"
          alt="Hester Cox Atelier"
          float="left"
          marginRight="1em"
        />
        <Trans i18nKey="home.introduction" />
      </Text>
    </Page>
  );
}

export default Collection;
