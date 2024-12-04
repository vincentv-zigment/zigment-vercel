"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// icons
import { FaPlay } from "react-icons/fa6";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

// lib
import { cn } from "@/lib/utils";

// types

// shadcn components
import { useChatBotTrigger } from "@/components/common/chatbot-v2/ChatBotTriggerContext";
import { buttonVariants } from "@/components/ui/button";

// components

const CTWAHero = () => {
  const { setTriggerMessage } = useChatBotTrigger();
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="bg-sec_bg pt-[120px] pb-[50px] md:pt-[125px] lg:pb-[120px] xl:pt-[230px]">
      <div className="container" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-y-[25px] md:gap-y-[50px]">
          <div className="col-span-1 xl:col-span-5">
            <h1 className="pb-[20px] md:pb-[30px] text-[35px] md:text-[50px] xl:text-[56px] !leading-[0.9] has_fade_anim">
              {`The Most Advanced 
AI-Powered Solution 
For CTWA Campaigns
`}
            </h1>
            <p
              className="pb-[20px] md:pb-[40px] has_fade_anim"
              data-delay="0.30"
            >
              {`Zigment delivers the next generation of truly AI-native chat agents that 
drive your whatsapp campaigns on Meta, massively profitable.
`}
            </p>
            <div
              className="pb-[20px] lg:pb-[35px] xl:pb-[50px] flex items-center gap-[20px] has_fade_anim"
              data-delay="0.45"
            >
              <Link
                href={"/contact-us"}
                className={cn(buttonVariants({ variant: "primary2" }))}
              >
                Get Started
              </Link>
              <div className="flex items-center gap-[10px] cursor-pointer">
                <div
                  className="w-[50px] md:w-[56px] h-[50px] md:h-[56px] flex justify-center items-center border md:border-[1.5px] border-primary hover:border-theme rounded-full transition-all duration-500 text-primary hover:text-theme"
                  onClick={() => {
                    setTriggerMessage({
                      open: true,
                      message: "Hi",
                    });
                  }}
                >
                  <FaPlay />
                </div>
                <p className="text-[16px] font-bold text-primary">
                  How it works
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 xl:col-span-7">
            <div className="relative grid gap-[10px] lg:gap-[20px] grid-cols-2 xl:grid-cols-[310px_300px] justify-end items-center lg:items-start max-w-full lg:max-w-[500px] xl:max-w-full pb-[30px] md:pb-0 z-[2]">
              <Image
                width={700}
                height={606}
                src={"/assets/imgs/ctwa/img-r-91.webp"}
                className="hidden lg:block absolute -top-[7px] start-[90px] -z-[2] rtl_y"
                alt="intro-thumb"
              />
              <Image
                width={310}
                height={505}
                src={`/assets/imgs/ctwa/hero-image4.png`}
                data-speed="0.8"
                alt="robot image"
              />
              <div className="flex flex-col gap-[10px] lg:gap-[20px] pt-[50px]">
                <Image
                  width={500}
                  height={500}
                  src={`/assets/imgs/ctwa/10-2.png`}
                  className="rounded-theme   object-contain  w-[600px] h-auto   "
                  style={{ width: "500px" }}
                  alt="robot image"
                  data-speed="1.1"
                />
                <Image
                  width={1000}
                  height={1000}
                  src={`/assets/imgs/ctwa/11-2.png`}
                  className="rounded-theme"
                  style={{
                    width: "500px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                  alt="robot image"
                  data-speed="1.1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTWAHero;
