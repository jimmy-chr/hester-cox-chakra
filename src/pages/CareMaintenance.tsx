import { Text, Image } from "@chakra-ui/react";
import Page from "../components/Page";
import { Trans } from "react-i18next";
import { BreadcrumbProps } from "../components/Breadcrumb";

function CareMaintenance() {
  const breadcrumb: BreadcrumbProps = {
    titleId: "care-maintenance",
    titleKey: "care-maintenance.title",
  };

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
        <Trans i18nKey="care-maintenance.introduction1" />
      </Text>
      <Text>
        <Image
          maxW={["10em", "15em", "20em"]}
          height="auto"
          borderRadius="0.5em"
          src="assets/verhaal-hester2.jpg"
          alt="Hester Cox"
          float="right"
          marginRight="1em"
        />
        <Trans i18nKey="care-maintenance.introduction2" />
      </Text>
    </Page>
  );
}

export default CareMaintenance;
