import axiosWithoutAuth from '@/lib/axiosAPIwithoutAuth';
import { PaperAirplaneIcon } from '@heroicons/react/20/solid';
import moment from 'moment';
import { useRouter } from 'next/router';
import { Dispatch, KeyboardEvent, SetStateAction, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useChatBotTrigger } from '../chatbot-v2/ChatBotTriggerContext';
import { chatbot_messages_type } from './ChatBotMessageSection';
import { CompanyDataI, WebChatSessionData } from './ChatRightAway';

type Props = {
    widget_id: string,
    chatSessionData: WebChatSessionData,
    pollForMessages: () => void,
    setMessages: Dispatch<SetStateAction<chatbot_messages_type[]>>,
    loadingSession: boolean,
    companyData: CompanyDataI,
    messages: chatbot_messages_type[],
    init?: boolean;

}

const ChatBottomBar = ({
    widget_id,
    chatSessionData,
    pollForMessages,
    setMessages,
    loadingSession,
    messages,
    init = false,

}: Props) => {

    const [textareaRows, setTextareaRows] = useState(1); // Initialize with 1 row
    const [userMessage, setuserMessage] = useState("");
    const [messageSending, setMessageSending] = useState(false);
    const { triggerMessage } = useChatBotTrigger();

    useEffect(() => {
        if (triggerMessage && triggerMessage.open) {
            setuserMessage(triggerMessage.message);
          // setMessages((prevMessages) => [
          //   ...prevMessages,
          //   {
          //     _id: prevMessages.length + 1,
          //     role: "user",
          //     content: triggerMessage.message,
          //   },
          // ]);
        }
      }, [triggerMessage]);

    const textAreaRef = useRef<HTMLTextAreaElement>(null);


    const handleSendMessage = async () => {
        if (!userMessage.trim()) return; // Skip empty messages

        setMessageSending(true);

        const postData = {
            widget_id,
            anon_chat_uuid: chatSessionData.anon_chat_uuid,
            user_email: chatSessionData.user_email,
            user_phone: chatSessionData.user_phone,
            session_verified: chatSessionData.session_verified,
        };

        try {
            await axiosWithoutAuth.post(`/webchat/send-message`, {
                ...postData,
                user_message: userMessage,
            });

            // Assuming the API returns the sent message or an acknowledgment

            setMessages((prevMessages) => [...prevMessages, {
                _id: `${uuidv4()}-${moment().unix()}`,
                role: "user",
                content: userMessage,
                timestamp: moment().unix(),
            }]);
            setuserMessage(""); // Clear the input field after ensuring the message was sent

        } catch (err) {
            console.error(err);
        } finally {
            setMessageSending(false);
            pollForMessages(); // Poll for new messages after the state has been updated
        }
    };


    useEffect(() => {
        // Calculate the number of rows based on the scroll height of the textarea
        const calculateRows = () => {
            const lines = userMessage.split("\n").length;
            setTextareaRows(lines < 1 ? 1 : lines);
        };

        calculateRows();

        // Add a scroll event listener to the textarea
        const textarea = document.getElementById("user-message");
        if (textarea) {
            textarea.addEventListener("scroll", calculateRows);
        }

        return () => {
            // Clean up the event listener
            if (textarea) {
                textarea.removeEventListener("scroll", calculateRows);
            }
        };
    }, [userMessage]);

 

    const handleKeyDownForSendMessage = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    const router = useRouter()

    useEffect(() => {
        if (textAreaRef.current && router.pathname!=='/app/setting/my-communication-channels') {
            textAreaRef.current.focus();
        }
    }, [messageSending, init, messages, router.pathname]);

    return (
        <div className="border-t w-full p-2 flex items-center gap-2">
            <textarea
                className="p-1.5 text-sm rounded-md resize-none focus:outline-transparent focus:ring-transparent w-full
                disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300"
                style={{
                    border: "1px white solid",
                    outline: "1px solid white",
                }} // Set border and outline to 'none'
                value={userMessage}
                disabled={loadingSession || messageSending}
                onChange={(e) => setuserMessage(e.target.value)}
                onKeyDown={handleKeyDownForSendMessage}
                rows={textareaRows}
                placeholder="Write a reply . . ."
                ref={textAreaRef}
            />
            {userMessage.length > 0 && (
                <button
                    className=" w-fit h-fit bg-action hover:bg-primary transition-all shrink-0 p-1.5 rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => {
                        handleSendMessage()
                    }}
                    disabled={loadingSession || messageSending}
                >
                    <PaperAirplaneIcon className="w-[23px] h-[23px] text-white" />

                </button>
            )}
        </div>
    )
}

export default ChatBottomBar