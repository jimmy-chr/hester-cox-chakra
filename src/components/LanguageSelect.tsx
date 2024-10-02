import { ChangeEvent } from "react";
import { Box, Select } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const LanguageSelect = () => {
  /*
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const colorModeBg = useColorModeValue("brand.100", "brand.700");

  const switchLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    router.replace(pathname, { locale: nextLocale });
  };

 // i18n.language
 */

  const { i18n } = useTranslation();

  console.log(i18n.options.resources);
  console.log(i18n.languages);

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
    try {
      i18n.changeLanguage(language);
      localStorage.setItem("i18nextLng", language); // Save language to localStorage
    } catch (error) {
      console.error("Error saving language to localStorage", error);
    }
  };
  /*
  <button onClick={() => changeLanguage("en")}>English</button>
  <button onClick={() => changeLanguage("nl")}>Nederlands</button>
*/
  return (
    <Box position="relative">
      <Select
        size="sm"
        defaultValue={i18n.resolvedLanguage}
        onChange={changeLanguage}
      >
        {["en", "nl"].map((cur) => (
          <option key={cur} value={cur}>
            {cur.toUpperCase()}
          </option>
        ))}
      </Select>
    </Box>
  );
};
