import React, { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { Input } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";
import { featureItems } from "./config";
import HeadphoneIcon from "@/static/icons/icon_headphone.svg";
import NotifyIcon from "@/static/icons/icon_notify.svg";
import QuestionIcon from "@/static/icons/icon_question__circle.svg";
import SearchIcon from "@/static/icons/icon_search.svg";

const HomePage = () => {
  const navigate = useNavigate();
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <div className="py-2 px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-primary text-xl font-bold">IQGM</h1>
        <NotifyIcon />
      </div>
      <div className="mt-4 flex items-center bg-[#f1f3f5] rounded-full px-3">
        <SearchIcon className="cursor-pointer hover:opacity-70" />
        <div className="flex-1">
          <Input
            variant="filled"
            size="md"
            radius={"lg"}
            placeholder="Search..."
            classNames={{ input: "!border-none" }}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
        {featureItems.map((item) => (
          <div
            key={item.key}
            className="group relative h-[172px] min-w-[150px] flex-1 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => navigate(item.path)}
          >
            <img
              src={item.img}
              alt=""
              className="object-cover w-full h-full brightness-50 group-hover:brightness-75 transition-all"
            />
            <div className="absolute w-full bottom-4 flex flex-col items-center text-gray-200 ">
              <p className="text-lg font-medium">{item.text}</p>
              <p className="text-2xl font-bold">{item.emphasizeText}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Carousel
          withControls={false}
          withIndicators
          height={100}
          slideSize="100%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={1}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          className="rounded-lg overflow-hidden"
        >
          <Carousel.Slide className="bg-orange-200"></Carousel.Slide>
          <Carousel.Slide className="bg-primary"></Carousel.Slide>
          <Carousel.Slide className="bg-blue-200"></Carousel.Slide>
        </Carousel>
      </div>
      <div className="mt-4 flex gap-4">
        <div className="flex-1 bg-gray-100 h-[60px] rounded-lg flex items-center justify-center gap-2 cursor-pointer">
          <QuestionIcon className="text-primary" />
          <p>Service Guide</p>
        </div>
        <div className="flex-1 bg-gray-100 h-[60px] rounded-lg flex items-center justify-center gap-2 cursor-pointer">
          <HeadphoneIcon className="text-primary" />
          <p>Customer Center</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
