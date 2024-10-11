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
            <Text>
              <Image
                maxW={["10em", "15em", "30em"]}
                height="auto"
                borderRadius="0.5em"
                src="assets/atelier.jpg"
                alt="Hester Cox Atelier"
                float={"left"}
                marginRight={"1em"}
              />
              {t("home.introduction")}
            </Text>
          </Stack>
        </Center>
      </Box>
      <Footer />
    </>
  );
}

export default Home;
