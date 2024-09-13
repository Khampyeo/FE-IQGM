import React from "react";

type Props = {
  message: string;
};
const BotMessage = ({ message }: Props) => {
  return (
    <div className="mb-1">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 bg-gray-300 rounded-lg"></div>
        <p className="font-semibold">Assistant</p>
      </div>
      <div className="inline-block bg-gray-200 px-3 py-2 rounded-3xl mt-1.5">
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};
export default BotMessage;
