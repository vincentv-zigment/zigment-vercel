"use client";

import Image from "next/image";
import { ReactNode, useRef } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

// lib
import TitleSection2 from "@/components/common/title-section/title-section2";
import { delayTime2 } from "@/lib/helper/delayTime";
 

const features = [
  {
    name: "No Flows Required",
    details: "Feed data  and set the objective. Agents adapt with every user",
    icon: "/assets/imgs/ctwa/icon-r-20.png",
  },
  {
    name: "Multi-Lingual",
    details: "We cover Indian languages with english or native script",
    icon: "/assets/imgs/ctwa/icon-r-21.png",
  },
  {
    name: "Omnichannel",
    details: "Can be deployed on Whatsapp, Web Chat, Insta, FB, SMS, email",
    icon: "/assets/imgs/ctwa/icon-r-22.png",
  },
  {
    name: "Conversion API",
    details: "Passes the ad performance data back for campaigns optimization",
    icon: "/assets/imgs/ctwa/icon-r-23-1.png",

  },
  {
    name: "Quick Deployment",
    details: "Go live in days instead of months. we usually deploy in 3-5 days",
    icon: "/assets/imgs/ctwa/icon-r-24.png",
  },
  {
    name: "Fully Managed",
    details: "We manage the entire setup with zero effort from your team",
    icon: "/assets/imgs/ctwa/icon-r-25.png",
  },
];

type sixCardsI = {
    name: string;
    details: string;
    icon: string;
}

type Props = {
    items?: sixCardsI[];
    title?:string;
    details?:ReactNode;
}

const SixCards = ({
    items = features,
    title = 'Zigment is the next generation of Whatsapp AI chat agents', 
    details = 'Zigment brings the truly next-gen AI power to your CTWA campaigns'
}:Props) => {

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className=" max-w-7xl mx-auto rounded-theme ">
      <div className="container bg-sec_bg p-10 md:p-20 rounded-3xl sec_space1" ref={containerRef}>
        <TitleSection2
          title={title}
          details={details}
          titleClassName="max-w-6xl"
          detailsClassName="max-w-[695px]"
        />
          <div className="mt-[20px] md:mt-[40px] lg:mt-[70px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-[30px] mx-[20px]cursor-pointer  xl:mx-[70px] justify-center">
            {items.map((item, i) => (
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

export default SixCards;
