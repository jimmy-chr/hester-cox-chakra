import { Box, Heading, Text, Image, Stack, Center } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Box flex="1" p={["1em", "2em"]} bg="orange.50" color="orange.900">
        <Center>
          <Stack spacing={"1em"} maxWidth="60em">
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
      <Footer />
    </>
  );
}

export default Home;
