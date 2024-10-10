import axios, { AxiosResponse } from "axios";
import { Answer } from "@/types/chatbot.type";

const BASE_URL = import.meta.env.VITE_CHATBOT_API;
export const getAnswer = async (question: string): Promise<Answer> => {
  const body = {
    conversation_id: "nampnh-10102024-1",
    model: "gpt-4o",
    content: [
      {
        type: "text",
        text: question,
      },
    ],
  };

  const response: AxiosResponse<Answer> = await axios.post(
    BASE_URL + "/chat",
    body
  );

  return response.data;
};
