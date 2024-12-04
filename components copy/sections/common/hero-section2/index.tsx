"use client";

import Image from "next/image";
import { ReactNode, useRef } from "react";

// icons

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

// lib

// shadcn components

// components
 
type Props = {
  title?: ReactNode;
  description?: string;
  sub_title?: string;
  children?: ReactNode;
}

const HeroSection2 = ({
  title,
  description,
  sub_title,
  children,
}:Props) => {
 

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
 
  return (
    <>
      <section className={`pt-[150px] lg:pt-[155px] xl:pt-[240px] pb-[50px] xl:pb-[100px] text-center     $  bg-sec_bg`}>
        <div className="container" ref={containerRef}>
          <div className="pb-[35px] md:pb-[50px] lg:pb-[100px]">
            <div className="max-w-2xl pb-[22px] mx-auto">
              <h2 className="text-[18px] md:text-[36px] has_fade_anim">
                {sub_title}
              </h2>
            </div>
            <div className="pb-[20px] has_fade_anim" data-delay="0.30">
              <div className="">
                <h1 className="text-[50px] md:text-[70px] lg:text-[50px] xl:text-[80px] leading-none font-black relative inline">
                  <Image
                    width={60}
                    height={70}
                    src="/assets/imgs/shape/shape-r-2.png"
                    className="max-w-[21px] md:max-w-[60px] absolute -top-[11px] md:-top-[28px] -left-[22px] md:-left-[50px] text-xs"
                    alt="shape"
                  />
                  {title}
                </h1>
              </div>
            </div>
            {description
              &&

            <div className="pb-[20px] md:pb-[43px] w-full max-w-4xl mx-auto">
              <p
                className="text-[16px] md:text-[20px] text-primary leading-[1.36] has_fade_anim"
                data-delay="0.45"
              >
                {description}
              </p>
            </div>
            }
            
          </div>
          {children && 
          <div>
            {children}
          </div>
          }
          
        </div>
      </section>
 
    </>
  );
};

export default HeroSection2;