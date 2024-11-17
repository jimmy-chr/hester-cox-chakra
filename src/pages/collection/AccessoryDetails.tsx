import Page from "../../components/Page";
import { useParams } from "react-router-dom";
import accessories from "../../config/accessories.json";
import ProductDetails from "../../components/ProductDetails";
import { useTranslation } from "react-i18next";

function AccessoryDetails() {
  const { t } = useTranslation();
  const { id } = useParams();
  const accessoryItem = accessories.find((item) => item.id === id);

  if (!accessoryItem) return;

  const pictures = accessoryItem.pictures.map((picture) => ({
    img: picture.file,
    alt: `${t(`accessories.${accessoryItem.id}.title`)} ${t(
      "collection.picture"
    )}`,
  }));

  return (
    <Page titleId="accessories" titleKey="accessories.title">
      <ProductDetails
        name={t(`accessories.${accessoryItem.id}.title`)}
        description={t(`accessories.${accessoryItem.id}.description`)}
        detailDescription={t(
          `accessories.${accessoryItem.id}.detail-description`
        )}
        pictures={pictures}
      />
    </Page>
  );
}

export default AccessoryDetails;
