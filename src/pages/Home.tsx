import { Text, Image } from "@chakra-ui/react";
import { Trans } from "react-i18next";
import Page from "../components/Page";
import { BreadcrumbProps } from "../components/Breadcrumb";

function Home() {
  const breadcrumb: BreadcrumbProps = {
    titleId: "home",
    titleKey: "home.title",
  };

  return (
    <Page breadcrumb={breadcrumb}>
      <Text>
        <Image
          maxW={["10em", "15em", "30em"]}
          height="auto"
          borderRadius="0.5em"
          src="assets/atelier.jpg"
          alt="Hester Cox Atelier"
          float="left"
          marginRight="1em"
          marginBottom="1em"
        />
        <Trans i18nKey="home.introduction" />
      </Text>
    </Page>
  );
}

export default Home;
