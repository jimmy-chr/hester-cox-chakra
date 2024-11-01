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
// import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
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
      /*
      // Send form data via EmailJS
      await emailjs.send(
        "your_serviceID", // replace with your EmailJS service ID
        "your_templateID", // replace with your EmailJS template ID
        formData,
        "your_userID" // replace with your EmailJS user ID
      );
      */

      // Show success message
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      // Clear form fields
      setFormData({ email: "", message: "", website: "" });
    } catch (error) {
      // Show error message
      toast({
        title: "Error",
        description:
          "There was an error sending your message. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt="10"
      p="6"
      boxShadow="lg"
      borderRadius="md"
      borderWidth="1px"
    >
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb="4" isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </FormControl>

        <FormControl id="message" mb="4" isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
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
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
