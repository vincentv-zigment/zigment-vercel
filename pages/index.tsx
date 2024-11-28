import dynamic from 'next/dynamic';
import MetaTagsComponents from "@/components/common/meta-tags-components";
import ZigmentHero from '@/components/sections/landing-page/zigment-hero';
const Newsletter3 = dynamic(() => import('@/components/common/newsletter'));
const Brand = dynamic(() => import('@/components/sections/landing-page/brand'));
const Counter = dynamic(() => import('@/components/sections/landing-page/zigment-counter'));
const Service = dynamic(() => import('@/components/sections/landing-page/service'));
const RealBusiness = dynamic(() => import('@/components/sections/landing-page/real-buisness'));
const LeadConversion = dynamic(() => import('@/components/sections/landing-page/lead-conversion'));
const ZigmentRetention = dynamic(() => import('@/components/sections/landing-page/zigment-retention'));
const Testimonial = dynamic(() => import('@/components/sections/landing-page/testimonial'));
const MeetZig = dynamic(() => import('@/components/sections/landing-page/meet-zig'));
const EnterpriseGradeAI = dynamic(() => import('@/components/sections/landing-page/enterprise-grade-AI'));
const WorkflowsSection = dynamic(() => import('@/components/sections/landing-page/workflows-section'));
const Integration2 = dynamic(() => import('@/components/sections/landing-page/integration2'));
const GoLive = dynamic(() => import('@/components/sections/landing-page/go-live'));
const FAQ = dynamic(() => import('@/components/sections/landing-page/FAQ'));
const BlogSection = dynamic(() => import('@/components/sections/landing-page/blog-section'));

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
        <Integration2 />
        <GoLive />
        <FAQ />
        <BlogSection />
        <Newsletter3 />
      </main>
    </>
  );
}
