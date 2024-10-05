import { Box, Text, Icon, Stack, Link, Center } from "@chakra-ui/react";
import { BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <Box bg="green.800" p={4}>
      <Stack
        direction="row"
        width={"100%"}
        justifyContent={"center"}
        spacing={10}
        alignItems={"center"}
      >
        <Text color="orange.50">© 2024 Hester Cox. All Rights Reserved.</Text>
        <Stack direction="row">
          <Link href="https://www.instagram.com/hesterbijdehand/">
            <Center>
              <Icon as={BsInstagram} color="orange.50" />
            </Center>
          </Link>
          <Link href="https://www.facebook.com/hesterbijdehand">
            <Center>
              <Icon as={BsFacebook} color="orange.50" />
            </Center>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
