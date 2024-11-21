import MetaTagsComponents from "@/components/common/meta-tags-components";
import ButtonIVF from "@/components/blocks/landing-page/marketing/ivf/button-ivf";
import Section1 from "@/components/sections/marketing/ivf/section1";
import Section2 from "@/components/sections/marketing/ivf/section2";
import Section3 from "@/components/sections/marketing/ivf/section3";
import Section4 from "@/components/sections/marketing/ivf/section4";
import Section5 from "@/components/sections/marketing/ivf/section5";
import Section6 from "@/components/sections/marketing/ivf/section6";
import Section7 from "@/components/sections/marketing/ivf/section7";
import SubHeadingIVF from "@/components/blocks/landing-page/marketing/ivf/sub-heading-ivf";
import ChatBotV2 from "@/components/common/chatbot-v2";
import { ChatBotTriggerProvider } from "@/components/common/chatbot-v2/ChatBotTriggerContext";

const IVF = () => {
  return (
    <div className="font-montserrat max-w-screen  [&_p]:text-sm [&_h1]:text-black [&_button]:text-black">
      <MetaTagsComponents
        title="AI Patient Engagement Platform for IVF Clinics | Boost Conversions by 35%"
        description="Transform your IVF clinic's patient journey with 24/7 AI engagement. Automate consultations, nurture leads, and provide personalized support across all channels. Get 12x ROI with Zigment."
        keywords="IVF patient engagement, fertility clinic automation, IVF lead nurturing, medical practice AI, fertility clinic conversion, healthcare AI automation, IVF consultation automation, patient journey optimization, healthcare lead management, medical practice automation"
        url="https://www.zigment.ai/lp/ivf"
      />
      <ChatBotTriggerProvider>
        <ChatBotV2 widget_id={"6eoqfc"} skip_cookie={false} />
      </ChatBotTriggerProvider>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <div className="w-full  bg-ivf-mainbg">
        <div className="grid grid-cols-2  mx-auto max-w-7xl py-8">
          <div className="col-span-2 text-center lg:text-left lg:col-span-1 space-y-2 p-8">
            <SubHeadingIVF className="">
              Ready to give your clinic the edge?
            </SubHeadingIVF>
            <p>
              Take the leap, transform your lead engagement, and watch your
              conversion rates soar.
            </p>
          </div>
          <div className="col-span-1 hidden lg:flex items-center justify-center">
            <ButtonIVF
              text="Book Demo"
              onClick={() => {
                window.open("https://calendly.com/sudhar-zigment", "_blank");
              }}
            />
          </div>
        </div>
      </div>
      <div
        className="bg-ivf-main z-20 text-[20px] h-[59px] flex items-center justify-center uppercase sticky bottom-0 font-bold text-center cursor-pointer lg:hidden"
        onClick={() => {
          window.open("https://calendly.com/sudhar-zigment", "_blank");
        }}
      >
        Book A Demo
      </div>
    </div>
  );
};

export default IVF;
