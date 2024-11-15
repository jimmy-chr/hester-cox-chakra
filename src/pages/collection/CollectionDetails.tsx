import Page from "../../components/Page";
import { useParams } from "react-router-dom";
import collection from "../../config/collection.json";
import ProductDetails from "../../components/ProductDetails";
import { useTranslation } from "react-i18next";

function CollectionDetails() {
  const { t } = useTranslation();
  const { id } = useParams();
  const collectionItem = collection.find((item) => item.id === id);

  if (!collectionItem) return;

  const pictures = collectionItem.pictures.map((picture) => ({
    img: picture.file,
    alt: `${collectionItem.name} ${t("collection.picture")}`,
  }));

  return (
    <Page titleId="collection" titleKey="collection.title">
      <ProductDetails
        name={collectionItem.name}
        description={t(`collection.${collectionItem.id}.description`)}
        pictures={pictures}
      />
    </Page>
  );
}

export default CollectionDetails;
