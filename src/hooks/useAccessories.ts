import { useState, useEffect } from "react";
import accessories from "../config/accessories.json";
import { useTranslation } from "react-i18next";

type AccessoryItem = {
  id: string;
  title: string;
  description: string;
  detailDescription: string;
  pictures: { file: string }[];
  price?: string;
  show: boolean;
};

const useAccessories = () => {
  const [items, setItems] = useState<AccessoryItem[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const accessoryItems = accessories.map((item) => ({
      ...item,
      title: t(`accessories.${item.id}.title`),
      description: t(`accessories.${item.id}.description`),
      detailDescription: t(`accessories.${item.id}.detail-description`),
    }));
    setItems(accessoryItems);
  }, [t]);

  return items;
};

export default useAccessories;
