import ads1Image from "@/static/images/ads-1.jpg";
import ads2Image from "@/static/images/ads-2.jpg";
import ads3Image from "@/static/images/ads-3.jpg";
import ads4Image from "@/static/images/ads-4.jpg";
import promotion1Image from "@/static/images/promotion-1.jpg";
import promotion2Image from "@/static/images/promotion-2.jpg";
import promotion3Image from "@/static/images/promotion-3.jpg";
import promotion4Image from "@/static/images/promotion-4.jpg";
import redeem1Image from "@/static/images/redeem-1.jpg";
import redeem2Image from "@/static/images/redeem-2.jpg";
import redeem3Image from "@/static/images/redeem-3.jpg";

export const promotionData = [
  { id: 1, img: promotion1Image, title: "Buy 1 get 1 free", num: 1, expire: 6 },
  { id: 2, img: promotion2Image, title: "Buy 2 get 1 free", num: 1, expire: 2 },
  { id: 3, img: promotion3Image, title: "Discount 20k now", num: 1, expire: 3 },
  { id: 4, img: promotion4Image, title: "Flash sale 70%", num: 2, expire: 1 },
];

export const redeemData = [
  {
    id: 1,
    img: redeem1Image,
    title: "[ELSA SPEAK]  200k discount on 1 year elsa pro package",
    price: 99,
  },
  {
    id: 2,
    img: redeem2Image,
    title: "[PNJ] Get 1 more gold bar when buying at PNJ",
    price: 99,
  },
  {
    id: 3,
    img: redeem3Image,
    title: "[GOGI] Buffet only 299k now",
    price: 199,
  },
];

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
