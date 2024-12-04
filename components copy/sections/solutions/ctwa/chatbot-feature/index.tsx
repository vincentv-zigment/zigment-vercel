"use client";

import { useRef } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

// lib
import TitleSection2 from "@/components/common/title-section/title-section2";
import { delayTime2 } from "@/lib/helper/delayTime";
import Image from "next/image";

// components

const items = [
  {
    title: "More Effort, Poor ROI",
    description: "Takes significant man-hours and builds legacy code to run and manage",
    image:'/assets/imgs/ctwa/chatbot-feature/poor-roi.png'
  },
  {
    title: "High Drop-offs",
    description: "Pre-scripted flows feel very robotic and transactional, failing to engage users",
    image:'/assets/imgs/ctwa/chatbot-feature/high-dropoffs2.png'

  },
  {
    title: "Poor Lead Quality",
    description: "Unengaged users result in low conversion intent and poor lead quality",
    image:'/assets/imgs/ctwa/chatbot-feature/poor-lead-quality.png'

  }
];


const ChatbotFeature = () => {

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="relative sec_space4">
       
      <div className="container" ref={containerRef}>
        <TitleSection2
          title={`Current flow-based chatbots are anything but AI and hardly affective`}
          details={<>{`Your CTWA campaigns aren’t successful because your current`} <br></br> solutions are stuck in the past</>}
          titleClassName="max-w-6xl"
          detailsClassName="max-w-[700px]"
        />
          <div className="mt-[20px] md:mt-[40px] lg:mt-[63px] relative grid grid-cols-1 md:grid-cols-3 gap-x-[60px] gap-y-[20px]  ">
            {items.map((item, i) => (
              <div
                key={`startup_process-${i}`}
                className="p-[25px] md:p-0 border border-border rounded-theme md:border-0  has_fade_anim flex flex-col items-center justify-center text-center"
                data-delay={delayTime2(i + 1)}
              >
                <span className=" bg-sec_bg rounded-full inline-block w-20 h-20 mb-[10px] md:mb-[20px] lg:mb-[42px]">
                  <Image src={item.image} width={100} height={100}  alt="image" className="w-full h-full object-contain"/>
                </span>
                <h3 className="text-[18px] md:text-[20px] lg:text-[24px] mb-[5px] md:mb-[10px] lg:mb-[18px] font-semibold  leading-[1.33]">
                  {item.title}
                </h3>
                <p className="text">{item.description}</p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default ChatbotFeature;
