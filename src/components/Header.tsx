import { Center, Flex, Text } from "@chakra-ui/react";

function Header() {
  return (
    <>
      <Flex color="white">
        <Center w="100%" h="5em" bg="green.700">
          <Text>Hester Cox</Text>
        </Center>
      </Flex>
    </>
  );
}

export default Header;
