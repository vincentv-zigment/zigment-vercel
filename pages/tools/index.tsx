import MetaTagsComponents from "@/components/common/meta-tags-components";
import HeroSection3 from "@/components/sections/common/hero-section3";
import dynamic from "next/dynamic";
import Head from "next/head";

const ToolsSections = dynamic(() => import('@/components/sections/marketing/tools/tools-section'));

export type ToolsI = {
  id: string;
  link: string;
  name: string;
  seo_decsription: string;
  description: string;
  keywords: string[];
  sub_title: string;
  button_cta: string;
  logo?: string;
  logoText?: string;
  icon?: string; // Change icon type to string
};

type Props = {
  data: ToolsI[];
};

export const toolsData = [
  {
    id: "1",
    name: "Easy Copy AI",
    link: "/tools/easy-copy-extension",
    seo_decsription: "Free Website Copy Generator. Simple. Easy. Free Chrome Extension to generate copy from browser itself in 2 clicks. Get it now. Zigment AI powerful free tool.",
    description: "Simple. Easy. Free Chrome Extension to generate copy from browser itself.",
    keywords: ["Website Copy", "Copy Generator", "AI Copy Generator", "Chrome Extension"],
    sub_title: "Generate Copy in 2 Clicks",
    button_cta: "Try Now !",
    logo: "https://cdn.zigment.ai/assets/easy_copy_logo.png",
  },
  {
    id: "2",
    name: "QR Generator",
    link: "/tools/qr-code-generator/url",
    seo_decsription: "QR Generator is a straightforward tool that allows users to quickly generate QR codes from their browser with just two clicks.",
    description: "Create QR codes instantly for free!",
    keywords: ["QR", "QR Code", "QR Code Generator"],
    sub_title: "Generate QR in 2 Steps",
    button_cta: "Try Now !",
    logo: "https://cdn.zigment.ai/assets/1714733985-qr.svg",
  },
  {
    id: "3",
    name: "URL Shortner",
    link: "/tools/url-shortner",
    seo_decsription: "QR Generator is a straightforward tool that allows users to quickly generate QR codes from their browser with just two clicks.",
    description: "Shorten Any URLs in seconds",
    keywords: ["URL", "URL Shortner", "Shortner"],
    sub_title: "Shorten Any URLs in seconds",
    button_cta: "Try Now !",
    logoText: "https://zig.is/xO3xO5",
    icon: "TbUnlink",  // Use the icon name as a string
  },
  {
    id: "4",
    name: "WhatsApp Widget",
    link: "/tools/whatspp-widget",
    seo_decsription: "Effortlessly integrate WhatsApp messaging into your website with our easy-to-use WhatsApp Widget. Boost customer engagement and support with just a few clicks.",
    description: "Effortlessly integrate WhatsApp messaging into your website to enhance customer engagement and support.",
    keywords: ["WhatsApp Widget", "WhatsApp Integration", "Customer Support", "Website Widget"],
    sub_title: "Enhance Engagement with WhatsApp",
    button_cta: "Try Now!",
    logo: "https://cdn.zigment.ai/assets/WhatsApp.svg.webp",
  }
];

 

export async function getServerSideProps() {
  try {
    const getData = toolsData;

    return { props: { data: getData } };
  } catch (error) {
    console.error(error);
    return { props: { data: null } };
  }
}

const Index = ({ data }: Props) => {
  return (
    <>
    <MetaTagsComponents
      description="Get access to our free tools and resources for marketing and sales."
      keywords={`Free Tools, Marketing Tools, Sales Tools, Free Sales Tools, Free Marketing Tools,`
      }
      title="Zigment.ai - Free Sales & Marketing Tools"
      url="https://www.zigment.ai/tools"
    />
      <Head>
        <title>Zigment.ai - Free Sales & Marketing Tools</title>
        <meta
          name="description"
          content="Get access to our free tools and resources for marketing and sales."
        />
        <meta property="og:title" content="Zigment.ai - Free Tools" />
        <meta
          property="og:description"
          content="Get access to our free tools and resources for marketing and sales."
        />
      </Head>
      
      <HeroSection3 
        // background="bg-white"
        title={`Free Sales & Marketing Tools`} 
        description="Get access to our free tools and resources for marketing and sales.">
          <ToolsSections data={data} />
        </HeroSection3>
    </>
  );
};

export default Index;