import { Box, Flex, Image, Text, Button, VStack } from "@chakra-ui/react";

type ProductDetailsProps = {
  name: string;
  description: string;
  pictures: { img: string; alt: string }[];
};

function ProductDetails({ name, description, pictures }: ProductDetailsProps) {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      p={8}
      maxWidth="1200px"
      mx="auto"
    >
      {/* Left Side: Product Images */}
      <Box flex="1" p={4}>
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
      <VStack flex="1" p={4} align="start" spacing={6}>
        {/* Product Name */}
        <Text fontSize="2xl" fontWeight="bold">
          {name}
        </Text>

        {/* Product Description */}
        <Text color="gray.500">{description}</Text>

        {/* Add to Cart Button */}
        <Button colorScheme="teal" size="lg" w="full">
          Add to Cart
        </Button>
      </VStack>
    </Flex>
  );
}

export default ProductDetails;
