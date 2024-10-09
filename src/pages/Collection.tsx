import { Box, Heading, Stack, Center } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Collection() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Box flex="1" p={["1em", "2em"]} bg="orange.50" color="orange.900">
        <Center>
          <Stack spacing={"1em"} maxWidth="60em">
            <Box>
              <Heading id="collection">{t("collection.title")}</Heading>
            </Box>
          </Stack>
        </Center>
      </Box>
      <Footer />
    </>
  );
}

export default Collection;
