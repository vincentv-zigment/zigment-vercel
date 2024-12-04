
import React, { createContext, useContext, useState } from "react";

type TriggerMessage = {
  open: boolean;
  message: string;
};

type ChatBotTriggerContextType = {
  triggerMessage: TriggerMessage | null;
  setTriggerMessage: React.Dispatch<React.SetStateAction<TriggerMessage | null>>;
};

const ChatBotTriggerContext = createContext<ChatBotTriggerContextType | undefined>(undefined);

export const ChatBotTriggerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [triggerMessage, setTriggerMessage] = useState<TriggerMessage | null>(null);

  return (
    <ChatBotTriggerContext.Provider value={{ triggerMessage, setTriggerMessage }}>
      {children}
    </ChatBotTriggerContext.Provider>
  );
};

export const useChatBotTrigger = () => {
  const context = useContext(ChatBotTriggerContext);
  if (!context) {
    // return null

    throw new Error("useChatBotTrigger must be used within a ChatBotTriggerProvider");
  }
  return context;
};