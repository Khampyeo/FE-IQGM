import React from "react";
import { useTranslation } from "react-i18next";
import PersonIcon from "@/static/icons/icon_account.svg";
import CardIcon from "@/static/icons/icon_card.svg";
import HelpIcon from "@/static/icons/icon_document.svg";
import EyeOpenIcon from "@/static/icons/icon_eye__open.svg";
import AboutIcon from "@/static/icons/icon_info__square.svg";
import LanguageIcon from "@/static/icons/icon_language.svg";
import LockIcon from "@/static/icons/icon_lock.svg";
import SecurityIcon from "@/static/icons/icon_security.svg";
import VehicleIcon from "@/static/icons/icon_vehicle.svg";

type FeatureItem = {
  id: number;
  icon: JSX.Element;
  title: string;
  path: string;
};
export const featureItems: () => (FeatureItem | "divider")[] = () => {
  const { t } = useTranslation();

  return [
    {
      id: 0,
      icon: <VehicleIcon />,
      title: t("account.vehicle"),
      path: "/account/vehicle",
    },
    {
      id: 1,
      icon: <CardIcon />,
      title: t("account.payment"),
      path: "/account/payment",
    },
    "divider",
    {
      id: 2,
      icon: <PersonIcon />,
      title: t("account.personal"),
      path: "/account/personal",
    },
    {
      id: 3,
      icon: <LanguageIcon />,
      title: t("account.language"),
      path: "/account/language",
    },
    {
      id: 4,
      icon: <SecurityIcon />,
      title: t("account.security"),
      path: "/account/security  ",
    },
    {
      id: 5,
      icon: <EyeOpenIcon />,
      title: t("account.dark_mode"),
      path: "/account/dark-mode",
    },
    "divider",
    {
      id: 6,
      icon: <HelpIcon />,
      title: t("account.help_center"),
      path: "/account/help",
    },
    {
      id: 7,
      icon: <LockIcon />,
      title: t("account.privacy_policy"),
      path: "/account/privacy",
    },
    {
      id: 8,
      icon: <AboutIcon />,
      title: t("account.about_EVPoint"),
      path: "/account/about",
    },
  ];
};
