import Footer from "@/components/common/layout/footer";
import Header from "@/components/common/layout/header";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import ScrollTop from "@/components/tools/scroll-top";
import { useRouter } from "next/router";
import ChatBotV2 from "../../chatbot-v2";
import { ChatBotTriggerProvider } from "../../chatbot-v2/ChatBotTriggerContext";

type Props = {
    children: React.ReactNode
}

const LandingPageLayout = ({children}: Props) => {
    const router = useRouter();

    if([
        "/tools/whatsppwidget",
        "/workflows-of-the-future",
      ].includes(router.pathname)) {
        return (
            <div>
                 <Header />
                    <div >
                      <div >
                        <div>
                          {children}
                        </div>
      
                        <Footer />
                      </div>
                    </div>
            </div>
        )
    }else{

        return (
          <ChatBotTriggerProvider>
            <div className="tropiline-bold root-layout" theme-setting="style-3">
                      <ScrollSmootherComponent />
                      <ScrollTop />
                      <Header />
                      <ChatBotV2
                          widget_id={(process.env.NEXT_PUBLIC_APP_ENV === "PROD") ? `zP9jqorUG3-${process.env.NEXT_PUBLIC_APP_ENV}` : "1704290722-5895681a-ab61-47b0-a6c5-a9cc7e92f355-1704290722"}
                          skip_cookie={false}
                          absolute
                        />
                      <div id="smooth-wrapper">
                        <div id="smooth-content">
                          <div>
                            {children}
                          </div>
        
                          <Footer />
                        </div>
                      </div>
                    </div>
          </ChatBotTriggerProvider>
        )
    }
}

export default LandingPageLayout