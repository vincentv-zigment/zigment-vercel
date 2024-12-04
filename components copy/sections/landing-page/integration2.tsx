"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

// shadcn components
import { buttonVariants } from "@/components/ui/button";

// components
import TitleSection2 from "@/components/common/title-section/title-section2";
import { cn } from "@/lib/utils";

 
const items = [  
  "https://cdn.zigment.ai/assets/Google_Drive_logo.png",
  "https://cdn.zigment.ai/assets/Instagram_logo_2016.svg",
  "https://cdn.zigment.ai/assets/facebook.png",
  "https://cdn.zigment.ai/assets/WhatsApp.svg.webp",
  "https://cdn.zigment.ai/assets/Salesforce.com_logo.svg",
  "https://cdn.zigment.ai/assets/hubspot.webp",
  "https://cdn.zigment.ai/assets/microsoft.svg",
  "https://cdn.zigment.ai/assets/freshdesk.png",
  "https://cdn.zigment.ai/assets/Amazon_Web_Services_Logo.svg",
  "https://cdn.zigment.ai/assets/Gmail_icon_(2020).svg"
  ];

const Integration2 = ( ) => {

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="py-[43px] md:py-[73px] xl:py-[100px]  bg-sec_bg">
      <div className="container" ref={containerRef}>
        <div className="relative z-[1]">
             

          <TitleSection2
            title={`Zigment fits right into your stack`}
            details={` Zigment is built with ecosystem integration in mind. Our platform is integrated with all the major software and platforms.`}
            titleClassName="max-w-3xl"
          />

          {items && items.length && (
            <div className="mt-[33px] xl:mt-[43px] 2xl:mt-[65px] mx-auto max-w-4xl flex flex-wrap justify-center gap-5 has_fade_anim ">
              {items.map((item, i) => (
                <div
                  key={`integration_item-${i}`}
                  className="w-[70px] xl:w-[100px] 2xl:w-[125px] rounded-[15px] 2xl:rounded-[30px] aspect-[100/98] bg-white flex justify-center items-center shadow-integration"
                >
                  <Image
                    width={58}
                    height={58}
                    className="w-[35px] lg:w-[45px] xl:w-[58px] h-[35px] lg:h-[45px] xl:h-[58px] object-contain"
                    src={item}
                    alt="app icon"
                  />
                </div>
              ))}
            </div>
          )}
            <div className="mt-[30px] xl:mt-[50px] 2xl:mt-[65px] flex justify-center has_fade_anim">
             
              
              <Link
                href={'/integrations'}
                className={cn(
                  buttonVariants({ variant: "primary",   })
                )}
              >
                <span >Explore Integrations</span>
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Integration2;
