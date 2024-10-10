import React, { Fragment, useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { Divider, Flex, Input } from "@mantine/core";
import clsx from "clsx";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";
import { ads, promotionData, redeemData } from "./config";
import DiscountIcon from "@/static/icons/icon_discount.svg";
import PromotionIcon from "@/static/icons/icon_promotion__fill.svg";
import SearchIcon from "@/static/icons/icon_search.svg";

const Promotion = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const { t } = useTranslation();
  return (
    <div className="relative">
      <div className="w-full h-52">
        <Carousel
          withControls={false}
          withIndicators
          height={200}
          slideSize="100%"
          loop
          align="start"
          slidesToScroll={1}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          className="w-full h-full overflow-hidden"
        >
          {ads.map((item) => (
            <Carousel.Slide key={item.key}>
              <img
                src={item.img}
                alt=""
                className="object-cover w-full h-full"
              />
            </Carousel.Slide>
          ))}
        </Carousel>
        <div className="absolute w-full px-4 top-4 left-0">
          <div className="bg-white/40 flex items-center rounded-full px-3 w-full hover:bg-white">
            <SearchIcon className="cursor-pointer hover:opacity-70" />
            <div className="flex-1">
              <Input
                variant="filled"
                size="md"
                radius={"lg"}
                placeholder={t("promotion.search")}
                classNames={{ input: "!border-none !bg-transparent" }}
              />
            </div>
          </div>
        </div>
        <Flex
          align={"center"}
          className="absolute z-10 w-full px-4 top-52 -translate-y-1/2 left-1/2 -translate-x-1/2"
        >
          <Flex
            justify={"center"}
            align={"center"}
            gap={8}
            className="bg-white flex-1 p-4 rounded-xl shadow-md"
          >
            <DiscountIcon />
            <p>{t("promotion.enter_code")}</p>
          </Flex>

          <Flex
            justify={"center"}
            align={"center"}
            gap={8}
            className="bg-white flex-1 p-4 rounded-xl shadow-md"
          >
            <PromotionIcon className="text-primary" />
            <p>{t("promotion.my_voucher")}</p>
          </Flex>
        </Flex>
      </div>
      <div className="p-4 mt-8">
        <Flex justify={"space-between"} align={"center"} className="">
          <p className="font-semibold text-lg">{t("promotion.my_voucher")}</p>
          <div className="bg-[#C3E3D9] rounded-full px-3.5 py-2">
            <p className="leading-none text-primary">
              {t("promotion.see_all")}
            </p>
          </div>
        </Flex>
        <Flex direction={"column"} gap={12} className="mt-4">
          {promotionData.map((item) => (
            <Flex
              key={item.id}
              gap={4}
              align={"center"}
              className="h-24 bg-[#C3E3D9] rounded-lg p-2"
            >
              <img
                src={item.img}
                alt=""
                className="object-cover h-[80px] w-[80px] bg-black rounded-lg overflow-hidden"
              />
              <Flex
                direction={"column"}
                justify={"space-between"}
                className="relative"
              >
                <div className="h-3 w-3 bg-white rounded-sm rotate-45 -translate-y-11"></div>
                <div className="h-3 w-3 bg-white rounded-sm rotate-45 translate-y-11"></div>
                <div className="absolute h-20 border border-white border-dashed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
              </Flex>
              <Flex direction={"column"} className="h-full ml-3">
                <h3 className="font-semibold">{item.title}</h3>
                <div className="text-sm mt-auto">
                  <p>{t("promotion.num_vouncher", { var: item.num })} </p>
                  <p
                    className={clsx(
                      " font-medium",
                      item.expire === 1 ? "text-red-700" : "text-primary"
                    )}
                  >
                    {t("promotion.expired_day", { var: item.expire })}
                  </p>
                </div>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </div>
      <div className="mt-4">
        <Flex justify={"space-between"} align={"center"} className="p-4">
          <p className="font-semibold text-lg">{t("promotion.redeem_gift")}</p>
          <div className="bg-[#C3E3D9] rounded-full px-3.5 py-2">
            <p className="leading-none text-primary">
              {t("promotion.see_all")}
            </p>
          </div>
        </Flex>
        <div className="bg-white py-8">
          <Flex direction={"column"}>
            {redeemData.map((item, key) => (
              <Fragment key={item.id}>
                <Flex gap={8} className="hover:bg-gray-100 p-4 cursor-pointer">
                  <img
                    src={item.img}
                    alt=""
                    className="shrink-0 object-cover h-[64px] w-[64px] bg-black rounded-lg overflow-hidden "
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-sm">{item.title}</p>
                  </div>
                  <Flex
                    justify={"center"}
                    align={"center"}
                    direction={"column"}
                    className="ml-auto"
                  >
                    <div className="bg-primary rounded-full px-3 py-0.5">
                      <p className="text-white text-sm">{item.price}</p>
                    </div>
                    <p className="text-primary">{t("promotion.credit")}</p>
                  </Flex>
                </Flex>
                {redeemData.length !== key + 1 && (
                  <Divider mx={4} color="gray" className="opacity-25" />
                )}
              </Fragment>
            ))}
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
