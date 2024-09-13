import React, { useEffect, useState } from "react";
import { Input } from "@mantine/core";
import { useForm } from "@mantine/form";
import Toolbar from "@/components/toolbar/Toolbar";
import BotMessage from "./components/BotMessage";
import UserMessage from "./components/UserMessage";
import ArrowIcon from "@/static/icons/icon_arrow__right.svg";

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const form = useForm({
    initialValues: {
      message: "",
    },
    validate: {
      message: (value) =>
        value.trim() === "" ? "Message cannot be empty" : null,
    },
  });
  const handleSubmit = (values) => {
    const newMessages = [...messages];
    newMessages.push(
      { type: "user", message: values.message },
      { type: "bot", message: values.message }
    );
    setMessages(newMessages);
    form.reset();
  };

  return (
    <div className="h-full flex flex-col py-2">
      <Toolbar name="Chatbot" pre="/" />
      <div className="flex-1 py-2 px-4">
        {messages?.map((message: Message) =>
          message.type === "bot" ? (
            <BotMessage message={message.message} />
          ) : (
            <UserMessage message={message.message} />
          )
        )}
      </div>
      <div className="flex gap-2 py-3 px-4 border-t border-border-primary border-opacity-0">
        <div className="flex-1">
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Input
              variant="filled"
              size="sm"
              radius={"lg"}
              placeholder="What do you want ask ?"
              classNames={{ input: "!border-none" }}
              {...form.getInputProps("message")}
            />
          </form>
        </div>
        <div
          className="bg-primary rounded-full w-8 h-8 flex justify-center items-center cursor-pointer hover:opacity-80 transition-all"
          onClick={() => form.onSubmit(handleSubmit)()}
        >
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
