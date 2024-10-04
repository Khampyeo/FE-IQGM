import React, { useRef, useState } from "react";
import { Button, Flex, Radio } from "@mantine/core";
import Toolbar from "@/components/toolbar/Toolbar";
import { payMethods } from "../config";
import WalletIcon from "@/static/icons/icon_wallet__fill.svg";

const CardSelectSection = ({ setSection }) => {
  return (
    <div className="">
      <Toolbar
        name="Select Payment Method "
        pre={() => setSection(1)}
        animate={false}
        positionName="left"
      ></Toolbar>
      <div className="p-4">
        <Flex direction={"column"} gap={16} className="text-lg">
          <Flex
            justify={"space-between"}
            className="p-4 rounded-xl border border-slate-200 bg-slate-100"
          >
            <Flex align={"center"} gap={16}>
              <WalletIcon className="text-primary w-12 h-12" />
              <p>E-Wallet</p>
            </Flex>
            <Flex align={"center"} gap={16}>
              <p className="text-primary font-medium">$957.50</p>
              <Radio size="lg" variant="outline" color="var(--primary)" />
            </Flex>
          </Flex>
          {payMethods.map((item, key) => (
            <Flex
              key={key}
              justify={"space-between"}
              className="p-4 rounded-xl border border-slate-200 bg-slate-100"
            >
              <Flex align={"center"} gap={16}>
                {item.icon}
                <p>{item.name}</p>
              </Flex>
              <Flex align={"center"} gap={16}>
                <Radio size="lg" variant="outline" color="var(--primary)" />
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Button
          size="lg"
          radius={50}
          variant="outline"
          color="var(--primary)"
          className="mt-4"
          fullWidth
          onClick={() => setSection(3)}
        >
          + Add New Payment
        </Button>
      </div>
      <div className="h-24"></div>
      <div className="absolute bottom-0 p-4 bg-white w-full">
        <Button
          size="lg"
          radius={50}
          color="var(--primary)"
          fullWidth
          onClick={() => setSection(3)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
export default CardSelectSection;
