"use client";

import Image from "next/image";
import { useRef, useState } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

// shadcn components
import { Button, buttonVariants } from "@/components/ui/button";

// components
import { cn } from "@/lib/utils";
import Link from "next/link";
import VideoModal from "@/components/tools/video-modal";

const contentArray = [
  {
    title: "Alpha-Intelligence",
    description: "Drive human-like interactions and workflow actions",
    logo: "/assets/imgs/hero/alpha_intelligence.svg",
  },
  {
    title: "Under 3 Seconds",
    description: "Instantly engage, nurture and drive sales motion",
    logo: "/assets/imgs/hero/under_3s.svg",
  },
  {
    title: "Everywhere",
    description: "Engage across all business touchpoints - web, social, sms",
    logo: "/assets/imgs/hero/everywhere.svg",
  },
];

const ZigmentHero = () => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [openModal, setOpenModal] = useState(false);
  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <>
      <section className="pt-[150px] lg:pt-[155px] xl:pt-[240px] pb-[50px] xl:pb-[100px] text-center lg:bg-[url('/assets/imgs/background/bg.png')] bg-no-repeat bg-[#F9F6ED] bg-cover ">
        <div className="container " ref={containerRef}>
          <div className="pb-[35px] md:pb-[50px] lg:pb-[100px]">
            <div className="max-w-3xl pb-[22px] mx-auto">
              <h2 className="text-[16px]   md:text-[36px] has_fade_anim" >
                <span className="text-gray-600 lg:text-black text-[16px]   md:text-[28px]">
                  {`The AI-Native Agentic Sales Platform`}
                </span>
              </h2>
            </div>
            <div className="py-10 lg:pt-0 lg:pb-[20px] has_fade_anim" data-delay="0.30">
              <div className="">
                <h1 className="text-[45px] md:text-[70px] lg:text-[50px] xl:text-[100px] leading-none font-black relative inline">
                  <Image
                    width={60}
                    height={70}
                    src="/assets/imgs/shape/shape-r-2.png"
                    className="max-w-[21px] md:max-w-[60px] absolute -top-[11px] md:-top-[145px] -left-[22px] md:-left-[50px] text-xs"
                    alt="shape"
                  />
                  <span className="lg:hidden">
                    {`Engagement, evolved for`}
                    <br className="hiiden lg:block" /> {` modern selling.`}
                  </span>
                  <span className="hidden lg:inline-block">
                    {`Engagement, evolved`}
                    <br className="hiiden lg:block" /> {`for modern selling.`}
                  </span>
                </h1>
              </div>
            </div>
            <div className="pb-[20px] md:pb-[43px] w-full max-w-5xl mx-auto">
              <p
                className=" text-[20px]  hidden lg:inline-block  text-primary leading-[1.36] has_fade_anim"
                data-delay="0.45"
              >
                {`Zigment nurtures every customer individually.  
                It works across all your conversation 
channels like web-chat, SMS, Email or even social. It’s part tech, part magic.`}
              </p>
              <p
                className=" text-[20px]  lg:hidden   text-primary leading-[1.36] has_fade_anim"
                data-delay="0.45"
              >
                {`Zigment nurtures every customer individually. Works across all  
channels.`}
              </p>
            </div>
            <div
              className="flex justify-center py-10 lg:py-0 gap-[20px] has_fade_anim"
              data-delay="0.60"
            >
              <Link
                href={"/contact-us"}
                className={cn(buttonVariants({ variant: "primary2" }))}
              >
                Talk to us
              </Link>

              <Button
                onClick={()=>{
                  setOpenModal(true);
                }}
                variant="outline2"
              >
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] xl:gap-[30px]">
            {contentArray.map((content, index) => {
              return (
                <div
                  key={index}
                  className={`
                  ${index === 0 && "bg-primary"}
                  ${index === 1 && "bg-white"}
                  ${index === 2 && "bg-[#C0AAFF]"}
                  w-full h-full rounded-[40px] p-8 grow mx-auto has_fade_anim
                `}
                >
                  <div className="w-full h-full flex flex-col justify-between items-center gap-8">
                    <h2
                      className={`text-[24px] ${
                        index === 0 && "!text-white"
                      } !leading-tight  `}
                    >
                      {content.title}
                    </h2>
                    <Image
                      alt="content.title"
                      width={50}
                      height={50}
                      src={content.logo}
                      className={`text-primary w-20 h-20 ${
                        index === 0 && "invert"
                      }`}
                    />
                    <p
                      className={`text-[18px] ${
                        index === 0 && "!text-white"
                      } !leading-tight ${index === 2 && "!text-primary"}`}
                    >
                      {content.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <VideoModal isOpen={openModal} close={()=>setOpenModal(false)} link="https://cdn.zigment.ai/assets/Zigment-ai-chat-v8.mp4"/>
      
    </>
  );
};

export default ZigmentHero;