import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const toast = useToast();

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check honeypot
    if (formData.website) {
      return; // Don't submit if honeypot is filled
    }

    try {
      await emailjs.send(
        "service_qc5a2df",
        "template_cwnd72w",
        formData,
        "D2Atu_ejPg-GJeRt-"
      );

      // Show success message
      toast({
        title: t("contact.form.success-title"),
        description: t("contact.form.success-description"),
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      // Clear form fields
      setFormData({ name: "", email: "", message: "", website: "" });
    } catch (error) {
      // Show error message
      toast({
        title: t("contact.form.error-title"),
        description: t("contact.form.error-description"),
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      maxW="xl"
      w="full"
      p="6"
      boxShadow="md"
      borderRadius="md"
      borderWidth="1px"
      bgColor="#FFFFFA"
    >
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb="4" isRequired>
          <FormLabel>{t("contact.form.name")}</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("contact.form.name-placeholder")}
          />
        </FormControl>

        <FormControl id="email" mb="4" isRequired>
          <FormLabel>{t("contact.form.email")}</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("contact.form.email-placeholder")}
          />
        </FormControl>

        <FormControl id="message" mb="4" isRequired>
          <FormLabel>{t("contact.form.message")}</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("contact.form.message-placeholder")}
          />
        </FormControl>

        <FormControl id="website" display="none">
          <Input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </FormControl>

        <Button type="submit" colorScheme="teal" width="full" mt="4">
          {t("contact.form.send")}
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
