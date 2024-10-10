import React from "react";
import { Avatar } from "@mantine/core";
import showdown from "showdown";

type Props = {
  message: string;
};
const BotMessage = ({ message }: Props) => {
  const converter = new showdown.Converter();
  const html = converter.makeHtml(message);
  return (
    <div className="mb-1">
      <div className="flex items-center gap-2">
        <Avatar
          variant="filled"
          color="var(--primary)"
          size={28}
          radius="50"
          src=""
        />
        <p className="font-semibold">Assistant</p>
      </div>
      <div className="inline-block bg-gray-200 px-3 py-1.5 rounded-2xl mt-1.5">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};
export default BotMessage;
