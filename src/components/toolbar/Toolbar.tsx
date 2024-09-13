import React from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import LeftChervonIcon from "@/static/icons/icon_chervon__left.svg";

type Props = {
  name: string;
  pre: string;
  positionName?: "center" | "left";
};
const Toolbar = ({ name, pre, positionName = "center" }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className={clsx(
        "flex gap-4 w-full items-center border-b border-border-primary",
        positionName === "center" && "justify-between",
        positionName === "left" && "justify-left"
      )}
    >
      <div className="flex-1 py-3" onClick={() => navigate(pre)}>
        <LeftChervonIcon className="cursor-pointer hover:text-primary transition-all" />
      </div>
      <p className="font-bold">{name}</p>
      <div className="flex-1"></div>
    </div>
  );
};
export default Toolbar;
