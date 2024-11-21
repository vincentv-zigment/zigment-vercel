import WhatsAppWidgetForm from "@/components/blocks/landing-page/marketing/tools/whatsppwidget/whatspp-widget-form";
import GetWidgetCode from "@/components/blocks/landing-page/marketing/tools/whatsppwidget/widget-code";
import WidgetCustomizer from "@/components/blocks/landing-page/marketing/tools/whatsppwidget/widget-customizer";
import { createContext, useContext, useState } from "react";
// import Header from '../components//Header';
import ZigmentBrandLabel from "@/components/blocks/landing-page/marketing/tools/urlshortner/zigment-brand-label";
import Widget from "@/components/blocks/landing-page/marketing/tools/whatsppwidget/whatsapp-widget";
import MetaTagsComponents from "@/components/common/meta-tags-components";
import Image from "next/image";

export interface WidgetDataI {
  countryCode: string;
  phoneNumber: string;
  message: string;
  logo: string;
  greetingMessage: string;
  backgroundColor: string;
  display: string;
  position: widget_position_values;
  size: widget_size_values;
  userName: string;
  placeholder: string;
  status: boolean;
}

export enum widget_size_values {
  normal = "normal",
  big = "big",
  small = "small",
}

export const widget_sizes = {
  [widget_size_values.normal]: "w-16 h-16",
  [widget_size_values.big]: "w-20 h-20",
  [widget_size_values.small]: "w-12 h-12",
};

export enum widget_position_values {
  right = "right",
  left = "left",
}

export interface ErrorI {
  phoneNumber: string | null;
  email: string | null;
  fetchError: string | null;
}

export const initError = {
  phoneNumber: null,
  email: null,
  fetchError:null
}


interface WhatsappWidgetContextProps {
  widgetData: WidgetDataI;
  setWidgetData: React.Dispatch<React.SetStateAction<WidgetDataI>>;
  errorState: ErrorI;
  setErrorState: React.Dispatch<React.SetStateAction<ErrorI>>;
}

const WhatsappWidgetContext = createContext<WhatsappWidgetContextProps | undefined>(undefined);

export const useWhatsappWidgetContext = () => {
  const context = useContext(WhatsappWidgetContext);

  if (!context) {
    throw new Error("useWhatsappWidget must be used within a WhatsappWidgetProvider");
  }

  return context;
};


const Whatsappwidget: React.FC = () => {
  const [widgetData, setWidgetData] = useState<WidgetDataI>({
    countryCode: "+91",
    phoneNumber: "",
    message: "Hi there 👋",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    greetingMessage: "How can I help you?",
    backgroundColor: "#25D366",
    display: "show",
    position: widget_position_values.right,
    size: widget_size_values.normal,
    userName: "Zigment AI",
    placeholder: "Type a message",
    status: true,
  });
  const [errorState, setErrorState] = useState<ErrorI>(initError);
 
 
  return (
    <>
      <MetaTagsComponents
        url="https://zigment.ai/tools/whatsapp-widget" 
        title="Whatsapp Widget Creator | Zigment.ai" 
        description="Create a WhatsApp Widget for your website in 3 simple steps. Generate more leads and sales with a WhatsApp Widget." 
        keywords="
         WhatsApp Widget, WhatsApp Widget Creator, WhatsApp Widget for Website, WhatsApp Widget for Business, Whatsapp Website Widget, WhatsApp Widget Generator, WhatsApp Widget Code, WhatsApp Widget for Website Free, WhatsApp Widget for Website HTML
        "
      />
      <WhatsappWidgetContext.Provider value={{ 
        widgetData, 
        setWidgetData,  
        errorState,  
        setErrorState 
      }}>
        
        <div className="flex flex-col items-center justify-center bg-gray-100 pt-[100px] relative" >
          <main className="flex flex-col p-4 md:p-6 lg:p-8 box-border rounded-md text-gray-800 leading-6 w-full max-w-screen-lg">
            {/* <Header /> */}
            <div className="flex   items-center justify-center space-x-3 my-4">
              <Image
                src={"https://cdn.zigment.ai/assets/WhatsApp.svg.webp"}
                alt="QR Code Generator Logo"
                width={48}
                height={48}
              />
              <span className="text-black text-4xl font-bold">
                Whatsapp Widget Creator
              </span>
            </div>
            <h1 className="text-2xl md:text-2xl lg:text-3xl p-6 md:p-8 lg:p-6 font-normal text-gray-600 flex justify-center">
              Generate More Leads and Sales in 3 Simple Steps
            </h1>
            <WhatsAppWidgetForm  />
            <WidgetCustomizer />
            <GetWidgetCode />
            <ZigmentBrandLabel />
            <Widget/>
          </main> 
        </div>
      </WhatsappWidgetContext.Provider>
    </>
  );
};

export default Whatsappwidget;
