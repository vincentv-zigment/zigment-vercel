import MetaTagsComponents from '@/components/common/meta-tags-components';
import Brand from '@/components/sections/landing-page/brand';
import EnterpriseGradeAI from '@/components/sections/landing-page/enterprise-grade-AI';
import GoLive from '@/components/sections/landing-page/go-live';
import Integration2 from '@/components/sections/landing-page/integration2';
import RealBusiness from '@/components/sections/landing-page/real-buisness';
import WorkflowsSection, { workflow_features_type } from '@/components/sections/landing-page/workflows-section';
import ChatbotFeature, { chatbotfeatureI } from '@/components/sections/solutions/common/chatbot-feature';
import LeverageSection from '@/components/sections/solutions/common/leverage-section';
import SixCards from '@/components/sections/solutions/common/six-cards';
import TabsSection, { tabContentI } from '@/components/sections/solutions/common/tabs-section';
import Testimonial2 from '@/components/sections/solutions/common/testimonial';
import Counter from '@/components/sections/solutions/common/zigment-counter';
import BlogSection from '@/components/sections/solutions/ctwa/blog-section';
import PerformanceCounter from '@/components/sections/solutions/performance-marketing/counter';
import PerformanceHero from '@/components/sections/solutions/performance-marketing/hero';
import { blogData } from '@/lib/blog/blog-data';
import { BlogI } from '@/lib/types/blog';

const chatbot_features:chatbotfeatureI[] = [
    {
      title: "Meta Ad Campaigns",
      description: "AI agents that instantly engage every lead and qualify",
      image:'/assets/imgs/solutions/meta-campaigns.png'
    },
    {
      title: "Click-to-whatsapp",
      description: "Go live with CTWA campaigns in less than two days!",
      image:'/assets/imgs/solutions/ctwa.png'
  
    },
    {
      title: "Google Ads",
      description: "AI agents that help you focus only on the qualified leads",
      image:'/assets/imgs/solutions/google-ads.png'
  
    }
  ];
  
  const leverage_section_items = [
    {
      name: "Engage immediately",
      details: "Zigment’s AI agents Instantly engage, nurture and drive sales motion with your leads",
      icon: "/assets/imgs/ctwa/leverage-section/icon-r-18.png"
    },
    {
      name: "And Meaningfully",
      details: "Agents are trained to engage with empathy and truly help users in their journey ",
      icon: "/assets/imgs/ctwa/leverage-section/icon-r-19.png"
    },
    {
      name: "To Qualify & Nurture",
      details: "AI agents qualify all your leads so that you focus only on the most relevant prospects",
      icon: "/assets/imgs/ctwa/leverage-section/icon-r-20.png"
    }
  ];

  const benefits = [
    "Reduce operational costs",
    "Improve conversions",
    "Supporting 15+ languages",
    "Across all channels"
  ];

  const six_card_features = [
    {
      name: "Truly AI - No Flows",
      details: "Feed data  and set the objective. Agents adapt with every user",
      icon: "/assets/imgs/ctwa/icon-r-20.png",
    },
    {
      name: "15+ Languages",
      details: "We cover Indian languages with english or native script",
      icon: "/assets/imgs/ctwa/icon-r-21.png",
    },
    {
      name: "On Every Channel",
      details: "Can be deployed on Whatsapp, Web-chat, Insta, FB, SMS, email",
      icon: "/assets/imgs/ctwa/icon-r-22.png",
    },
    {
      name: "Meta & Google Integration",
      details: "Passes the ad performance data back for campaigns optimization",
      icon: "/assets/imgs/ctwa/icon-r-23-1.png",
  
    },
    {
      name: "Hassle-free Deployment",
      details: "Go live in days and not months, fully integrated with your CRM",
      icon: "/assets/imgs/ctwa/icon-r-24.png",
    },
    {
      name: "Fully Managed Solution",
      details: "We manage the entire setup with zero effort from your team",
      icon: "/assets/imgs/ctwa/icon-r-25.png",
    },
  ];

  const tab_content1:tabContentI[] = [
    {
      key: "tab1",
      title: "Realtime performance updates of your campaigns",
      content:
        "Get a macro view of your Ad campaigns and a micro view of all the user engagement at all times. Track progress and download reports any time.",
      image: "/assets/imgs/ctwa/automatic-marketing/dashboard1.png",
      name: "Campaign Performance",
      icon: "/assets/imgs/ctwa/icon-r-27.webp",
    },
    {
      key: "tab2",
      title: "Lead funnel status for each & every click",
      content:
        "Watch each lead pass though your sales funnel and progress in real time. Each conversation gets automatically tagged with the correct status update and raise alerts if required.",
      image: "/assets/imgs/ctwa/automatic-marketing/contact-page.png",
      name: "Sales Funnel Status",
      icon: "/assets/imgs/ctwa/icon-r-28.webp",
    },
    {
      key: "tab3",
      title: "Conversation summary & lead engagement advice",
      content:
        "Get a complete summary of every conversation added to your CRM or contact center software. Also get the relevant closure advice for your calling executives to build context and close better.",
      image: "/assets/imgs/ctwa/automatic-marketing/chat-summary.png",
      name: "Conversation Summary",
      icon: "/assets/imgs/ctwa/icon-r-29.webp",
    },
  ];

  const workflow_section_services:workflow_features_type[] = [
    {
      title: "End User Experience",
      sub_title:
        "AI agents’ behavior trained with your business personality and brand voice",
      image: "/assets/imgs/workflow-section/z_web_IG-04.png",
    },
    {
      title: "Realtime Dashboard",
      sub_title:
        "View every interaction or the macro metrics. Track and control every conversation",
      image: "/assets/imgs/workflow-section/z_web_IG-05.png",
    },
    {
      title: "Integrations",
      sub_title:
        "The platform is already integrated with most of the popular CRMs and marketing platforms",
      image: "/assets/imgs/workflow-section/z_web_IG-06.png",
    },
    {
        title: "Human Supervision",
        sub_title:
          "Every deployment with Zigment is monitored and supervised by our supervision team",
        image: "/assets/imgs/workflow-section/z_web_IG-06.png",
      },
   
  ]

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

const PerformanceMarketing = ({data}:Props) => {
  return (
    <main>
        <MetaTagsComponents
          title="Zigment | AI Sales Engagement Platform | Boost Conversion by 35%"
          description="Scale your sales with Zigment's AI engagement platform. Automate personalized conversations across web, SMS, email & social channels. Get 12x ROI with AI-powered lead nurturing."
          keywords="AI sales platform, sales automation software, lead conversion AI, sales engagement platform, customer retention software, multi channel sales automation, AI sales assistant, enterprise sales AI"
          url="https://www.zigment.ai"
        />
        <PerformanceHero />
        <ChatbotFeature 
            title='Increase Conversion & Reduce CAC'
            details={<>{`AI agents integrated with your Ad campaigns start engaging with your  `} <br></br> <span className="block">leads as soon as they enter the funnel</span></>} 
            items={chatbot_features}
        />
        
        <PerformanceCounter 
            title='Focus only on the leads that count'
            details1='Cut tele-calling hours by up to 90%, lowering your team’s costs while maintaining high engagement levels. '
            details2='Focusing on the most qualified leads means that your best sales executives are working on the highest ROI prospects'
            items={benefits}
            image3='/assets/imgs/lead-gen/circle_ain 1.gif'
        />
        <LeverageSection 
            title='Leverage the true power of AI Agents' 
            details='Not meaningfully engaging your leads immediately after they show interest results in lost leads'
            items={leverage_section_items}
        />
        <Brand/>
        <SixCards
            title='Zigment is AI-native and built for “selling”'
            details='Zigment brings the truly next-gen AI power to your marketing campaigns'
            items={six_card_features}
        />
        <RealBusiness/>
        <Counter/>
        <Testimonial2/>
        <TabsSection 
            tab_content={tab_content1} 
            title='Be in control of your campaigns all the time '
            details='View, manage and control all your campaigns in one single dashboard. '
        />
        <EnterpriseGradeAI/>
        <WorkflowsSection 
            title='Fully managed & custom(er) built campaigns'
            details={<>{`Every business operates differently! Zigment platform is built with customization in mind. This is `}
                      <strong>Service as a Software!</strong>{" "}</>}
            features={workflow_section_services}
        />
        <Integration2/>
        <GoLive/>
        <BlogSection data={data.blogs}/>
    </main>
  )
}

export default PerformanceMarketing