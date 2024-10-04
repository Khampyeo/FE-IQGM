import React, { useState } from "react";
import { Input } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import fakeSelectionGreenStationImg from "@/static/images/fake_select_station_green.png";
import fakeSelectionStationImg from "@/static/images/fake_select_station.png";
import fakeStationImg from "@/static/images/fake_station.png";
import backgroundImage from "@/static/images/map-background.png";
import fakeUserImg from "@/static/images/user_fake_postion.png";
import StationModal from "./components/stationModal";
import SearchIcon from "@/static/icons/icon_search.svg";

const Map = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [isAvailable, setIsAvailable] = useState<boolean>();
  return (
    <div className="h-[calc(100dvh-72px)] flex flex-col">
      <div
        style={{ background: `url(${backgroundImage})` }}
        className={`flex-1 bg-cover bg-center`}
      >
        <div className="w-full h-40 relative bg-gradient-to-b from-primary/30">
          <div className="absolute w-11/12 top-4 left-1/2 -translate-x-1/2 flex items-center bg-[#f1f3f5] rounded-full px-3 flex-1">
            <SearchIcon className="cursor-pointer hover:opacity-70" />
            <div className="flex-1">
              <Input
                variant="filled"
                size="md"
                placeholder={`Search station`}
                radius={"lg"}
                classNames={{ input: "!border-none" }}
              />
            </div>
          </div>
          <img
            src={fakeStationImg}
            alt=""
            className="object-contain w-72 h-96 absolute top-52 left-4"
          />
          <img
            src={fakeUserImg}
            alt=""
            className="absolute left-1/2 top-3/4 -translate-x-1/2"
          />
          <img
            src={fakeSelectionStationImg}
            alt=""
            className="absolute left-1/2 top-3/4 -translate-x-1/2 cursor-pointer hover:opacity-70"
            onClick={() => {
              open();
              setIsAvailable(false);
            }}
          />
          <img
            src={fakeSelectionGreenStationImg}
            alt=""
            className="absolute left-1/4 top-2/4 -translate-x-1/2 cursor-pointer hover:opacity-70"
            onClick={() => {
              open();
              setIsAvailable(true);
            }}
          />
        </div>
      </div>
      <StationModal opened={opened} isAvailable={isAvailable} close={close} />
    </div>
  );
};

export default Map;
