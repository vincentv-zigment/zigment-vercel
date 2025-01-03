"use client";

import Image from "next/image";
import { useRef, useState } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

// shadcn components
import { buttonVariants } from "@/components/ui/button";

// components
import VideoModal from "@/components/tools/video-modal";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";

const contentArray = [
  {
    title: "Natively AI",
    description: "A platform built with AI at its core and not just a feature",
    logo: "/assets/imgs/hero/alpha_intelligence.svg",
  },
  {
    title: "Built For Selling",
    description: "AI agents trained on the industry-best sales methodologies",
    logo: "/assets/imgs/performance-marketing/2.png",
  },
  {
    title: "Fully Managed",
    description: "Zigment is not just a software. It is human supervised AI  ",
    logo: "/assets/imgs/performance-marketing/3.png",
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
                  {`Welcome To Modern Selling.`}
                </span>
              </h2>
            </div>
            <div className="py-10 lg:pt-0 lg:pb-[20px] has_fade_anim" data-delay="0.30">
              <div className="">
                <h1 className="text-[40px] md:text-[70px] lg:text-[50px] xl:text-[100px] leading-none font-black relative inline">
                  <Image
                    width={60}
                    height={70}
                    src="/assets/imgs/shape/shape-r-2.png"
                    className="max-w-[21px] md:max-w-[60px] absolute -top-[11px] md:-top-[60px] lg:-top-[165px] -left-[22px] md:-left-[50px] lg:left-[80px] text-xs"
                    alt="shape"
                  />
                  <span className="lg:hidden">
                    {`Agentic AI Built For `}
                    <br className="hiiden lg:block" /> {` Performance Marketing
`}
                  </span>
                  <span className="hidden lg:inline-block">
                    {`Agentic AI Built For `}
                    <br className="hiiden lg:block" /> {`Performance Marketing
`}
                  </span>
                </h1>
              </div>
            </div>
            <div className="pb-[20px] md:pb-[43px] w-full max-w-5xl mx-auto">
              <p
                className=" text-[20px]  hidden lg:inline-block  text-primary leading-[1.36] has_fade_anim"
                data-delay="0.45"
              >
                {`Engage, qualify and nurture your leads to increase ROI `} <br/> from your campaigns by over 30%
              </p>
              <p
                className=" text-[20px]  lg:hidden   text-primary leading-[1.36] has_fade_anim"
                data-delay="0.45"
              >
                {`Engage, qualify and nurture your leads to increase ROI `} <br/> from your campaigns by over 30%
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

              <div className="flex items-center gap-[10px] cursor-pointer">
                                <div
                                  className="w-[50px] md:w-[56px] h-[50px] md:h-[56px] flex justify-center items-center border md:border-[1.5px] border-primary hover:border-theme rounded-full transition-all duration-500 text-primary hover:text-theme"
                                  onClick={() => {
                                    setOpenModal(true);
                                  }}
                                >
                                  <FaPlay />
                                </div>
                                <p className="text-[16px] font-bold text-primary"                     onClick={() => {
                                    setOpenModal(true);
                                  }}>
                                  Watch Demo
                                </p>
                              </div>
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