import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Progress,
  RingProgress,
  Tabs,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import DraggableSnapProgressBar from "./component/DraggableSnapProgressBar ";
import { packageData } from "./config";
import DownloadIcon from "@/static/icons/icon_download.svg";
import InfoIcon from "@/static/icons/icon_info.svg";
import LeafIcon from "@/static/icons/icon_leaf.svg";
import UploadIcon from "@/static/icons/icon_upload.svg";
import WalletIcon from "@/static/icons/icon_wallet.svg";

const Wallet = () => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <div className="bg-primary h-52 rounded-b-3xl flex flex-col text-white p-4">
        <div className="font-bold text-xl text-center">{t("wallet.title")}</div>
        <div className="flex justify-between mt-4">
          <div>
            <div className="flex items-center gap-2">
              <WalletIcon className="h-6" />
              <p className="text-sm">{t("wallet.balance")}</p>
            </div>
            <p className="font-semibold text-3xl mt-1">950,000đ</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2">
              <LeafIcon />
              <p className="text-sm">{t("wallet.reward")}</p>
            </div>
            <p className="font-semibold text-3xl mt-1">12,245</p>
          </div>
        </div>
      </div>
      <Flex className="absolute p-2 bg-white rounded-2xl h-20 w-80 top-52 -translate-y-1/2 left-1/2 -translate-x-1/2 shadow-md">
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          flex={1}
          gap={2}
          className="text-primary"
        >
          <DownloadIcon />
          <p>{t("wallet.deposit")}</p>
        </Flex>
        <Divider orientation="vertical" />
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          flex={1}
          gap={2}
          className="text-primary"
        >
          <UploadIcon />
          <p>{t("wallet.withdraw")}</p>
        </Flex>
      </Flex>
      <div className="mt-14 px-4">
        <p className="font-semibold">{t("wallet.my_package")}</p>
        <div className="px-4 py-2 bg-[#ECF9EA] rounded-lg mt-1">
          <h2 className="font-bold">KC98</h2>
          <div className="flex justify-between">
            <RingProgress
              size={168}
              thickness={16}
              roundCaps
              sections={[{ value: 40, color: "#1abb86" }]}
              label={
                <div className="flex justify-center">
                  <p className="text-center text-primary w-10 font-bold text-xl">
                    26 {t("wallet.day")}
                  </p>
                </div>
              }
            />
            <RingProgress
              size={168}
              thickness={16}
              roundCaps
              sections={[{ value: 60, color: "#1abb86" }]}
              label={
                <div className="flex justify-center">
                  <p className="text-center text-primary w-10 font-bold text-xl">
                    262 Kwh
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </div>
      <div className="mt-4 px-4">
        <div className="px-4 pt-1 pb-4 bg-[#ECF9EA] rounded-lg mt-1">
          <p className="font-bold">{t("wallet.create_package")}</p>
          <Flex gap={16} className="mt-2">
            <div className="bg-primary py-1 px-2 rounded-lg">
              <p className="text-white font-semibold">MM (100K)</p>
            </div>
            <div className="bg-white border py-1 px-2 rounded-lg cursor-pointer">
              <p className="font-semibold">LM (150K)</p>
            </div>
            <div className="bg-white border py-1 px-2 rounded-lg cursor-pointer">
              <p className="font-semibold">XM (200K)</p>
            </div>
          </Flex>
          <div className="my-6">
            <Flex justify={"space-around"}>
              <Flex direction={"column"} justify={"center"} align={"center"}>
                <p className="font-semibold text-lg">{t("wallet.date")}</p>
                <p>15</p>
              </Flex>
              <Flex direction={"column"} justify={"center"} align={"center"}>
                <p className="font-semibold text-lg">Khw</p>
                <p>12000</p>
              </Flex>
            </Flex>
            <div className="mt-4">
              <DraggableSnapProgressBar />
            </div>
          </div>
          <Flex justify={"center"}>
            <Button
              size="md"
              radius={24}
              variant="filled"
              color="#1abb86"
              className="!px-10"
            >
              {t("wallet.create_package")}
            </Button>
          </Flex>
        </div>
      </div>
      <div className="mt-4 bg-[#ECF9EA] p-4">
        <p className="font-bold">{t("wallet.personal_package")}</p>
        <Tabs defaultValue="first" color="#1abb86">
          <Tabs.List grow justify="space-between">
            <Tabs.Tab value="first">F1</Tabs.Tab>
            <Tabs.Tab value="second">F2</Tabs.Tab>
            <Tabs.Tab value="third">F3</Tabs.Tab>
          </Tabs.List>
        </Tabs>
        <Flex gap={16} direction={"column"} className="mt-4">
          {packageData.map((item) => (
            <div
              key={item.id}
              className="px-4 pb-4 bg-white rounded-lg shadow-sm"
            >
              <Flex justify={"space-between"} align={"center"}>
                <p className="text-white text-sm font-semibold bg-primary px-2 py-1 rounded-b-lg">
                  {item.price}đ
                </p>
                <InfoIcon />
              </Flex>
              <p className="font-bold text-primary mt-2">{item.code}</p>
              <Flex justify={"space-between"} align={"center"} className="mt-1">
                <p className="text-sm">
                  {item.kwh}kwh - {t("wallet.expired", { var: item.expired })}
                </p>
                <p className="bg-white px-3 py-1 rounded-full text-primary border border-primary cursor-pointer">
                  {t("wallet.register")}
                </p>
              </Flex>
            </div>
          ))}
        </Flex>
      </div>
    </div>
  );
};

export default Wallet;
