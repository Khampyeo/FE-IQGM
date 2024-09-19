import React from "react";
import clsx from "clsx";
import { useNavigate } from "zmp-ui";
import LeftChervonIcon from "@/static/icons/icon_chervon__left.svg";

type Props = {
  name: string;
  pre: string;
  positionName?: "center" | "left";
  border?: boolean;
};
const Toolbar = ({
  name,
  pre,
  positionName = "center",
  border = true,
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
        className="py-3 w-10 cursor-pointer hover:text-primary transition-all"
        onClick={() =>
          navigate(pre, {
            animate: true,
            direction: "backward",
          })
        }
      >
        <LeftChervonIcon />
      </div>
      <p className="font-bold">{name}</p>
      <div className="w-10 h-5"></div>
    </div>
  );
};
export default Toolbar;
