import React, { useEffect } from "react";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import { useNavigate } from "zmp-ui";
import { navigateItems } from "./config";

const NavigateBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex gap-2 justify-around bg-background-primary shadow-top-shadow">
      {navigateItems.map((item) => (
        <div
          key={item.key}
          className={clsx(
            "flex flex-1 flex-col justify-center items-center py-3 cursor-pointer hover:bg-selected transition-all",
            location.pathname === item.path
              ? "text-primary"
              : "text-text-primary"
          )}
          onClick={() => navigate(item.path)}
        >
          {location.pathname === item.path ? item.logoSelected : item.logo}
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};
export default NavigateBar;
