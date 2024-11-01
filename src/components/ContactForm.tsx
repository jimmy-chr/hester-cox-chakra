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
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwZuW27ED7ddw8iVB9ZGKYlrr40wAaapVfSBkpjkflJHYmID69MAvG8GKqvaIJf1Fc/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      console.log(response);

      const result = await response.json();

      if (result.status === "success") {
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
      } else {
        // Show error message if there's an issue
        throw new Error(result.message);
      }
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
      maxW="xl"
      p="6"
      boxShadow="lg"
      borderRadius="md"
      borderWidth="1px"
      bgColor="#FFFFFA"
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
