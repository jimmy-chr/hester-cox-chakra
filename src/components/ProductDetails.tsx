import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  VStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import ContactForm from "./ContactForm";

type ProductDetailsProps = {
  name: string;
  description: string;
  detailDescription: string;
  pictures: { img: string; alt: string }[];
};

function ProductDetails({
  name,
  description,
  detailDescription,
  pictures,
}: ProductDetailsProps) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleMoreInfoClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <Flex direction={{ base: "column", md: "row" }}>
      {/* Left Side: Product Images */}
      <Box flex="1">
        <VStack spacing={4}>
          {pictures.map((picture, index) => (
            <Image
              key={index}
              src={picture.img}
              alt={picture.alt}
              borderRadius="md"
            />
          ))}
        </VStack>
      </Box>

      {/* Right Side: Product Details */}
      <VStack
        flex="1"
        paddingLeft={["0em", "0em", "2em"]}
        position="sticky"
        top="1rem"
        alignSelf="start"
        zIndex={10}
        align="start"
      >
        {/* Product Name */}
        <Text fontSize="2xl" fontWeight="bold" paddingBottom={"1em"}>
          {name}
        </Text>

        {/* Product Description */}
        <Text paddingBottom={"1em"}>{description}</Text>

        {/* Product Detail Description */}
        <Text paddingBottom={"1em"}>{detailDescription}</Text>

        {/* More Information Button */}
        {!isFormVisible && (
          <Button colorScheme="teal" w="full" onClick={handleMoreInfoClick}>
            More Information
          </Button>
        )}

        {/* More Information Form */}
        {isFormVisible && (
          <>
            <ContactForm />
            <Box
              borderWidth="1px"
              borderRadius="md"
              padding="1em"
              marginTop="1em"
              w="full"
              boxShadow="md"
              bgColor="#FFFFFA"
            >
              <VStack spacing={4} align="start">
                <Text fontSize="lg" fontWeight="bold">
                  Request More Information
                </Text>
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
                <Textarea placeholder="Your Message" />
                <Button colorScheme="teal" w="full">
                  Submit
                </Button>
                <Button
                  colorScheme="teal"
                  w="full"
                  onClick={handleMoreInfoClick}
                >
                  Cancel
                </Button>
              </VStack>
            </Box>
          </>
        )}
      </VStack>
    </Flex>
  );
}

export default ProductDetails;
