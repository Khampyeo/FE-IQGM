import React, { Fragment, useEffect, useState } from "react";
import { Button, Input, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useScrollIntoView } from "@mantine/hooks";
import { useMutation } from "@tanstack/react-query";
import { getAnswer } from "@/apis/chatbot.api";
import Toolbar from "@/components/toolbar/Toolbar";
import { Answer } from "@/types/chatbot.type";
import BotMessage from "./components/BotMessage";
import UserMessage from "./components/UserMessage";
import ArrowIcon from "@/static/icons/icon_arrow__right.svg";

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >();

  useEffect(() => {
    scrollIntoView();
  }, [messages, scrollIntoView]);

  const getAnswerMutation = useMutation({
    mutationFn: (question: string) => getAnswer(question),
    onSuccess: (answer: Answer) => {
      const newMessages = [...messages];
      newMessages.push({ type: "bot", message: answer.content[0].text });
      setMessages(newMessages);
    },
    onError: () => {
      const newMessages = [...messages];
      newMessages.push({
        type: "bot",
        message: "Something went wrong, please ask again!",
      });
      setMessages(newMessages);
    },
  });
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
    newMessages.push({ type: "user", message: values.message });
    setMessages(newMessages);
    getAnswerMutation.mutate(values.message);
    form.reset();
  };

  return (
    <div className="h-dvh flex flex-col py-2">
      <Toolbar name="Chatbot" pre="/" />
      <div
        ref={scrollableRef}
        className="flex-1 overflow-y-scroll hidden-scrollbar py-2 px-4"
      >
        {messages?.map((message: Message, key: number) => (
          <Fragment key={key}>
            {message.type === "bot" ? (
              <BotMessage message={message.message} />
            ) : (
              <UserMessage message={message.message} />
            )}
          </Fragment>
        ))}
        <div ref={targetRef}></div>
      </div>
      <div className="w-full bg-white flex gap-2 py-3 px-4 border-t border-border-primary border-opacity-0">
        <div className="flex-1">
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Input
              variant="filled"
              size="md"
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
