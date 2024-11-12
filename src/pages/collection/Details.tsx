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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import Page from "../../components/Page";
import { useParams } from "react-router-dom";

// ProductDetail component
function Details() {
  const { id } = useParams();
  // Placeholder product data
  const product = {
    name: "Premium Yoga Mat",
    price: 59.99,
    description:
      "Eco-friendly, durable, and comfortable yoga mat for all types of workouts.",
    colors: ["Blue", "Green", "Purple"],
    sizes: ["Small", "Medium", "Large"],
    image: "https://via.placeholder.com/400x400", // Placeholder image, replace with product image URL
  };

  return (
    <Page titleId="home" titleKey="home.title">
      <Flex
        direction={{ base: "column", md: "row" }}
        p={8}
        maxWidth="1200px"
        mx="auto"
      >
        {/* Left Side: Product Image */}
        <Box flex="1" p={4}>
          <Image src={product.image} alt={product.name} borderRadius="md" />
        </Box>

        {/* Right Side: Product Details */}
        <VStack flex="1" p={4} align="start" spacing={6}>
          {/* Product Name and Price */}
          <Text fontSize="2xl" fontWeight="bold">
            {product.name}
          </Text>
          <Text fontSize="xl" color="gray.600">
            ${product.price.toFixed(2)}
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

          {/* Quantity Selector */}
          <HStack spacing={4} align="center">
            <Text>Quantity:</Text>
            <NumberInput defaultValue={1} min={1} max={10} w="100px">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
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
