import React from "react";
import { useTranslation } from "react-i18next";
import CardIcon from "@/static/icons/icon_card.svg";
import LanguageIcon from "@/static/icons/icon_language.svg";
import VehicleIcon from "@/static/icons/icon_vehicle.svg";

type FeatureItem = {
  key: number;
  icon: JSX.Element;
  title: string;
  path: string;
};
export const featureItems: () => (FeatureItem | "divider")[] = () => {
  const { t } = useTranslation();

  return [
    {
      key: 0,
      icon: <VehicleIcon />,
      title: t("account_vehicle"),
      path: "/account/vehicle",
    },
    {
      key: 1,
      icon: <CardIcon />,
      title: t("account_payment"),
      path: "/account/payment",
    },
    "divider",
    {
      key: 1,
      icon: <LanguageIcon />,
      title: t("account_language"),
      path: "/account/language",
    },
  ];
};
