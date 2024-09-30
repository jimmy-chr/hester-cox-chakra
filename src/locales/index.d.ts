import { useTranslation } from "react-i18next";
// Define the structure of your translations
declare module "react-i18next" {
  interface Resources {
    translation: typeof import("./en/translation.json");
  }
}
