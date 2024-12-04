import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { Oval, ThreeDots } from "react-loader-spinner";
import MediaViewer from "../media-viewer";
import {
  convertToImageArray,
  getFirstUrl,
  isImageUrl
} from "./chat-bot-utils";
import { CompanyDataI } from "./ChatRightAway";
import Image from "next/image";

export type chatbot_messages_type = {
  role: "assistant" | "user";
  content: string;
  mime_type?: string;
  url?: string;
  _id: string;
  timestamp: number;
  is_safe?: boolean;
  caption?: string;
}

type Props = {
  loading: boolean;
  companyData: CompanyDataI;
  showTypingIndicator: boolean;
  messages: chatbot_messages_type[];
  open: boolean;
};

const ChatBotMessageSection = ({
  open,
  loading,
  companyData,
  showTypingIndicator,
  messages,
}: Props) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScrollWidth, setMaxScrollWidth] = useState(0);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, open, showTypingIndicator]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      setMaxScrollWidth(
        scrollContainerRef.current.scrollWidth -
          scrollContainerRef.current.clientWidth
      );
    }
  }, [messages]);

   

  const parseTextWithUrls = (text: string) => {
    const urlRegex =
      /(\bhttps?:\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer">
            {part}
          </a>
        );
      } else {
        return part;
      }
    });
  };
  // 690 - 1024 =

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      console.log(
        scrollContainerRef.current.scrollLeft + 334,
        scrollContainerRef.current.scrollWidth,
        "scrollContainerRef.current.scrollLeft"
      );
      if (
        scrollContainerRef.current.scrollLeft + 334 ===
        scrollContainerRef.current.scrollWidth
      ) {
        // It is the last slide on the left
        console.log("This is the last slide on the left.");
        scrollContainerRef.current.scrollBy({ left: -196, behavior: "smooth" });
        setScrollPosition(scrollContainerRef.current.scrollLeft - 196);
      } else {
        scrollContainerRef.current.scrollBy({ left: -248, behavior: "smooth" });
        setScrollPosition(scrollContainerRef.current.scrollLeft - 248);
      }
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 248, behavior: "smooth" });
      setScrollPosition(scrollContainerRef.current.scrollLeft + 248);
    }
  };

  return (
    <>
      {companyData && companyData.data && (
        <div
          className="p-5 font-sans space-y-1 overflow-y-scroll overflow-x-hidden h-full w-full customscroll"
          ref={chatContainerRef}
        >
          {loading ? (
            <Oval
              height={20}
              width={20}
              color={"white"}
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor={companyData.data.background_color}
              strokeWidth={5}
              strokeWidthSecondary={5}
            />
          ) : (
            <>
              <div className="w-full flex items-end gap-3 justify-start">
                <div className="w-8 h-8 shrink-0 bg-gray-100 flex items-center justify-center rounded-md overflow-hidden mb-2">
                  <Image width={100} height={100} src={'/zigment_thumbnail_logo_black.svg'} className="p-[6px]" alt="" />
                </div>
                <div className="w-full">
                  <p
                    className={`break-words px-4 py-4 [&_a]:text-white text-black bg-gray-100 text-sm w-3/4 rounded-lg text-left`}
                  >
                    {companyData.data.welcome_message}{" "}
                  </p>
                </div>
              </div>

              <div className="w-full flex items-start gap-2 justify-start">
                <div className="">
                  <div className="w-8 h-8 opacity-0 shrink-0 bg-gray-200 flex items-center justify-center rounded-full overflow-hidden">
                    <Image width={100} height={100}
                      src={companyData.data.logo_url}
                      className="p-1"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {messages.map((x, i) => {
            const image_url = isImageUrl(getFirstUrl(x.content));
            const result = image_url ? convertToImageArray(x.content) : null;

            return (
              <div key={`${i}_chat_message_ids`} className="chatbot-message-section">
                {x.role === "assistant" && (
                  <>
                    <div className="w-full flex items-end gap-3 justify-start">
                      <div className="w-8 h-8 shrink-0 bg-gray-100 flex items-center justify-center rounded-md overflow-hidden mb-2">
                        <Image width={100} height={100}
                          src={`/zigment_thumbnail_logo_black.svg`}
                          className="p-[6px]"
                          alt=""
                        />
                      </div>
                      <div className="w-full space-y-2">
                        {result ? (
                          <div className="w-full relative chatbot-message-section">
                            {scrollPosition > 0 && result.length > 0 && (
                              <button
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-[3px] rounded-full border-black bg-white drop-shadow-xl z-10"
                                onClick={handleScrollLeft}
                              >
                                <ChevronLeftIcon className="w-7 h-7" />
                              </button>
                            )}
                            <div
                              className="relative pr-10 w-full flex overflow-x-auto gap-2 hide-scrollbar"
                              ref={scrollContainerRef}
                            >
                              {result &&
                               result.map((item, index) => (
                                  <div
                                    key={index}
                                    className="flex flex-col items-center justify-start w-[240px] shrink-0 h-[240px] border rounded-lg overflow-hidden"
                                  >
                                    <Image 
                                      width={100}
                                      height={100}
                                      src={item}
                                      alt={item}
                                      className="w-full h-full object-cover"
                                    />
                                   
                                  </div>
                                ))}
                            </div>
                            {scrollPosition < maxScrollWidth &&
                              result.length && (
                                <button
                                  className="absolute right-[74px] top-1/2 -translate-y-1/2 p-[3px] rounded-full border-black bg-white drop-shadow-xl z-10"
                                  onClick={handleScrollRight}
                                >
                                  <ChevronRightIcon className="w-7 h-7" />
                                </button>
                              )}
                          </div>
                        )
                        : (
                        <div
                          className={`break-words ${
                            x.mime_type !== "audio/mp3" && "px-4 py-4"
                          } [&_a]:text-blue-600 text-black bg-gray-100 text-sm ${
                            image_url ? "" : ""
                          } w-3/4 rounded-lg text-left`}
                        >
                          {x.content.trim() !== "" ? (
                            <p className={`break-words chatbot-message-section`}>
                              {parseTextWithUrls(x.content)}
                            </p>
                          ) : (
                            <>
                            s
                            </>
                          )}
                        </div>
                        )
                      }

                      </div>
                    </div>

                    <div className="w-full flex items-start gap-2 justify-start">
                      <div className="">
                        <div className="w-8 h-8 opacity-0 shrink-0 bg-gray-200 flex items-center justify-center rounded-full overflow-hidden">
                          <Image width={100} height={100}
                            src={`/zigment_thumbnail_white.png`}
                            className="p-1"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {x.role === "user" && (
                  <>
                    <div className="w-full flex flex-col items-end py-3">
                      <div className="px-4 py-4 [&_a]:text-blue-600 text-black bg-gray-100 text-sm w-fit max-w-[75%] rounded-lg text-left chatbot-message-section">
                        {x.content.trim() !== "" ? (
                          <p className={`break-words chatbot-message-section`}>{x.content}</p>
                        ) : (
                          <>
                          {x.url && x.mime_type && x.is_safe && x.caption &&
                            
                            <MediaViewer
                              url={x.url}
                              mime_type={x.mime_type}
                              _id={x._id}
                              timestamp={x.timestamp}
                              is_safe={x.is_safe}
                              caption={x.caption}
                            />
                          }
                          </>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mt-1 ml-1">
                        {x && x.timestamp
                          ? moment.unix(x.timestamp).format("hh:mm A")
                          : ``}
                      </p>
                    </div>
                  </>
                )}
              </div>
            );
          })}

          {showTypingIndicator && (
            <>
              <div className="w-full flex items-end gap-3 justify-start">
                <div className="w-8 h-8 shrink-0 bg-gray-100 flex items-center justify-center rounded-md overflow-hidden mb-2">
                  <Image width={100} height={100}
                    src={`/zigment_thumbnail_logo_black.svg`}
                    className="p-1"
                    alt=""
                  />
                </div>
                <div className="">
                  <p
                    className={`break-words px-4 py-4 [&_a]:text-white text-black bg-gray-100 text-sm w-3/4 rounded-lg`}
                  >
                    <ThreeDots
                      height="10"
                      width="25"
                      radius="5"
                      color={"black"}
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  </p>
                </div>
              </div>

              <div className="w-full flex items-start gap-2 justify-start">
                <div className="">
                  <div className="w-8 h-8 opacity-0 shrink-0 bg-gray-200 flex items-center justify-center rounded-full overflow-hidden">
                    <Image width={100} height={100}
                      src={`/zigment_thumbnail_white.png`}
                      className="p-1"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBotMessageSection;
