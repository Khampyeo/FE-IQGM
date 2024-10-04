import React from "react";
import { Button, Flex, Modal } from "@mantine/core";
import clsx from "clsx";
import { useNavigate } from "zmp-ui";
import Charger1Icon from "@/static/icons/icon_charger_1.svg";
import Charger2Icon from "@/static/icons/icon_charger_2.svg";
import Charger3Icon from "@/static/icons/icon_charger_3.svg";
import ChervonRight from "@/static/icons/icon_chervon__right.svg";
import MarkIcon from "@/static/icons/icon_mark.svg";
import NavigateIcon from "@/static/icons/icon_navigate.svg";
import HalfStarIcon from "@/static/icons/icon_star__half.svg";
import StarIcon from "@/static/icons/icon_star.svg";
import CarIcon from "@/static/icons/icon_vehicle.svg";

const StationModal = ({ opened, isAvailable, close }) => {
  const navigate = useNavigate();
  return (
    <Modal opened={opened} onClose={close} withCloseButton={false} centered>
      <Flex justify={"space-between"} align={"center"}>
        <div className="">
          <h2>99 Prospect Park W</h2>
          <p>Brooklyn, 99 Prospect Park W</p>
        </div>
        <NavigateIcon />
      </Flex>
      <Flex gap={16} align={"center"}>
        <p>4.3</p>
        <Flex gap={2}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <HalfStarIcon />
        </Flex>
        <p>(107 reviews)</p>
      </Flex>
      <Flex align={"center"} gap={16} className="mt-4">
        <p
          className={clsx(
            "text-white px-3 py-1 rounded-xl font-semibold",
            isAvailable ? "bg-green-600" : "bg-red-700"
          )}
        >
          {isAvailable ? "Available" : "In use"}
        </p>
        <Flex align={"center"} gap={4}>
          <MarkIcon />
          <p>1.9km</p>
        </Flex>
        <Flex gap={4}>
          <CarIcon />
          <p> 7 mins</p>
        </Flex>
      </Flex>
      <Flex className="mt-4" justify={"space-between"}>
        <Flex gap={4}>
          <Charger1Icon />
          <Charger2Icon />
          <Charger3Icon />
        </Flex>
        <Flex gap={4} align={"center"} className="text-primary">
          <p className="font-medium">3 chargers</p>
          <ChervonRight />
        </Flex>
      </Flex>
      <Flex gap={16} className="mt-4">
        <Button
          radius={50}
          variant="outline"
          color="#1abb86"
          className="flex-1"
          onClick={() =>
            navigate("/home/map/detail", {
              animate: false,
              direction: "forward",
            })
          }
        >
          View
        </Button>
        <Button radius={50} color="#1abb86" className="flex-1">
          Book
        </Button>
      </Flex>
    </Modal>
  );
};
export default StationModal;
