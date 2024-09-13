import React from "react";

const Account = () => {
  return (
    <div>
      <div className="h-[120px] bg-primary"></div>
      <div className="px-4 py-2 flex gap-4 items-center">
        <div className="h-20 w-20 bg-slate-200 rounded-full"></div>
        <div className="">
          <p className="text-xl font-bold">John Wick</p>
          <p className="text-sm text-gray-400 font-medium">0328772456</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
