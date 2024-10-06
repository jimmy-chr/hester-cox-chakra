import { ChangeEvent } from "react";
import { Select } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";

export const LanguageSelect = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
    try {
      i18n.changeLanguage(language);
      localStorage.setItem("i18nextLng", language); // Save language to localStorage
    } catch (error) {
      console.error("Error saving language to localStorage", error);
    }
  };

  return (
    <Select
      width={"4em"}
      defaultValue={i18n.resolvedLanguage}
      onChange={changeLanguage}
      variant={"flushed"}
      border={0}
      sx={{
        "> option": {
          background: "orange.50",
          color: "orange.900",
        },
      }}
      textAlign={"center"}
      icon={<MdLanguage />}
    >
      {["en", "nl"].map((cur) => (
        <option key={cur} value={cur}>
          {cur.toUpperCase()}
        </option>
      ))}
    </Select>
  );
};
