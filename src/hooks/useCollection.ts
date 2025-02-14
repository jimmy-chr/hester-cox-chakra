import { useState, useEffect } from "react";
import collection from "../config/collection.json";
import { useTranslation } from "react-i18next";

type CollectionItem = {
  id: string;
  title: string;
  description: string;
  detailDescription: string;
  pictures: { file: string }[];
  dimensions?: { width: string; height: string; depth: string };
  price?: string;
  show: boolean;
};

const useCollection = () => {
  const [items, setItems] = useState<CollectionItem[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const collectionItems = collection.map((item) => ({
      ...item,
      title: t(`collection.${item.id}.title`),
      description: t(`collection.${item.id}.description`),
      detailDescription: t(`collection.${item.id}.detail-description`),
    }));
    setItems(collectionItems);
  }, [t]);

  return items;
};

export default useCollection;
