import React, { useRef, useState } from "react";
import { Button, Divider, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Toolbar from "@/components/toolbar/Toolbar";
import bikeImg from "@/static/images/datbike.png";
import ConfirmSuccess from "./ConfirmSuccess";
import Charger1Icon from "@/static/icons/icon_charger_1.svg";
import WalletIcon from "@/static/icons/icon_wallet__fill.svg";

const ReviewSection = ({ setSection }) => {
  const [value, setValue] = useState<Date | null>(null);
  const ref = useRef<HTMLInputElement>(null);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Toolbar
        name="Review Summary"
        pre={() => setSection(2)}
        animate={false}
        positionName="left"
      ></Toolbar>
      <div className="p-4">
        <div className="">
          <h2 className="font-semibold text-lg">Vehicle</h2>
          <Flex
            gap={32}
            className="mt-4 p-4 rounded-xl border-slate-200 bg-slate-100"
          >
            <img src={bikeImg} alt="" className="h-20" />
            <div className="">
              <p className="font-semibold text-xl">Quantum</p>
              <Flex align={"center"} gap={16} className="mt-2">
                <p className="text-[#616161] italic">Dat bike</p>
                <div className="h-5 w-5 rounded-full bg-orange-500"></div>
              </Flex>
            </div>
          </Flex>
        </div>
        <div className="mt-4">
          <h2 className="font-semibold text-lg">Charging Station</h2>
          <Flex
            justify={"space-between"}
            align={"center"}
            className="mt-4 p-4 rounded-xl border-slate-200 bg-slate-100"
          >
            <div className="flex-1">
              <p className="text-[#616161]">Tesla (Plug) - AC/DC</p>
              <Charger1Icon className="text-black h-7 w-7 mt-1" />
            </div>
            <Divider mx={16} orientation="vertical" />
            <div className="flex-1">
              <p className="text-[#616161]">Max. power</p>
              <p className="font-bold text-xl">100 kW</p>
            </div>
          </Flex>
        </div>
        <div className="mt-4">
          <h2 className="font-semibold text-lg">Charger</h2>
        </div>
        <div className="p-4 rounded-xl border-slate-200 bg-slate-100">
          <Flex justify={"space-between"}>
            <p className="font-medium text-[#616161]">Booking Date</p>
            <p className="font-semibold">Dec 17, 2024</p>
          </Flex>
          <Flex justify={"space-between"}>
            <p className="font-medium text-[#616161]">Time of Arrival</p>
            <p className="font-semibold">10:00 AM</p>
          </Flex>
          <Flex justify={"space-between"}>
            <p className="font-medium text-[#616161]">Charging Duration</p>
            <p className="font-semibold">1 Hour</p>
          </Flex>
        </div>
        <div className="mt-4 p-4 rounded-xl border-slate-200 bg-slate-100">
          <Flex justify={"space-between"}>
            <p className="font-medium text-[#616161]">Amount Estimation</p>
            <p className="font-semibold">$ 14.25</p>
          </Flex>
          <Flex justify={"space-between"}>
            <p className="font-medium text-[#616161]">Tax</p>
            <p className="font-semibold">Free</p>
          </Flex>
          <Flex justify={"space-between"}>
            <p className="font-medium text-[#616161]">Total Amount</p>
            <p className="font-semibold">$ 14.25</p>
          </Flex>
        </div>
        <div className="mt-4">
          <h2 className="font-semibold text-lg">Selected Payment Method</h2>
          <Flex
            align={"center"}
            gap={16}
            className="mt-2 border-slate-200 bg-slate-100 p-4"
          >
            <WalletIcon className="text-primary w-12 h-12" />
            <p className="font-bold">E-Wallet</p>
          </Flex>
        </div>
      </div>
      <div className="h-16"></div>
      <div className="absolute bottom-0 p-4 bg-white w-full">
        <Button
          size="lg"
          radius={50}
          color="var(--primary)"
          fullWidth
          onClick={open}
        >
          Confirm Booking
        </Button>
      </div>
      <ConfirmSuccess opened={opened} close={close} />
    </div>
  );
};
export default ReviewSection;
