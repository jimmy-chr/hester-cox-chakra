import Page from "../../components/Page";
import { useParams } from "react-router-dom";
import collection from "../../config/collection.json";
import ProductDetails from "../../components/ProductDetails";
import { useTranslation } from "react-i18next";
import { BreadcrumbProps } from "../../components/Breadcrumb";

function CollectionDetails() {
  const { t } = useTranslation();
  const { id } = useParams();
  const collectionItem = collection.find((item) => item.id === id);

  if (!collectionItem) return;

  const pictures = collectionItem.pictures.map((picture) => ({
    img: picture.file,
    alt: `${collectionItem.name} ${t("collection.picture")}`,
  }));

  const breadcrumb: BreadcrumbProps = {
    titleId: "collection",
    titleKey: "collection.title",
    subTitleId: "collection-item",
    subTitleKey: collectionItem.name,
    titleLink: "/collection",
  };

  return (
    <Page breadcrumb={breadcrumb}>
      <ProductDetails
        name={collectionItem.name}
        description={t(`collection.${collectionItem.id}.description`)}
        detailDescription={t(
          `collection.${collectionItem.id}.detail-description`
        )}
        pictures={pictures}
      />
    </Page>
  );
}

export default CollectionDetails;
