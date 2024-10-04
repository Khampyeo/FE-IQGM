import React from "react";
import {
  Box,
  Button,
  Collapse,
  Divider,
  Flex,
  Grid,
  Spoiler,
  Tabs,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import clsx from "clsx";
import { useNavigate } from "zmp-ui";
import stationlImage from "@/static/images/detail_station.png";
import Arrowicon from "@/static/icons/icon_arrow__left.svg";
import ChevronDownIcon from "@/static/icons/icon_chevron__down.svg";
import ChevronUpIcon from "@/static/icons/icon_chevron__up.svg";
import MarkIcon from "@/static/icons/icon_mark.svg";
import HalfStarIcon from "@/static/icons/icon_star__half.svg";
import StarIcon from "@/static/icons/icon_star.svg";
import CarIcon from "@/static/icons/icon_vehicle.svg";

const Detail = () => {
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className="">
      <div className="relative">
        <img
          src={stationlImage}
          alt=""
          className="object-contain object-top w-full "
        />
        <Flex className="absolute top-0 left-0 p-4">
          <Flex
            justify={"center"}
            align={"center"}
            className="bg-white/40 rounded-full h-10 w-10 hover:bg-white/60 transition-all cursor-pointer"
            onClick={() => navigate("/home/map", { animate: false })}
          >
            <Arrowicon />
          </Flex>
        </Flex>
      </div>
      <div className="p-4">
        <div className="py-2">
          <h1 className="text-2xl font-bold">Walgreens - Brooklyn, NY</h1>
          <p className="text-[#616161]">Brooklyn, 589 Prospect Avenue</p>
        </div>
        <Flex
          gap={16}
          align={"center"}
          className="font-semibold text-[#757575]"
        >
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
        <Flex
          align={"center"}
          gap={16}
          className="mt-4 text-[#757575] font-semibold"
        >
          <p
            className={clsx(
              "bg-green-600 text-white px-4 py-1 rounded-lg font-semibold"
            )}
          >
            Available
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
        <Flex gap={16} className="mt-8">
          <Button size="md" radius={50} color="#1abb86" className="flex-1">
            Get Direction
          </Button>
          <Button
            radius={50}
            size="md"
            variant="outline"
            color="#1abb86"
            className="flex-1"
          >
            Route Planner
          </Button>
        </Flex>
        <Tabs defaultValue="first" color="#1abb86" className="mt-8">
          <Tabs.List
            grow
            justify="space-between"
            className="font-semibold text-lg"
          >
            <Tabs.Tab size={60} value="first">
              Info
            </Tabs.Tab>
            <Tabs.Tab value="second">Chargers</Tabs.Tab>
            <Tabs.Tab value="third">Check-ins</Tabs.Tab>
          </Tabs.List>
        </Tabs>
        <div className="m-4">
          <h1 className="text-xl font-bold mb-2">About</h1>
          <Spoiler
            maxHeight={80}
            showLabel="Show more"
            mb={46}
            hideLabel="Hide"
            className="text-[#424242]"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            veniam neque rerum cum mollitia id corrupti atque sunt, non delectus
            aliquid adipisci a minus voluptatum nisi obcaecati ad velit natus!
          </Spoiler>
          <div className="p-4 bg-slate-100 rounded-xl ">
            <Flex justify={"space-between"}>
              <p>Parking</p>
              <p className="font-semibold">Pay</p>
            </Flex>
            <Divider my={16} />
            <Flex justify={"space-between"}>
              <p>Cost</p>
              <p className="font-semibold">Payment is required</p>
            </Flex>
          </div>
          <div className="p-4 bg-slate-100 rounded-xl mt-4">
            <Box maw={400} mx="auto">
              <Flex
                justify={"space-between"}
                onClick={toggle}
                className="cursor-pointer"
              >
                <p>Open 24h</p>
                {opened ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </Flex>

              <Collapse in={opened}>
                <Divider my={16} />
                <div className="font-medium">
                  <Flex justify={"space-between"} className="py-2">
                    <p>Monday</p>
                    <p>00:00 - 00:00</p>
                  </Flex>
                  <Flex justify={"space-between"} className="py-2">
                    <p>Tuesday</p>
                    <p>00:00 - 00:00</p>
                  </Flex>
                  <Flex justify={"space-between"} className="py-2">
                    <p>Wednesday</p>
                    <p>00:00 - 00:00</p>
                  </Flex>
                  <Flex justify={"space-between"} className="py-2">
                    <p>Thursday</p>
                    <p>00:00 - 00:00</p>
                  </Flex>
                  <Flex justify={"space-between"} className="py-2">
                    <p>Friday</p>
                    <p>00:00 - 00:00</p>
                  </Flex>
                  <Flex justify={"space-between"} className="py-2">
                    <p>Sat</p>
                    <p>00:00 - 00:00</p>
                  </Flex>
                  <Flex justify={"space-between"} className="py-2">
                    <p>Sunday</p>
                    <p>00:00 - 00:00</p>
                  </Flex>
                </div>
              </Collapse>
            </Box>
          </div>
          <div className="p-4 bg-slate-100 rounded-xl mt-4">
            <h2 className="font-semibold text-lg">Amenities</h2>
            <Divider my={16} />
            <Grid>
              <Grid.Col span={6}>Restrooms</Grid.Col>
              <Grid.Col span={6}>Lounge area</Grid.Col>
              <Grid.Col span={6}>Restaurant</Grid.Col>
              <Grid.Col span={6}>Wi-Fi</Grid.Col>
              <Grid.Col span={6}>Entertainment</Grid.Col>
              <Grid.Col span={6}>Air for Tyres</Grid.Col>
              <Grid.Col span={6}>Shops</Grid.Col>
              <Grid.Col span={6}>Maintenance</Grid.Col>
            </Grid>
          </div>
          <div className="mt-8">
            <h1 className="font-bold text-xl">Location</h1>
            <Flex>
              <p className="text-[#757575]">Brooklyn, 589 Prospect Avenue</p>
            </Flex>
          </div>
          <div className="h-16"></div>
        </div>
      </div>
      <div className="absolute bottom-0 p-4 bg-white w-full">
        <Button
          size="lg"
          radius={50}
          color="var(--primary)"
          fullWidth
          onClick={() =>
            navigate("/home/map/detail/booking", { animate: false })
          }
        >
          Book
        </Button>
      </div>
    </div>
  );
};
export default Detail;
