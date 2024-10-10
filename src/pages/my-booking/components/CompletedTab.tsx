import React from "react";
import { Button, Divider, Flex } from "@mantine/core";
import NavigateIcon from "@/static/icons/icon_navigate.svg";

const CompletedTab = () => {
  return (
    <div className="mt-4 p-4 rounded-xl bg-slate-100 border border-slate-200">
      <Flex justify={"space-between"} align={"center"}>
        <div className="font-medium text-[#424242]">
          <p>Dec 05, 2024</p>
          <p>4:00 AM</p>
        </div>
        <Flex
          justify={"center"}
          align={"center"}
          className="bg-green-600 px-3 py-2 text-white font-semibold rounded-lg text-sm"
        >
          <p>Completed</p>
        </Flex>
      </Flex>
      <Divider my={16} />
      <Flex justify={"space-between"} align={"center"}>
        <div className="">
          <h2 className="font-semibold text-xl">ImPark Underhill Garage</h2>
          <p className="text-[#616161]">Brooklyn, 105 Underhill Ave</p>
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
          View
        </Button>
        <Button
          size="lg"
          radius={50}
          variant="filled"
          color="#1abb86"
          className="flex-1"
        >
          Book again
        </Button>
      </Flex>
    </div>
  );
};
export default CompletedTab;
