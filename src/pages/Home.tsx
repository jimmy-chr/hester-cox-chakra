import { Box, Heading, Text, Image, Stack, Center } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <Box flex="1" p={4} bg="orange.50" color="orange.900">
      <Center>
        <Stack spacing={4} maxWidth="60em">
          <Box>
            <Heading id="home">Welkom</Heading>
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
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              risus ultricies tristique nulla aliquet enim tortor at. Sagittis
              id consectetur purus ut faucibus pulvinar elementum. Accumsan
              tortor posuere ac ut consequat semper viverra nam libero. Lacus
              viverra vitae congue eu. Sagittis id consectetur purus ut faucibus
              pulvinar elementum integer enim. Aliquam sem fringilla ut morbi
              tincidunt augue interdum velit. Tellus molestie nunc non blandit
              massa. Vulputate mi sit amet mauris commodo quis imperdiet massa
              tincidunt. Tortor posuere ac ut consequat semper viverra nam.
              Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi
              tincidunt. Eget nulla facilisi etiam dignissim. Aliquet risus
              feugiat in ante metus. Hendrerit dolor magna eget est. Nibh cras
              pulvinar mattis nunc se blandit. Senectus et netus et malesuada
              fames ac turpis. Quis ipsum suspendisse ultrices gravida.
            </Text>
          </Stack>
          <h1>{t("welcome")}</h1>
          <p>{t("description")}</p>
        </Stack>
      </Center>
    </Box>
  );
}

export default Home;
