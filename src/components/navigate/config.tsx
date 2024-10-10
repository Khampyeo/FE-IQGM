import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import AccountFilledIcon from "@/static/icons/icon_account__fill.svg";
import AccountIcon from "@/static/icons/icon_account.svg";
import BookingFilledIcon from "@/static/icons/icon_check__square__fill.svg";
import BookingIcon from "@/static/icons/icon_check__square.svg";
import HomeFilledIcon from "@/static/icons/icon_home__fill.svg";
import HomeIcon from "@/static/icons/icon_home.svg";
import PromotionFilledIcon from "@/static/icons/icon_promotion__fill.svg";
import PromotionIcon from "@/static/icons/icon_promotion.svg";
import WalletFilledIcon from "@/static/icons/icon_wallet__fill.svg";
import WalletIcon from "@/static/icons/icon_wallet.svg";

type navigateItem = {
  key: number;
  logo: ReactNode;
  logoSelected: ReactNode;
  label: string;
  path: string;
};
export const navigateItems: () => navigateItem[] = () => {
  const { t } = useTranslation();
  return [
    {
      key: 0,
      logo: <HomeIcon />,
      logoSelected: <HomeFilledIcon />,
      label: t("navigate.home"),
      path: "/",
    },
    {
      key: 1,
      logo: <PromotionIcon />,
      logoSelected: <PromotionFilledIcon />,
      label: t("navigate.promotion"),
      path: "/promotion",
    },
    {
      key: 2,
      logo: <BookingIcon />,
      logoSelected: <BookingFilledIcon />,
      label: t("navigate.my_booking"),
      path: "/my-booking",
    },
    {
      key: 3,
      logo: <WalletIcon />,
      logoSelected: <WalletFilledIcon />,
      label: t("navigate.wallet"),
      path: "/wallet",
    },
    {
      key: 4,
      logo: <AccountIcon />,
      logoSelected: <AccountFilledIcon />,
      label: t("navigate.account"),
      path: "/account",
    },
  ];
};
