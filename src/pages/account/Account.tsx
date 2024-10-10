import React from "react";
import { Divider } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useNavigate } from "zmp-ui";
import backgroundImage from "@/static/images/background_account.jpg";
import userImage from "@/static/images/user-img.jpg";
import { featureItems } from "./config";
import RightChervonIcon from "@/static/icons/icon_chervon__right.svg";
import LogoutIcon from "@/static/icons/icon_logout.svg";

const Account = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-4 py-2 flex gap-4 items-center mt-8">
        <div className="h-28 w-28 bg-slate-200 rounded-full overflow-hidden">
          <img src={userImage} alt="" className="object-cover w-full h-full" />
        </div>
        <div>
          <p className="text-xl font-bold">Nguyen Van An</p>
          <p className="text-xs text-gray-400 font-medium mt-1">
            +84 328772456
          </p>
        </div>
        <div className="ml-auto">
          <RightChervonIcon />
        </div>
      </div>
      <Divider mt={16} />
      <div className="py-2">
        {featureItems().map((item, key) =>
          item === "divider" ? (
            <div key={key} className="py-2">
              <Divider mx={16} />
            </div>
          ) : (
            <div
              key={key}
              className="flex gap-5 items-center p-4 hover:bg-background-hover cursor-pointer transition-all"
              onClick={() =>
                navigate(item.path, { animate: true, direction: "forward" })
              }
            >
              <div className="flex gap-2 items-center">
                <div>{item.icon}</div>
                <p className="text-base font-medium">{item.title}</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                {item.path.includes("language") && (
                  <p className="font-semibold">{t("language.current")}</p>
                )}
                <RightChervonIcon />
              </div>
            </div>
          )
        )}
        <div
          className="flex gap-5 items-center p-4 hover:bg-background-hover cursor-pointer transition-all"
          onClick={() => navigate("", { animate: true, direction: "forward" })}
        >
          <div className="flex gap-2 text-red-600 items-center">
            <div>
              <LogoutIcon />
            </div>
            <p className="text-base font-medium">{t("logout")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
