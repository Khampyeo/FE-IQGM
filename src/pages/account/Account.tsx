import React from "react";
import { Divider } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useNavigate } from "zmp-ui";
import { featureItems } from "./config";
import RightChervonIcon from "@/static/icons/icon_chervon__right.svg";

const Account = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-[180px] bg-primary"></div>
      <div className="px-4 py-2 flex gap-4 items-center">
        <div className="h-20 w-20 bg-slate-200 rounded-full"></div>
        <div className="">
          <p className="text-xl font-bold">John Wick</p>
          <p className="text-xs text-gray-400 font-medium mt-1">
            +84 328772456
          </p>
        </div>
        <div className="ml-auto">
          <RightChervonIcon />
        </div>
      </div>
      <div className="py-2">
        {featureItems().map((item, key) =>
          item === "divider" ? (
            <div key={key} className="py-2">
              <Divider />
            </div>
          ) : (
            <div
              key={key}
              className="flex gap-5 items-center px-4 py-3 hover:bg-background-hover cursor-pointer transition-all"
              onClick={() =>
                navigate(item.path, { animate: true, direction: "forward" })
              }
            >
              <div className="flex gap-2">
                <div>{item.icon}</div>
                <p className="text-base font-medium">{item.title}</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                {item.path.includes("language") && (
                  <p className="font-semibold">{t("language")}</p>
                )}
                <RightChervonIcon />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Account;
