import Page from "../../components/Page";
import { useParams } from "react-router-dom";
import ProductDetails from "../../components/ProductDetails";
import { useTranslation } from "react-i18next";
import { BreadcrumbProps } from "../../components/Breadcrumb";
import useCollection from "../../hooks/useCollection";

function CollectionDetails() {
  const { t } = useTranslation();
  const { id } = useParams();
  const collection = useCollection();
  const collectionItem = collection.find((item) => item.id === id);

  if (!collectionItem) return;

  const pictures = collectionItem.pictures.map((picture) => ({
    img: picture.file,
    alt: `${collectionItem.title} ${t("collection.picture")}`,
  }));

  const breadcrumb: BreadcrumbProps = {
    titleId: "collection",
    titleKey: "collection.title",
    subTitleId: "collection-item",
    subTitleKey: collectionItem.title,
    titleLink: "/collection",
  };

  return (
    <Page breadcrumb={breadcrumb}>
      <ProductDetails
        name={collectionItem.title}
        description={collectionItem.description}
        detailDescription={collectionItem.detailDescription}
        pictures={pictures}
        dimensions={collectionItem.dimensions}
        price={collectionItem.price}
      />
    </Page>
  );
}

export default CollectionDetails;
