// Import necessary Chakra UI components
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  VStack,
  HStack,
  Select,
} from "@chakra-ui/react";
import Page from "../../components/Page";
import { useParams } from "react-router-dom";

// ProductDetail component
function Details() {
  const { id } = useParams();
  // Placeholder product data
  const product = {
    name: "Product Name Placeholder",
    description:
      "This is a placeholder description for the product. Add details about the product's features, materials, and benefits here.",
    images: [
      "https://via.placeholder.com/400x400", // Placeholder for image 1
      "https://via.placeholder.com/400x400", // Placeholder for image 2
      "https://via.placeholder.com/400x400", // Placeholder for image 3
    ],
    colors: ["Color 1", "Color 2", "Color 3"],
    sizes: ["Size 1", "Size 2", "Size 3"],
  };
  return (
    <Page titleId="home" titleKey="home.title">
      <Flex
        direction={{ base: "column", md: "row" }}
        p={8}
        maxWidth="1200px"
        mx="auto"
      >
        {/* Left Side: Product Images */}
        <Box flex="1" p={4}>
          <VStack spacing={4}>
            {product.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Product image ${index + 1}`}
                borderRadius="md"
                boxShadow="md"
              />
            ))}
          </VStack>
        </Box>

        {/* Right Side: Product Details */}
        <VStack flex="1" p={4} align="start" spacing={6}>
          {/* Product Name */}
          <Text fontSize="2xl" fontWeight="bold">
            {product.name}
          </Text>

          {/* Product Description */}
          <Text color="gray.500">{product.description}</Text>

          {/* Size Selection */}
          <HStack spacing={4} align="center">
            <Text>Size:</Text>
            <Select placeholder="Select size" w="150px">
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>
          </HStack>

          {/* Color Selection */}
          <HStack spacing={4} align="center">
            <Text>Color:</Text>
            <Select placeholder="Select color" w="150px">
              {product.colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </Select>
          </HStack>

          {/* Add to Cart Button */}
          <Button colorScheme="teal" size="lg" w="full">
            Add to Cart
          </Button>
        </VStack>
      </Flex>
    </Page>
  );
}

export default Details;
