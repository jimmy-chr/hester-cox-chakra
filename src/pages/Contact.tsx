import { Text } from "@chakra-ui/react";
import Page from "../components/Page";
import ContactForm from "../components/ContactForm";
import { useTranslation } from "react-i18next";
import { BreadcrumbProps } from "../components/Breadcrumb";

function Contact() {
  const { t } = useTranslation();
  const breadcrumb: BreadcrumbProps = {
    titleId: "contact",
    titleKey: "contact.title",
  };

  return (
    <Page breadcrumb={breadcrumb}>
      <Text>{t("contact.introduction")}</Text>
      <ContactForm origin="contact pagina" />
    </Page>
  );
}

export default Contact;
