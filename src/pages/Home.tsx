import { Box, Heading, Text, Image, Stack, Center } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <Box flex="1" p={4} bg="orange.50" color="orange.900">
      <Center>
        <Stack spacing={4} maxWidth="60em">
          <Box>
            <Heading id="home">{t("home.title")}</Heading>
          </Box>
          <Stack direction="row" gap="1em">
            <Box>
              <Image
                minW={["10em", "15em", "25em"]}
                height="auto"
                borderRadius="0.5em"
                src="assets/atelier.jpg"
                alt="Hester Cox Atelier"
              />
            </Box>
            <Text>{t("home.introduction")}</Text>
          </Stack>
        </Stack>
      </Center>
    </Box>
  );
}

export default Home;
