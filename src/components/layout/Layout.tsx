import React from "react";
import AppRoutes from "@/routes/routes";
import NavigateBar from "../navigate/NavigateBar";
import ScrollRestoration from "../scroll-restoration/ScrollRestoration";

const Layout = () => {
  return (
    <div className="flex flex-col h-dvh">
      <ScrollRestoration />
      <div className="">
        <AppRoutes />
      </div>
      <div className="mt-auto">
        <NavigateBar />
      </div>
    </div>
  );
};
export default Layout;
