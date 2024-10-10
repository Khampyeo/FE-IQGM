import React, { useEffect } from "react";
import { Flex } from "@mantine/core";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import { useNavigate } from "zmp-ui";
import { navigateItems } from "./config";

const NavigateBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Flex
      gap={8}
      justify={"space-around"}
      className="fixed bottom-0 left-0 w-dvw bg-background-primary border-t-2 z-50 shadow-top-shadow"
    >
      {navigateItems().map((item) => (
        <div
          key={item.key}
          className={clsx(
            "flex flex-1 flex-col justify-center items-center py-3 cursor-pointer transition-all",
            (location.pathname === item.path && item.path === "/") ||
              location.pathname.includes(
                item.path === "/" ? "/home" : item.path
              )
              ? "text-primary"
              : "text-text-primary"
          )}
          onClick={() =>
            navigate(item.path, {
              animate: false,
              direction: "backward",
            })
          }
        >
          {(location.pathname === item.path && item.path === "/") ||
          location.pathname.includes(item.path === "/" ? "/home" : item.path)
            ? item.logoSelected
            : item.logo}
          <p className="font-medium text-xs mt-1">{item.label}</p>
        </div>
      ))}
    </Flex>
  );
};
export default NavigateBar;
