import HeroSection3 from "@/components/sections/common/hero-section3";
import dynamic from "next/dynamic";

// Dynamically import components
const MetaTagsComponents = dynamic(
  () => import("@/components/common/meta-tags-components")
);
const DemoAgentSection = dynamic(
  () => import("@/components/sections/marketing/demo/demo-agent-section")
);

const DemoPage = () => {
  return (
    <>
      <MetaTagsComponents
        title="Zigment Demo | Experience AI Sales Agents Across All Channels"
        description="Try Zigment's AI sales agents live across web chat, SMS, email & social channels. See how our platform delivers 35% higher conversions and 12x ROI in real-time."
        keywords="AI sales demo, sales automation demo, conversational AI trial, AI agent demo, multi-channel sales platform, sales engagement software, AI lead qualification demo, enterprise AI demo"
        url="https://www.zigment.ai/demo"
      />
      <HeroSection3
        title="Demo AI Agents"
        description="Interact with Zigment’s AI agents on various platforms to see how they can help you grow your business."
        // background="bg-white"
      >
        <DemoAgentSection />
      </HeroSection3>
    </>
  );
};

export default DemoPage;
