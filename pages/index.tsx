import Image from "next/image";
import localFont from "next/font/local";
import EnterpriseGradeAI from "@/components/sections/landing-page/enterprise-grade-AI";
import FAQ from "@/components/sections/landing-page/FAQ";
import GoLive from "@/components/sections/landing-page/go-live";
import Integration from "@/components/sections/landing-page/integration";
import LeadConversion from "@/components/sections/landing-page/lead-conversion";
import MeetZig from "@/components/sections/landing-page/meet-zig";
import RealBusiness from "@/components/sections/landing-page/real-buisness";
import Service from "@/components/sections/landing-page/service";
import Testimonial from "@/components/sections/landing-page/testimonial";
import WorkflowsSection from "@/components/sections/landing-page/workflows-section";
import Counter from "@/components/sections/landing-page/zigment-counter";
import ZigmentHero from "@/components/sections/landing-page/zigment-hero";
import ZigmentRetention from "@/components/sections/landing-page/zigment-retention";
import SeoData from "@/components/tools/seo-data";
import Newsletter3 from "@/components/common/newsletter";
import Brand from "@/components/sections/landing-page/brand";
import Integration2 from "@/components/sections/landing-page/integration2";
import ChatBotV2 from "@/components/common/chatbot-v2";
 

export default function Home() {
  return (
    <>
   
    <main>
      <ZigmentHero/>
      <Brand />
      <Counter/>
      <Service/>
      <RealBusiness/>
      <LeadConversion/>
      <ZigmentRetention/>
      <Testimonial/>
      <MeetZig/>
      <EnterpriseGradeAI/>
      <WorkflowsSection/>
      {/* <Integration/> */}
      <Integration2/>
      <GoLive/>
      <FAQ/>
      <Newsletter3 />
    </main>
    </>
  );
}
