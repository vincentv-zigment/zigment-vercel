"use client";

import { useRef, useState } from "react";
import Image from "next/image";

// icons
import { FaStar } from "react-icons/fa6";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { markdownify } from "@/lib/helper/convert";

// shadcn components
import { Button } from "@/components/ui/button";

// components
import VideoModal from "@/components/tools/video-modal";
import { LuBrainCircuit } from "react-icons/lu";
import { MdOutlineTimer3 } from "react-icons/md";
import { RiGlobalLine } from "react-icons/ri";
import Signup from "@/components/signup";
import Signin from "@/components/signin";

type Props = {
  hero: {
    data: {
      title: string;
      sub_title: string;
      details: string;
      video: string;
      feature_1: {
        enable: boolean;
        title: string;
        image: string;
      };
      feature_2: {
        enable: boolean;
        title: string;
        text: string;
        image1: string;
        image2: string;
      };
      feature_3: {
        enable: boolean;
        title: string;
        text: string;
        image: string;
        rating: string;
      };
    };
  };
};

const contentArray = [
  {
    title: 'Alpha-Intelligence',
    description: 'Drive human-like interactions and workflow actions with Zigment AI agents',
    logo:LuBrainCircuit 
  },
  {
    title: 'Under 3 Seconds',
    description: 'Instantly engage, nurture and drive sales motion with your prospects',
    logo:MdOutlineTimer3 
  },
  {
    title: 'Everywhere',
    description: 'Engage across all your business touchpoints including Website & social media',
    logo:RiGlobalLine 

  }
];

const ZigmentHero = (   ) => {
 

  const [isOpen3, setIsOpen3] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  const closeDialog3 = () => {
    setIsOpen3(!isOpen3);
  };

  const closeDialog2 = () => {
    setIsOpen2(!isOpen2);
  };

  const closeDialog = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section className="pt-[150px] lg:pt-[155px] xl:pt-[240px] pb-[50px] xl:pb-[100px] text-center bg-[url('/assets/imgs/background/bg.png')] bg-no-repeat bg-[#F9F6ED] bg-cover">
        <div className="container" ref={containerRef}>
          <div className="pb-[35px] md:pb-[50px] lg:pb-[100px]">
            <div className="max-w-2xl pb-[22px] mx-auto">
              <h2 className="text-[18px] md:text-[36px] has_fade_anim">
                {`AI-Native Sales Engagement Platform`}
              </h2>
            </div>
            <div className="pb-[20px] has_fade_anim" data-delay="0.30">
              <div className="">
                <h1 className="text-[50px] md:text-[70px] lg:text-[50px] xl:text-[100px] leading-none font-black relative inline">
                  <Image
                    width={60}
                    height={70}
                    src="/assets/imgs/shape/shape-r-2.png"
                    className="max-w-[21px] md:max-w-[60px] absolute -top-[11px] md:-top-[28px] -left-[22px] md:-left-[50px] text-xs"
                    alt="shape"
                  />
                  {`Engagement, evolved`}<br className="hiiden lg:block"/> {`for modern selling.`}
                </h1>
              </div>
            </div>
            <div className="pb-[20px] md:pb-[43px] w-full max-w-4xl mx-auto">
              <p
                className="text-[16px] md:text-[20px] text-primary leading-[1.36] has_fade_anim"
                data-delay="0.45"
              >
                {`Zigment nurtures every customer individually.  It works across all your conversation 
channels like web-chat, SMS, Email or even social. It’s part tech, part magic.`}
              </p>
            </div>
            <div
              className="flex justify-center gap-[20px] has_fade_anim"
              data-delay="0.60"
            >
              <Button variant="primary2" onClick={() => setIsOpen3(true)}>
                Signup now
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-[#07203214]"
                onClick={() => setIsOpen(!isOpen)}
              >
                Watch demo
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] xl:gap-[30px]">
            {contentArray.map((content, index) => {
              return (
                <div key={index} className={`
                  ${index === 0 && 'bg-primary'}
                  ${index === 1 && 'bg-white'}
                  ${index === 2 && 'bg-[#C0AAFF]'}
                
                w-full  h-full rounded-[40px] p-8 grow mx-auto has_fade_anim`}>
                <div className="w-full h-full flex flex-col justify-between items-center gap-8">
                  <h2 className={`text-[24px] ${index === 0 && '!text-white'} !leading-tight  `}>
                    {content.title}
                  </h2>
                    <content.logo className={`text-primary w-12 h-12 ${index === 0 && '!text-white'}`} />
                  <p className={`text-[24px] ${index === 0 && '!text-white'} !leading-tight`}>
                    {content.description}
                  </p>
                   
                </div>
                  
              </div>
              )
            })}
           
          </div>
        </div>
      </section>
      <Signup isOpen={isOpen3} close={closeDialog3} open={closeDialog2} />
      <Signin isOpen={isOpen2} close={closeDialog2} open={closeDialog3} />
    </>
  );
};

export default ZigmentHero;