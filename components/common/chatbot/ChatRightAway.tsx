import axiosWithoutAuth from "@/lib/axiosAPIwithoutAuth";
import {
  XMarkIcon
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import ChatBotMessageSection, { chatbot_messages_type } from "./ChatBotMessageSection";
import ChatBotnavbar from "./ChatBotnavbar";
import ChatBottomBar from "./ChatBottomBar";
import { Button } from "@/components/ui/button";
import { ChatBotTriggerProvider } from "../chatbot-v2/ChatBotTriggerContext";
import { classNames } from "@/lib/utils";

export interface WebChatSessionData {
  widget_id: string;
  session_verified: boolean;
  user_email: null | string;
  user_phone: null | string;
  anon_chat_uuid: null | string;
}

export type CompanyDataI = {
  error: string | null;
  loading: boolean;
  data: {
    heading: string;
    logo_url: string;
    sub_heading: string;
    background_color: string;
    welcome_message: string;
    website_domain: string;
    widget_id: string;
    bubble_icon_url: string;
    bubble_background_color: string;
  } | null;
};

const ChatBotRightAway = ({
  widget_id,
  absolute,
  skip_cookie,
}: {
  widget_id: string;
  skip_cookie: boolean;
  absolute?: boolean;
}) => {
  const [open, setOpen] = useState(false);

  const [companyData, setCompanyData] = useState<CompanyDataI>({
    error: "",
    loading: false,
    data: null,
  });
  const [loadingSession, setLoadingSession] = useState(false); // Initialize with false
  // Add a state to track if polling is in progress
  const [isPolling, setIsPolling] = useState(false);

  const [isInitialPollingDone, setIsInitialPollingDone] = useState(false);
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);
  const [chatSessionData, setChatSessionData] = useState<WebChatSessionData>({
    session_verified: false,
    user_email: "",
    anon_chat_uuid: "",
    user_phone: "",
    widget_id: widget_id,
  }); // Initialize with null
  const [messages, setMessages] = useState<chatbot_messages_type[]>([]);

  const setCookie = (name: string, value: string, days: number) => {
    if (skip_cookie) return;
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };

  const getCookie = (name: string) => {
    if (skip_cookie) return;
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  useEffect(() => {
    if (!skip_cookie && !companyData.loading && !isInitialPollingDone) {
      if (chatSessionData && chatSessionData.anon_chat_uuid !== "") {
        InitialPollForMessages();
      }
    }
  }, [companyData, chatSessionData]);

  useEffect(() => {
    if (!skip_cookie && !companyData.loading) {
      startOrVerifySession();
    }
  }, [companyData]);

  // Function to start a chat session or verify an existing one
  const startOrVerifySession = async () => {
    try {
      setLoadingSession(true);
      // Check if there's an existing session and verify it or start a new one
      const savedSessionData = getCookie(`chat_session_data_${widget_id}`);
      const sessionData = savedSessionData ? JSON.parse(savedSessionData) : {};

      const response = await axiosWithoutAuth.post(`/webchat/start-session`, {
        widget_id,
        anon_chat_uuid: sessionData.anon_chat_uuid || "",
        user_email: sessionData.user_email || "",
        // Add any other required fields
      });

      const { session_verified, user_email, anon_chat_uuid } =
        response.data as WebChatSessionData;
      setChatSessionData({
        ...chatSessionData,
        session_verified,
        user_email,
        anon_chat_uuid,
      });
      // Save the session data back to the cookie
      setCookie(
        `chat_session_data_${widget_id}`,
        JSON.stringify(response.data),
        7
      );
      setLoadingSession(false);
    } catch (err) {
      console.log(err);
      setLoadingSession(false);
    }
  };



  // Function to poll for new messages
  const InitialPollForMessages = async () => {
    if (isPolling || isInitialPollingDone) return;

    // Mark as polling started
    setIsPolling(true);

    const postData: WebChatSessionData = {
      widget_id,
      anon_chat_uuid: chatSessionData.anon_chat_uuid,
      user_email: chatSessionData.user_email,
      user_phone: chatSessionData.user_phone, // Assuming this exists in your state
      session_verified: chatSessionData.session_verified,
    };

    try {
      const response = await axiosWithoutAuth.post(
        `/webchat/poll-messages`,
        postData
      );
      if (response.status === 200) {
        // New messages received
        const newMessages = response.data;
        // Update your state with new messages
        setMessages((prevMessages) => {
          if (newMessages.length > prevMessages.length) {
            return [...newMessages];
          }
          return prevMessages;
        });

      }
    } catch (error) {
      console.error("Error polling for messages:", error);
      // Handle the error appropriately
    }

    // Mark polling as completed
    setIsPolling(false);
    setIsInitialPollingDone(true);
  };

  // Function to poll for new messages
  const pollForMessages = async () => {
    if (isPolling) return;

    // Mark as polling started
    setIsPolling(true);

    const postData: WebChatSessionData = {
      widget_id,
      anon_chat_uuid: chatSessionData.anon_chat_uuid,
      user_email: chatSessionData.user_email,
      user_phone: chatSessionData.user_phone, // Assuming this exists in your state
      session_verified: chatSessionData.session_verified,
    };

    try {
      const response = await axiosWithoutAuth.post(
        `/webchat/poll-messages`,
        postData
      );
      if (response.status === 200) {
        const newMessages = response.data;
        // Use functional update to access the latest state
        setMessages((prevMessages) => {
          if (newMessages.length > prevMessages.length) {
            return [...newMessages];
          }
          return prevMessages;
        });
      }
    } catch (error) {
      console.error("Error polling for messages:", error);
      // Handle the error appropriately
    }

    // Mark polling as completed
    setIsPolling(false);
    // Wait for 5 seconds before polling again
    setTimeout(pollForMessages, 5000); // 5000 milliseconds = 5 seconds
  };


  useEffect(() => {
    const fetchData = async () => {
      setCompanyData({ ...companyData, loading: true });

      if (widget_id) {
        try {
          const { data } = await axiosWithoutAuth.get(
            `/webchat/settings/${widget_id}`
          );
          // return data.data
          setCompanyData({ error: null, data, loading: false });
        } catch {
          setCompanyData({
            error: "Invalid Website",
            data: null,
            loading: false,
          });
        }
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (messages && messages.length > 0) {
      setShowTypingIndicator(
        messages[messages.length - 1].role === "user" ? true : false
      );
    }
  }, [messages]);



  return (
    <>
      <ChatBotTriggerProvider>

      <div
        className={classNames(
          "z-[100]",
          absolute
            ? ` ${open
              ? "right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2 h-full md:h-auto"
              : "bottom-4  right-4"
            }  fixed w-full sm:w-fit`
            : ``
        )}
      >
        {companyData.data && companyData.loading === false && (
          <>
            <div
              className={`fixed left-0 top-0 sm:static w-full h-full m-0 md:w-[380px] md:min-h-[450px] md:h-[calc(100vh-100px)]  md:max-h-[650px] block"  md:mb-2 md:mr-2  transition-all bg-white md:rounded-2xl drop-shadow-xl overflow-hidden flex flex-col ${open ? "block" : "hidden"
                }`}
            >
              {/* Chat Navbar */}
              <div className="relative h-fit flex items-center">
                <ChatBotnavbar
                  companyData={companyData}
                  setOpen={setOpen}
                />
                <button className=" hidden md:block absolute right-2  bg-white/20 hover:bg-white/30 rounded-md p-1" onClick={() => setOpen(false)}>
                  <XMarkIcon className="text-black w-5 h-5 fill-black " />
                </button>
              </div>

              {/* Chats */}
              <ChatBotMessageSection
                open={open}
                companyData={companyData}
                loading={false}
                messages={messages}
                showTypingIndicator={showTypingIndicator}
              />

              {/* UserInputBox */}

              <ChatBottomBar
                chatSessionData={chatSessionData}
                companyData={companyData}
                loadingSession={loadingSession}
                pollForMessages={pollForMessages}
                setMessages={setMessages}
                widget_id={widget_id}
                messages={messages}

              />
            </div>



          </>
        )}

      </div>
      <Button
        variant={'primary'}
        onClick={() => {
          setOpen(true)
        }}
      >
        Click Here To Chat Right Away
      </Button>
      </ChatBotTriggerProvider>
       
    </>
  );
};

export default ChatBotRightAway