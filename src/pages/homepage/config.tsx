import { useTranslation } from "react-i18next";
import ads1Image from "@/static/images/ads-1.jpg";
import ads2Image from "@/static/images/ads-2.jpg";
import ads3Image from "@/static/images/ads-3.jpg";
import ads4Image from "@/static/images/ads-4.jpg";
import chatbotImage from "@/static/images/chatbot.jpg";
import hiringImage from "@/static/images/hiring.jpg";
import mapImage from "@/static/images/map.jpg";
import QRImage from "@/static/images/QR.jpg";

export const featureItems = () => {
  const { t } = useTranslation();

  return [
    {
      key: 0,
      img: mapImage,
      text: t("home.feature.map"),
      path: "/home/map",
    },
    {
      key: 1,
      img: QRImage,
      text: t("home.feature.qr"),
      path: "/qrcode",
    },
    {
      key: 2,
      img: chatbotImage,
      text: t("home.feature.assistant"),
      path: "/chatbot",
    },
    {
      key: 3,
      img: hiringImage,
      text: t("home.feature.hiring"),
      path: "/hirring",
    },
  ];
};

export const ads = [
  {
    key: 0,
    img: ads1Image,
  },
  {
    key: 1,
    img: ads2Image,
  },
  {
    key: 2,
    img: ads3Image,
  },
  {
    key: 3,
    img: ads4Image,
  },
];
