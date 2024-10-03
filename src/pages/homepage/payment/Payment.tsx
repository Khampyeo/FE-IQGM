import React from "react";
import { Button, Divider } from "@mantine/core";
import Toolbar from "@/components/toolbar/Toolbar";

const Payment = () => {
  return (
    <div className="h-dvh flex flex-col">
      <Toolbar name="Payment" positionName="center" pre="/qrcode" />
      <div className="p-4">
        <p className="text-base font-medium">Detail</p>
        <div className="flex flex-col gap-3 border border-gray-300 bg-[#EFEFEF] rounded-lg p-4 mt-2">
          <div className="flex justify-between">
            <p>Transfer to</p>
            <p className="font-medium">John Wilson</p>
          </div>
          <div className="flex justify-between">
            <p>Contact name</p>
            <p className="font-medium">Johny</p>
          </div>
          <div className="flex justify-between">
            <p>Phone number</p>
            <p className="font-medium">0347258274</p>
          </div>
          <div className="flex justify-between">
            <p>Amount</p>
            <p className="font-medium">20,000đ/hour</p>
          </div>
          <div className="flex justify-between">
            <p>Address</p>
            <p className="font-medium">District 1, Ho Chi Minh city</p>
          </div>
          <Divider />
          <div className="flex justify-between">
            <p>Fee</p>
            <p className="font-medium">Free</p>
          </div>
          <div className="flex justify-between">
            <p>Invoice code</p>
            <p className="font-medium">08127464</p>
          </div>
          <p className="font-semibold">Promo</p>
          <Button variant="light" color="#1abb86" radius="md" leftSection="+">
            Select gift card
          </Button>
        </div>
      </div>
      <div className="mt-auto p-4 w-full">
        <Button
          variant="filled"
          color="#1abb86"
          radius="md"
          size="md"
          className="!w-full"
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default Payment;
