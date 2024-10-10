import React from "react";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import AppRoutes from "@/routes/routes";
import NavigateBar from "../navigate/NavigateBar";
import ScrollRestoration from "../scroll-restoration/ScrollRestoration";

const Layout = () => {
  const location = useLocation();
  const appRoutes = [
    "/",
    "/promotion",
    "/wallet",
    "/account",
    "/home/map",
    "/my-booking",
  ];
  return (
    <div className="h-dvh flex flex-col">
      <ScrollRestoration />
      <div className="flex-1 bg-background-primary hidden-scrollbar">
        <AppRoutes />
        <div
          className={clsx(
            "h-16",
            !appRoutes.includes(location.pathname) && "hidden"
          )}
        ></div>
      </div>
      <div className={clsx(!appRoutes.includes(location.pathname) && "hidden")}>
        <NavigateBar />
      </div>
    </div>
  );
};
export default Layout;
