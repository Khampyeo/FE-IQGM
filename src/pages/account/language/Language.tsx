import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "zmp-ui";
import Toolbar from "@/components/toolbar/Toolbar";
import { languagesItems } from "./config";
import CheckIcon from "@/static/icons/icon_check.svg";

const Language = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("appLanguage", lng);
  };

  return (
    <div className="h-dvh flex flex-col py-2">
      <Toolbar name="Languages" pre="/account" positionName="left" />
      <div className="mt-2">
        {languagesItems().map((item) => (
          <div
            key={item.key}
            className="flex gap-5 items-center px-4 py-3 hover:bg-background-hover cursor-pointer transition-all justify-between"
            onClick={() => {
              changeLanguage(item.value);
              navigate("/account", {
                animate: true,
                direction: "backward",
              });
            }}
          >
            <div className="flex gap-2">
              <p className="text-base font-medium">{item.name}</p>
            </div>
            {item.value === i18n.language && (
              <CheckIcon className="text-primary" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
