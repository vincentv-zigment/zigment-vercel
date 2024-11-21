import MetaTagsComponents from "@/components/common/meta-tags-components";
import dynamic from "next/dynamic";
import React from "react";

const NavigationBar = dynamic(() => import('@/components/blocks/landing-page/marketing/tools/urlshortner/navigation-bar'))
const MainContent = dynamic(() => import('@/components/blocks/landing-page/marketing/tools/urlshortner/main-content'))
const ZigmentBrandLabel = dynamic(() => import('@/components/blocks/landing-page/marketing/tools/urlshortner/zigment-brand-label'))

const FreeUrlShortener: React.FC = () => {
  

  return (
      <>
        <MetaTagsComponents
          url="https://zigment.ai/tools/url-shortner"
          description="Use Zigment's free URL shortener to create short and memorable links in seconds. Enhance your workflow and manage your links efficiently. Try it now!"
          keywords="Free URL shortener, Zigment URL shortener, link management, QR code generator, shorten URLs, memorable links, link shortening tool"
          title="Free URL Shortener - Shorten and Manage Links with Zigment"
        />
        <div className="flex flex-col mt-[100px]  sm:p-10 md:p-10 items-center  text-[rgb(33,39,50)] font-[Proximanova, sans-serif] leading-5 w-full">
          <NavigationBar />
          <MainContent/>
          <ZigmentBrandLabel/>
        </div>
      </>
  );
};

export default FreeUrlShortener;