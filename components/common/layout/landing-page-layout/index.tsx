import Footer from "@/components/common/layout/footer";
import Header from "@/components/common/layout/header";
import ScrollTop from "@/components/tools/scroll-top";
import { useRouter } from "next/router";
import ChatBotV2 from "../../chatbot-v2";
import { ChatBotTriggerProvider } from "../../chatbot-v2/ChatBotTriggerContext";

type Props = {
  children: React.ReactNode;
};

const LandingPageLayout = ({ children }: Props) => {
  const router = useRouter();

  if (
    ["/tools/whatspp-widget","/demo" , "/tools/easy-copy-extension",  "/workflows-of-the-future", "/lp/ivf", "/demo"].includes(router.pathname) ||
    router.pathname.includes("/tools")
  ) {
    return (
      <ChatBotTriggerProvider>
        <div className="tropiline-bold root-layout" theme-setting="style-3">
         
          
          <ScrollTop />
          <Header />
           
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <div className=" ">{children}</div>

              <Footer />
            </div>
          </div>
        </div>
      </ChatBotTriggerProvider>
    );
  } else {
    return (
      <ChatBotTriggerProvider>
        <div className="tropiline-bold root-layout" theme-setting="style-3">
         
        
          
          <ScrollTop />
          <Header />
          <ChatBotV2
            widget_id={`zP9jqorUG3-${process.env.NEXT_PUBLIC_APP_ENV}`}
            skip_cookie={false}
            absolute
          />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <div className=" ">{children}</div>

              <Footer />
            </div>
          </div>
        </div>
      </ChatBotTriggerProvider>
    );
  }
};

export default LandingPageLayout;
