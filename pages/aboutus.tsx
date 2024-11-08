import HeaderBanner from "@/components/common/marketing/header-banner";
import HeroSection from "@/components/sections/common/hero-section";
import HeroSection2 from "@/components/sections/common/hero-section2";
import dynamic from "next/dynamic";

// Dynamically import components
const InnovationSection = dynamic(() => import('@/components/sections/marketing/about-us/innovation-section'), {  });
const OurValuesSection = dynamic(() => import('@/components/sections/marketing/about-us/our-values-section'), {  });
const PeopleSection = dynamic(() => import('@/components/sections/marketing/about-us/people-section'), {  });


type Props = {};


const AboutUs = (props: Props) => {
  return (
    <>
       
      <HeroSection2
        title="Building the most advanced conversational sales platform"
        description="We help companies shorten their lead cycle times and significantly reduce the human capital required in the process."
        sub_title="About us"
        background="bg-white"
      >

      <InnovationSection/>
      </HeroSection2>
      
      <OurValuesSection/>
      <PeopleSection/>
    </>
  );
};

export default AboutUs;