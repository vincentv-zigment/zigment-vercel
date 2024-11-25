"use client";

import Image from "next/image";
import { useRef } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

// lib
import TitleSection2 from "@/components/common/title-section/title-section2";
import { delayTime2 } from "@/lib/helper/delayTime";
 

const features = [
  {
    name: "No Flows Required",
    details: "Zigment AI is smart and capable of handling any kind of conversation",
    icon: "/assets/imgs/ctwa/icon-r-20.webp",
  },
  {
    name: "Multi-Lingual",
    details: "We cover Indian languages with english or native script",
    icon: "/assets/imgs/ctwa/icon-r-21.webp",
  },
  {
    name: "Omnichannel",
    details: "Can be deployed on Chat, SMS, Email, Phone Calls & Social Media",
    icon: "/assets/imgs/ctwa/icon-r-22.webp",
  },
  {
    name: "Conversion API",
    details: "Passes the ad performance data back for campaigns optimization",
    icon: "/assets/imgs/ctwa/icon-r-23.webp",

  },
  {
    name: "Quick deployment",
    details: "Go live in days instead of months. we usually deploy in 3-5 days",
    icon: "/assets/imgs/ctwa/icon-r-24.webp",
  },
  {
    name: "Fully Managed",
    details: "We manage the entire setup with zero effort from your team",
    icon: "/assets/imgs/ctwa/icon-r-25.webp",
  },
];

const WhatsappAIAgent = () => {

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className=" max-w-7xl mx-auto rounded-theme sec_space1">
      <div className="container bg-sec_bg p-10 md:p-20 rounded-3xl" ref={containerRef}>
        <TitleSection2
          title={`Zigment is the next generation of Whatsapp AI chat agents `}
          details={`Zigment brings the truly next-gen AI power to your CTWA campaigns`}
          titleClassName="max-w-6xl"
          detailsClassName="max-w-[695px]"
        />
          <div className="mt-[20px] md:mt-[40px] lg:mt-[70px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-[30px] mx-[20px] xl:mx-[70px] justify-center">
            {features.map((item, i) => (
              <div
                key={`feature_item-${i}`}
                className="has_fade_anim "
                data-delay={delayTime2(i + 1)}
              >
                <div className="group rounded-theme bg-white p-[15px] md:p-[50px] flex flex-col items-center text-center transition duration-300 ease-in-out hover:bg-theme h-full">
                  {item.icon && (
                    <div className="mb-[38px]">
                      <Image
                        width={75}
                        height={75}
                        src={item.icon}
                        alt="icon"
                      />
                    </div>
                  )}
                  <h3 className="mb-[19px] text-[24px]">{item.name}</h3>
                  <p className="group-hover:text-primary">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default WhatsappAIAgent;
