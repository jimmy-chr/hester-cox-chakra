import {
  Text,
  Image,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Page from "../components/Page";
import { Trans, useTranslation } from "react-i18next";
import { BreadcrumbProps } from "../components/Breadcrumb";

function CareMaintenance() {
  const breadcrumb: BreadcrumbProps = {
    titleId: "care-maintenance",
    titleKey: "care-maintenance.title",
  };
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
        <Heading as="h4" size="md">
          {t("care-maintenance.veg-tan-title")}
        </Heading>
        <Trans i18nKey="care-maintenance.veg-tan-description" />
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
        <Heading as="h4" size="md">
          {t("care-maintenance.care-maintenance-title")}
        </Heading>
        <UnorderedList>
          <ListItem>{t("care-maintenance.care-maintenance-item1")}</ListItem>
          <ListItem>{t("care-maintenance.care-maintenance-item2")}</ListItem>
          <ListItem>{t("care-maintenance.care-maintenance-item3")}</ListItem>
          <ListItem>{t("care-maintenance.care-maintenance-item4")}</ListItem>
          <ListItem>{t("care-maintenance.care-maintenance-item5")}</ListItem>
          <ListItem>{t("care-maintenance.care-maintenance-item6")}</ListItem>
          <ListItem>{t("care-maintenance.care-maintenance-item7")}</ListItem>
        </UnorderedList>
      </Text>
    </Page>
  );
}

export default CareMaintenance;
