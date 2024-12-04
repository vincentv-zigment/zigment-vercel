import { useToast } from "@/hooks/useToast";
import { useWhatsappWidgetContext, widget_sizes } from "@/pages/tools/whatspp-widget";
import Image from "next/image";
import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import validator from "validator";

 


const WhatsappWidget= ( ) => {
  const {errorState, setErrorState,setWidgetData,widgetData} = useWhatsappWidgetContext()
  const [isChatboxVisible, setIsChatboxVisible] = useState(false);

  const {addToast} = useToast();
  const handleSendMessage = () => {
      if(!validator.isMobilePhone(widgetData.phoneNumber)) {
        setErrorState({
          ...errorState,
          phoneNumber: "Please enter a valid phone number"
        });
        addToast("error","Please enter a valid phone number", );

        return;
      }     
      const fullMessage = `${widgetData.message}`;
      const whatsappUrl = `https://wa.me/${widgetData.countryCode + widgetData.phoneNumber}?text=${encodeURIComponent(
        fullMessage
      )}`;
      window.open(whatsappUrl, "_blank");
  };

  const toggleChatbox = () => {
    setIsChatboxVisible(!isChatboxVisible);
  };

  const closeChatbox = () => {
    setIsChatboxVisible(false);
  };



   

  return (
    <>
    <div 
      style={{
        left:widgetData.position === "left" ? "16px" : "auto",
        right:widgetData.position === "right" ? "16px" : "auto",
        bottom:"16px",
        position:"fixed",
      }} 
      className={`fixed  ${ widget_sizes[widgetData.size]}`}
    >
      {!isChatboxVisible && (
        <button
          onClick={toggleChatbox}
          className={`relative mb-4    `}
          style={{
            backgroundColor: widgetData.backgroundColor,
            borderRadius: "50%",
            padding: "0.5rem",
          }}
        >
          <Image
            width={500}
            height={500}
            src={'https://cdn.zigment.ai/assets/WhatsApp.svg.webp'}
            alt="WhatsApp Widget"
            className="w-full h-full object-contain rounded-full"
          />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-600 rounded-full"></div>
        </button>
      )}
    </div>
      {isChatboxVisible && (
        <div
          className={`fixed ${widgetData.position === "right" ? "right-4" : "left-4"} bg-white border border-gray-300 rounded-lg shadow-gray-600 bottom-4 max-w-xs w-full`}
        >
          <div
            className={`flex items-center p-4 rounded-t-lg `}
            style={{ backgroundColor: widgetData.backgroundColor }}
          >
            <Image
              src={widgetData.logo}
              alt={`${widgetData.userName}'s profile picture`}
              width={40}
              height={40}
              className="rounded-full w-10 h-10"
            />
            <div className="ml-3">
              <p className="text-white font-bold">{widgetData.userName}</p>
              <p className="text-white text-sm">{widgetData.status}</p>
            </div>
            <button
              onClick={closeChatbox}
              className="absolute top-2 right-2 flex items-center justify-center w-10 h-10 text-white opacity-40 hover:opacity-70 transition-all duration-300 ease"
            >
              <IoClose />
            </button>
          </div>
          <div
            className="p-4 bg-gray-50 border-b border-gray-200"
            style={{
              backgroundImage: "url(/chatbg-image.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              maxHeight: "300px",
              overflowY: "auto",
            }}
          >
              <div   className="mb-3 space-y-2">
            
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 ">
                  <p className="break-all">
                    {widgetData.greetingMessage}{" "}
                    
                  </p>
                    <div className="text-gray-400 text-xs text-right">
                      16:29
                    </div>
                </div>
              </div>
          </div>
          <div className="flex items-center p-3">
            <input
              type="text"
              value={widgetData.message}
              onChange={(e) => setWidgetData({...widgetData, message:e.target.value})}
              placeholder={widgetData.placeholder}
              className="w-full p-3 rounded-lg shadow-sm outline-none border-none"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
            />
            <button onClick={handleSendMessage} className="ml-2 text-green-500">
              <IoMdSend size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsappWidget;
