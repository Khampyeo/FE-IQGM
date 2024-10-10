export type Answer = {
  conversation_id: string;
  thread_id: string;
  content: Array<{
    type: "text";
    text: string;
  }>;
};
