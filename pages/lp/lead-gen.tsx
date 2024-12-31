import MetaTagsComponents from "@/components/common/meta-tags-components";
import EnterpriseGradeAI from "@/components/sections/landing-page/enterprise-grade-AI";
import Testimonial from "@/components/sections/landing-page/testimonial";
import ConversionFlowSection from "@/components/sections/lead-gen/conversion-flow";
import Footer from "@/components/sections/lead-gen/footer";
import LeadGenHero from "@/components/sections/lead-gen/hero";
import WhyChooseZigment from "@/components/sections/lead-gen/why-choose-zigment";
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

export default function Home({}: Props) {
  return (
    <>
      <main
        className="bg-[#F0F2F4] "
        style={{ width: "100vw", overflowX: "hidden" }}
      >
        <MetaTagsComponents
          title="Zigment | AI Sales Engagement Platform | Boost Conversion by 35%"
          description="Scale your sales with Zigment's AI engagement platform. Automate personalized conversations across web, SMS, email & social channels. Get 12x ROI with AI-powered lead nurturing."
          keywords="AI sales platform, sales automation software, lead conversion AI, sales engagement platform, customer retention software, multi channel sales automation, AI sales assistant, enterprise sales AI"
          url="https://www.zigment.ai"
        />
        <LeadGenHero />
        <WhyChooseZigment />
        <ConversionFlowSection />
        <EnterpriseGradeAI />
        <Testimonial />
        <Footer />
        {/* <BlogSection data={data.blogs} /> */}
      </main>
    </>
  );
}
