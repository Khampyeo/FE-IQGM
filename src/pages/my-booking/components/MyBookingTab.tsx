import React from "react";
import { Button, Divider, Flex, Switch } from "@mantine/core";
import InfoIcon from "@/static/icons/icon_info__square.svg";
import LightingIcon from "@/static/icons/icon_lightning.svg";
import NavigateIcon from "@/static/icons/icon_navigate.svg";

const MyBookingTab = () => {
  return (
    <div>
      <div className="mt-4 p-4 rounded-xl bg-slate-100 border border-slate-200">
        <Flex justify={"space-between"} align={"center"}>
          <div className="font-medium text-[#424242]">
            <p>Dec 17, 2024</p>
            <p>10:00 AM</p>
          </div>
          <Flex gap={8} align={"center"}>
            <p className="text-[#616161]">Remind me</p>
            <Switch color="var(--primary)" size="lg" defaultChecked />
          </Flex>
        </Flex>
        <Divider my={16} />
        <Flex justify={"space-between"} align={"center"}>
          <div className="">
            <h2 className="font-semibold text-xl">Walgreens - Brooklyn, NY</h2>
            <p className="text-[#616161]">Brooklyn, 589 Prospect Avenue</p>
          </div>
          <NavigateIcon />
        </Flex>
        <Divider my={16} />
        <Flex justify={"space-between"} align={"center"}>
          <div className="">
            <p className="text-sm">Plug</p>
            <p className="font-semibold">Dat bike</p>
          </div>
          <Divider orientation="vertical" />
          <div className="">
            <p className="text-sm">Max. power</p>
            <p className="font-semibold">100 kW</p>
          </div>
          <Divider orientation="vertical" />
          <div className="">
            <p className="text-sm">Duration</p>
            <p className="font-semibold">1 hour</p>
          </div>
          <Divider orientation="vertical" />
          <div className="">
            <p className="text-sm">Amount</p>
            <p className="font-semibold">$14.25</p>
          </div>
        </Flex>
        <Divider my={16} />
        <Flex gap={8} className="mt-4">
          <Button
            size="lg"
            radius={50}
            variant="outline"
            color="#1abb86"
            className="flex-1"
          >
            Cancel
          </Button>
          <Button size="lg" radius={50} color="#1abb86" className="flex-1">
            View
          </Button>
        </Flex>
        <div className="px-4 py-2 text-primary text-sm bg-primary/15 rounded-xl mt-8">
          <Flex gap={8}>
            <InfoIcon className="shrink-0 h-5 w-5 pt-1 text-primary" />
            <p>
              Insert the charger connection into your car to start charging. If
              you do not charge after 15 minutes from the time, this booking
              will be automatically cancelled.
            </p>
          </Flex>
        </div>
      </div>
      <div className="mt-4 p-4 rounded-xl bg-slate-100 border border-slate-200">
        <Flex
          justify={"center"}
          align={"center"}
          className="relative bg-primary/80 overflow-hidden px-6 py-2 text-white font-semibold rounded-lg text-sm"
        >
          <div className="absolute top-0 left-0 w-1/4 h-full bg-white opacity-40 blur-md animate-sweep"></div>
          <LightingIcon />
          <p>Charging</p>
        </Flex>
        <Flex justify={"space-between"} align={"center"}>
          <div className="">
            <h2 className="font-semibold text-xl">Walgreens - Brooklyn, NY</h2>
            <p className="text-[#616161]">Brooklyn, 589 Prospect Avenue</p>
          </div>
          <NavigateIcon />
        </Flex>
        <Divider my={16} />
        <Flex justify={"space-between"} align={"center"}>
          <div className="">
            <p className="text-sm">Plug</p>
            <p className="font-semibold">Dat bike</p>
          </div>
          <Divider orientation="vertical" />
          <div className="">
            <p className="text-sm">Max. power</p>
            <p className="font-semibold">100 kW</p>
          </div>
          <Divider orientation="vertical" />
          <div className="">
            <p className="text-sm">Duration</p>
            <p className="font-semibold">1 hour</p>
          </div>
          <Divider orientation="vertical" />
          <div className="">
            <p className="text-sm">Amount</p>
            <p className="font-semibold">$14.25</p>
          </div>
        </Flex>
        <Divider my={16} />
        <Flex gap={8} className="mt-4">
          <Button
            size="lg"
            radius={50}
            variant="outline"
            color="#1abb86"
            className="flex-1"
          >
            Stop
          </Button>
          <Button size="lg" radius={50} color="#1abb86" className="flex-1">
            View
          </Button>
        </Flex>
      </div>
    </div>
  );
};
export default MyBookingTab;
