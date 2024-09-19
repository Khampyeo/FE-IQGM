import { useTranslation } from "react-i18next";

export const languagesItems = () => {
  const { t } = useTranslation();

  const languages = [
    {
      key: 0,
      name: "English(US)",
      value: "en",
    },
    {
      key: 1,
      name: t("language_vn"),
      value: "vn",
    },
  ];

  return languages;
};
