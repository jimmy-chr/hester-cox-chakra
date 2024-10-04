import { Box, Text, Icon, Stack, Link } from "@chakra-ui/react";
import { BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <Box bg="green.800" p={4}>
      <Stack direction="row" width={"100%"} justifyContent={"center"}>
        <Text color="orange.50" textAlign="center">
          © 2024 Hester Cox. All Rights Reserved.
        </Text>
        <Box marginX={5}>
          <Link href="https://www.instagram.com/hesterbijdehand/">
            <Icon as={BsInstagram} color="orange.50" />
          </Link>
          <Link href="https://www.facebook.com/hesterbijdehand">
            <Icon as={BsFacebook} color="orange.50" />
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
