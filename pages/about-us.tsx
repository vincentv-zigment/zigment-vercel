import MetaTagsComponents from "@/components/common/meta-tags-components";
import AboutUsHero from "@/components/sections/landing-page/aboutus/hero-section";
import dynamic from "next/dynamic";

// Dynamically import components
const InnovationSection = dynamic(
  () => import("@/components/sections/marketing/about-us/innovation-section"),
  {}
);
const OurValuesSection = dynamic(
  () => import("@/components/sections/marketing/about-us/our-values-section"),
  {}
);
const PeopleSection = dynamic(
  () => import("@/components/sections/marketing/about-us/people-section"),
  {}
);

const AboutUs = () => {
  return (
    <>
      <MetaTagsComponents
        title="About Zigment | Building Advanced Conversational Sales Platform | Innovation Meets Empathy"
        description="Discover how Zigment transforms digital engagement with AI that communicates meaningfully. We help companies reduce lead cycles and human capital while maintaining genuine conversations."
        keywords="conversational sales platform, AI communication platform, sales automation company, digital engagement innovation, conversational AI technology, sales cycle optimization, AI empathy technology, automated customer engagement"
        url="https://www.zigment.ai/about"
      />
      <AboutUsHero />
      <InnovationSection />
      <OurValuesSection />
      <PeopleSection />
    </>
  );
};

export default AboutUs;
