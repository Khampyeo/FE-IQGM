import React from "react";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import AppRoutes from "@/routes/routes";
import NavigateBar from "../navigate/NavigateBar";
import ScrollRestoration from "../scroll-restoration/ScrollRestoration";

const Layout = () => {
  const location = useLocation();
  const appRoutes = ["/", "/promotion", "/wallet", "/account"];
  return (
    <div className="flex flex-col h-dvh">
      <ScrollRestoration />
      <div className="flex-1 overflow-y-auto bg-background-primary hidden-scrollbar">
        <AppRoutes />
      </div>
      <div
        className={clsx(
          "mt-auto",
          !appRoutes.includes(location.pathname) && "hidden"
        )}
      >
        <NavigateBar />
      </div>
    </div>
  );
};
export default Layout;
