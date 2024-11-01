import {
  Text,
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Page from "../components/Page";
import { useTranslation } from "react-i18next";
import accessories from "../config/accessories.json";

function Accessories() {
  const { t } = useTranslation();
  const items = accessories.map((item) => {
    return (
      <GridItem w="100%">
        <Card maxW="sm">
          <CardBody color="orange.900" bgColor={"#FFFFFA"}>
            <Image
              src={item.pictures[0].file}
              alt={`${t(`accessories.${item.id}.title`)} ${t(
                "collection.picture"
              )}`}
              borderRadius="lg"
            />
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
