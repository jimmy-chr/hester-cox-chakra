import { Box, Stack, Center } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb, { BreadcrumbProps } from "./Breadcrumb";

interface PageProps {
  children: React.ReactNode;
  breadcrumb: BreadcrumbProps;
}

const Page: React.FC<PageProps> = ({ children, breadcrumb }: PageProps) => {
  const { titleId, titleKey, subTitleId, subTitleKey, titleLink } = breadcrumb;
  return (
    <>
      <Header />
      <Box flex="1" p={["1em", "2em"]} bg="orange.50" color="orange.900">
        <Center>
          <Stack spacing={"1em"} maxWidth="60em" width="60em">
            <Breadcrumb
              titleId={titleId}
              titleKey={titleKey}
              subTitleId={subTitleId}
              subTitleKey={subTitleKey}
              titleLink={titleLink}
            />
            {children}
          </Stack>
        </Center>
      </Box>
      <Footer />
    </>
  );
};

export default Page;
