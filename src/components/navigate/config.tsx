import React, { ReactNode } from "react";
import AccountFilledIcon from "@/static/icons/icon_account__fill.svg";
import AccountIcon from "@/static/icons/icon_account.svg";
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
export const navigateItems: navigateItem[] = [
  {
    key: 0,
    logo: <HomeIcon />,
    logoSelected: <HomeFilledIcon />,
    label: "Home",
    path: "/",
  },
  {
    key: 1,
    logo: <PromotionIcon />,
    logoSelected: <PromotionFilledIcon />,
    label: "Promotion",
    path: "/promotion",
  },
  {
    key: 2,
    logo: <WalletIcon />,
    logoSelected: <WalletFilledIcon />,
    label: "Wallet",
    path: "/wallet",
  },
  {
    key: 3,
    logo: <AccountIcon />,
    logoSelected: <AccountFilledIcon />,
    label: "Account",
    path: "/account",
  },
];
