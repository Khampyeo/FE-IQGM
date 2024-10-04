import React from "react";
import clsx from "clsx";
import { useNavigate } from "zmp-ui";
import LeftChervonIcon from "@/static/icons/icon_chervon__left.svg";

type Props = {
  name: string;
  pre: string | (() => void);
  positionName?: "center" | "left";
  border?: boolean;
  animate?: boolean;
};
const Toolbar = ({
  name,
  pre,
  positionName = "center",
  border = true,
  animate = true,
}: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className={clsx(
        "flex gap-2 w-full items-center",
        positionName === "center" && "justify-between",
        positionName === "left" && "justify-left",
        border && "border-b border-border-primary"
      )}
    >
      <div
        className="py-4 w-10 cursor-pointer hover:text-primary transition-all"
        onClick={() => {
          if (typeof pre === "string") {
            navigate(pre, {
              animate: animate,
              direction: "backward",
            });
          } else if (typeof pre === "function") {
            pre();
          }
        }}
      >
        <LeftChervonIcon />
      </div>
      <p className="font-bold text-lg">{name}</p>
      <div className="w-10 h-5"></div>
    </div>
  );
};
export default Toolbar;
