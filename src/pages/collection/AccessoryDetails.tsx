import Page from "../../components/Page";
import { useParams } from "react-router-dom";
import ProductDetails from "../../components/ProductDetails";
import { useTranslation } from "react-i18next";
import { BreadcrumbProps } from "../../components/Breadcrumb";
import useAccessories from "../../hooks/useAccessories";

function AccessoryDetails() {
  const { t } = useTranslation();
  const { id } = useParams();
  const accessories = useAccessories();
  const accessoryItem = accessories.find((item) => item.id === id);

  if (!accessoryItem) return;

  const pictures = accessoryItem.pictures.map((picture) => ({
    img: picture.file,
    alt: `${accessoryItem.title} ${t("collection.picture")}`,
  }));

  const breadcrumb: BreadcrumbProps = {
    titleId: "accessories",
    titleKey: "accessories.title",
    subTitleId: "accessories-item",
    subTitleKey: accessoryItem.title,
    titleLink: "/accessories",
  };

  return (
    <Page breadcrumb={breadcrumb}>
      <ProductDetails
        name={accessoryItem.title}
        description={accessoryItem.description}
        detailDescription={accessoryItem.detailDescription}
        pictures={pictures}
        price={accessoryItem.price}
      />
    </Page>
  );
}

export default AccessoryDetails;
