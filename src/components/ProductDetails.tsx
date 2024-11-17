import { Box, Flex, Image, Text, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
            {t("product-details.info-request")}
          </Button>
        )}

        {/* More Information Form */}
        {isFormVisible && (
          <>
            <ContactForm
              onCancelClick={handleMoreInfoClick}
              origin={`${name} pagina`}
            />
          </>
        )}
      </VStack>
    </Flex>
  );
}

export default ProductDetails;
