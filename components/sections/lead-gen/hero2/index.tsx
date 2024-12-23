"use client";

import { useRef } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

// lib

// shadcn components

// components

 

 
const Hero2LeadGen = () => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className=" container w-screen overflow-x-hidden   ">
      <div className="   bg-white   md:p-20 rounded-3xl  sec_space1 " ref={containerRef} dir="ltr">
     

        <div className="grid grid-cols-1 lg:grid-cols-12  gap-[20px] md:gap-[30px] lg:gap-20 px-4 md:p-0   bg-white items-center ">
                  <div className="col-span-1 xl:col-span-4">
                    <h2 className="text-[34px] text-center lg:text-left lg:text-[22px] xl:text-[40px] leading-tight has_fade_anim" style={{color:'black'}}>
                    Deploy everywhere, qualify from anywhere.
                    </h2>
                    <p className="my-[20px] text-[16px] has_fade_anim text-center lg:text-left" style={{color:'black'}}>Qualify leads as soon as they enter your funnel and integrate seamlessly with your CRM. </p>
                    <p className="my-[20px] text-[16px] hidden lg:block has_fade_anim" style={{color:'black'}}>Integrate Zigment seamlessly across all your lead sources to maximize engagement and conversion.</p>
                   
                  </div>
                  <div className="col-span-1 xl:col-span-8 ">
                    <Image
                      width={1000}
                      height={1000}
                      src={'/assets/imgs/lead-gen/Frame-52-21.gif'}
                      className={`h-auto w-full object-contain hidden lg:block relative z-[2]  overflow-hidden    `}
                      alt="gallery image"
                    />
                    <Image
                      width={1000}
                      height={1000}
                      src={'/assets/imgs/lead-gen/Frame-95_1 1.gif'}
                      className={`h-auto w-full object-contain lg:hidden relative z-[2]  overflow-hidden    `}
                      alt="gallery image"
                    />
                    <p className="my-[20px] text-[16px]  lg:hidden has_fade_anim text-center lg:text-left" style={{color:'black'}}>Integrate Zigment seamlessly across all your lead sources to maximize engagement and conversion.</p>
                  </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2LeadGen;
