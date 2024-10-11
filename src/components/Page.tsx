import { Box, Heading, Stack, Center } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface PageProps {
  children: React.ReactNode;
  titleId: string;
  titleKey: string;
}
const Page: React.FC<PageProps> = ({
  children,
  titleId,
  titleKey,
}: PageProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Box flex="1" p={["1em", "2em"]} bg="orange.50" color="orange.900">
        <Center>
          <Stack spacing={"1em"} maxWidth="60em" width="60em">
            <Box>
              <Heading id={titleId} as="h3">
                {t(titleKey)}
              </Heading>
            </Box>
            {children}
          </Stack>
        </Center>
      </Box>
      <Footer />
    </>
  );
};

export default Page;
