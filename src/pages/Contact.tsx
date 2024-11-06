import { Text } from "@chakra-ui/react";
import Page from "../components/Page";
import ContactForm from "../components/ContactForm";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <Page titleId="contact" titleKey="contact.title">
      <Text>{t("contact.introduction")}</Text>
      <ContactForm />
    </Page>
  );
}

export default Contact;
