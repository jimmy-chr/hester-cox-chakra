import {
  Text,
  Card,
  CardBody,
  Stack,
  Heading,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import Page from "../components/Page";
import { useTranslation } from "react-i18next";
import accessories from "../config/accessories.json";
import Carousel from "../components/Carousel";
import { useNavigate } from "react-router-dom";
import { BreadcrumbProps } from "../components/Breadcrumb";

function Accessories() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const goToDetails = (id: string) => {
    navigate(`/accessories/${id}`);
  };

  const items = accessories.map((item) => {
    if (item.show) {
      const slides = item.pictures.map((picture) => ({
        img: picture.file,
        alt: `${t(`accessories.${item.id}.title`)} ${t("collection.picture")}`,
      }));
      return (
        <GridItem w="100%" key={item.id}>
          <Card maxW="sm">
            <CardBody color="orange.900" bgColor={"#FFFFFA"} borderRadius="md">
              <Carousel slides={slides} maxW={["100%"]} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{t(`accessories.${item.id}.title`)}</Heading>
                <Text>{t(`accessories.${item.id}.description`)}</Text>
                <Button
                  colorScheme="green"
                  bgColor={"green.700"}
                  textColor={"orange.50"}
                  w="full"
                  onClick={() => goToDetails(item.id)}
                >
                  {t("collection.more-details")}
                </Button>
              </Stack>
            </CardBody>
          </Card>
        </GridItem>
      );
    }
  });

  const breadcrumb: BreadcrumbProps = {
    titleId: "accessories",
    titleKey: "accessories.title",
  };

  return (
    <Page breadcrumb={breadcrumb}>
      <Text>{t("accessories.introduction")}</Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {items}
      </Grid>
    </Page>
  );
}

export default Accessories;
