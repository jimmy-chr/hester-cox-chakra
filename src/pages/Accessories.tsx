import {
  Text,
  Card,
  CardBody,
  Stack,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Page from "../components/Page";
import { useTranslation } from "react-i18next";
import accessories from "../config/accessories.json";
import Carousel from "../components/Carousel";

function Accessories() {
  const { t } = useTranslation();
  const items = accessories.map((item) => {
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
            </Stack>
          </CardBody>
        </Card>
      </GridItem>
    );
  });

  return (
    <Page titleId="accessories" titleKey="accessories.title">
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
