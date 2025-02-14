import { Text, Image } from "@chakra-ui/react";
import Page from "../components/Page";
import { Trans, useTranslation } from "react-i18next";
import { BreadcrumbProps } from "../components/Breadcrumb";

function AboutMe() {
  const breadcrumb: BreadcrumbProps = {
    titleId: "about-me",
    titleKey: "about-me.title",
  };
  // Need this for language to change in Trans component
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation();

  return (
    <Page breadcrumb={breadcrumb}>
      <Text>
        <Image
          maxW={["10em", "15em", "20em"]}
          height="auto"
          borderRadius="0.5em"
          src="assets/verhaal-hester1.jpg"
          alt="Hester Cox"
          float="left"
          marginRight="1em"
        />
        <Trans i18nKey="about-me.introduction1" />
      </Text>
      <Text>
        <Image
          maxW={["10em", "15em", "20em"]}
          height="auto"
          borderRadius="0.5em"
          src="assets/verhaal-hester2.jpg"
          alt="Hester Cox"
          float="right"
          marginLeft="1em"
        />
        <Trans i18nKey="about-me.introduction2" />
      </Text>
    </Page>
  );
}

export default AboutMe;
