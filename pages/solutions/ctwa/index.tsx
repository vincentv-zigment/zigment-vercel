import MetaTagsComponents from "@/components/common/meta-tags-components";
import Brand from "@/components/sections/landing-page/brand";
import EnterpriseGradeAI from "@/components/sections/landing-page/enterprise-grade-AI";
import GoLive from "@/components/sections/landing-page/go-live";
import Integration2 from "@/components/sections/landing-page/integration2";
import RealBusiness from "@/components/sections/landing-page/real-buisness";
import Testimonial from "@/components/sections/landing-page/testimonial";
import Counter from "@/components/sections/landing-page/zigment-counter";
import AutomatedMarketing from "@/components/sections/solutions/ctwa/automated-marketing";
import BlogSection from "@/components/sections/solutions/ctwa/blog-section";
import BuiltCampaign from "@/components/sections/solutions/ctwa/built-campaign";
import ChatbotFeature from "@/components/sections/solutions/ctwa/chatbot-feature";
import CTWAHero from '@/components/sections/solutions/ctwa/hero';
import LeverageSection from "@/components/sections/solutions/ctwa/leverage-section";
import WhatsappAIAgent from "@/components/sections/solutions/ctwa/whatsapp-ai-agent";
import { blogData } from "@/lib/blog/blog-data";
import { BlogI } from "@/lib/types/blog";

type Props = {
  data: {
    blogs: BlogI[];
  };
};

export async function getServerSideProps() {
  try {
    const getBlogData = await blogData();
    return {
      props: {
        data: {
          blogs: getBlogData,
        },
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { data: null } };
  }
}

export default function Home({data}:Props) {
  return (
    <>
      <main>
        <MetaTagsComponents
          title="Zigment | AI Sales Engagement Platform | Boost Conversion by 35%"
          description="Scale your sales with Zigment's AI engagement platform. Automate personalized conversations across web, SMS, email & social channels. Get 12x ROI with AI-powered lead nurturing."
          keywords="AI sales platform, sales automation software, lead conversion AI, sales engagement platform, customer retention software, multi channel sales automation, AI sales assistant, enterprise sales AI"
          url="https://www.zigment.ai"
        />
        <CTWAHero />
        <ChatbotFeature/>
        <LeverageSection/>
        <Brand />
        <WhatsappAIAgent/>
        <RealBusiness/>
        <Counter/>
        <Testimonial/>
        <AutomatedMarketing/>
        <EnterpriseGradeAI/>
        <BuiltCampaign/>
        <Integration2/>
        <GoLive/>
        <BlogSection data={data.blogs} />
      </main>
    </>
  );
}
