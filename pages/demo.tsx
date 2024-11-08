import HeroSection2 from '@/components/sections/common/hero-section2';
import HeroSection3 from '@/components/sections/common/hero-section3';
import dynamic from 'next/dynamic';

 
// Dynamically import components
const HeaderBanner = dynamic(() => import('@/components/common/marketing/header-banner'));
const MetaTagsComponents = dynamic(() => import('@/components/common/meta-tags-components'));
const DemoAgentSection = dynamic(() => import('@/components/sections/marketing/demo/demo-agent-section'));


const DemoPage = () => {
   
  return (
    <>
        <MetaTagsComponents
          url="https://www.zigment.ai/demo"
          title={
            "Demo AI Agents | Try out Zigment’s AI agents on various platforms"
          }
          description="Interact with Zigment’s AI agents on various platforms to see how they can help you grow your business."
          keywords={
            "AI agents, Zigment AI, Zigment, AI, AI agent, Zigment’s AI agent, Demo AI Agents, Demo AI Agents Zigment AI"
          }
        />
       
        <HeroSection3
        title="Demo AI Agents"
        description="Interact with Zigment’s AI agents on various platforms to see how they can help you grow your business."
        // background="bg-white"
      >

        <DemoAgentSection/>
      </HeroSection3>
         
       
    </>
  );
};

export default DemoPage;
 
