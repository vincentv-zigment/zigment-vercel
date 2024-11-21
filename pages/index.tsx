import MetaTagsComponents from "@/components/common/meta-tags-components";
import Newsletter3 from "@/components/common/newsletter";
import BlogSection from "@/components/sections/landing-page/blog-section";
import Brand from "@/components/sections/landing-page/brand";
import EnterpriseGradeAI from "@/components/sections/landing-page/enterprise-grade-AI";
import FAQ from "@/components/sections/landing-page/FAQ";
import GoLive from "@/components/sections/landing-page/go-live";
import Integration2 from "@/components/sections/landing-page/integration2";
import LeadConversion from "@/components/sections/landing-page/lead-conversion";
import MeetZig from "@/components/sections/landing-page/meet-zig";
import RealBusiness from "@/components/sections/landing-page/real-buisness";
import Service from "@/components/sections/landing-page/service";
import Testimonial from "@/components/sections/landing-page/testimonial";
import WorkflowsSection from "@/components/sections/landing-page/workflows-section";
import Counter from "@/components/sections/landing-page/zigment-counter";
import ZigmentHero from "@/components/sections/landing-page/zigment-hero";
import ZigmentRetention from "@/components/sections/landing-page/zigment-retention";

export default function Home() {
  return (
    <>
      <main>
        <MetaTagsComponents
          title="Zigment | AI Sales Engagement Platform | Boost Conversion by 35%"
          description="Scale your sales with Zigment's AI engagement platform. Automate personalized conversations across web, SMS, email & social channels. Get 12x ROI with AI-powered lead nurturing."
          keywords="AI sales platform, sales automation software, lead conversion AI, sales engagement platform, customer retention software, multi channel sales automation, AI sales assistant, enterprise sales AI"
          url="https://www.zigment.ai"
        />
        <ZigmentHero />
        <Brand />
        <Counter />
        <Service />
        <RealBusiness />
        <LeadConversion />
        <ZigmentRetention />
        <Testimonial />
        <MeetZig />
        <EnterpriseGradeAI />
        <WorkflowsSection />
        {/* <Integration/> */}
        <Integration2 />
        <GoLive />
        <FAQ />
        <BlogSection />
        {/* <BlogListingPage1/> */}
        <Newsletter3 />
      </main>
    </>
  );
}
