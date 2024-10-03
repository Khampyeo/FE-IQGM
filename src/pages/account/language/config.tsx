import { useTranslation } from "react-i18next";

export const languagesItems = () => {
  const { t } = useTranslation();

  const languages = [
    {
      key: 0,
      name: t("language.en"),
      value: "en",
    },
    {
      key: 1,
      name: t("language.vn"),
      value: "vn",
    },
  ];

  return languages;
};
