"use client";

import Image from "next/image";
import { useRef } from "react";

// gsap
import TitleSection2 from "@/components/common/title-section/title-section2";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

 

const LeverageSection = () => {
  const items = [
    {
      name: "Zero Flows Required",
      details: "We just train the AI agents with your business data and set the objective you desire. No pre-scripting. Its magic!",
      icon: "/assets/imgs/ctwa/icon-r-18.webp"
    },
    {
      name: "Go Live in 3-5 days",
      details: "Your campaigns go live in days (and not months) with almost zero effort from your side. We do it for you!",
      icon: "/assets/imgs/ctwa/icon-r-19.webp"
    },
    {
      name: "Meta Tech Partner",
      details: "Zigment enables an easy WABA integration and funnel data passback to optimize your campaigns",
      icon: "/assets/imgs/ctwa/icon-r-18.webp"
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="sec_space1">
      <div className="container" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-y-[60px] justify-between has_fade_anim">
          <div className="col-span-1 lg:col-span-6 order-2 lg:order-1 ">
            <div className="relative max-w-[250px] md:max-w-[70%] lg:max-w-[350px] xl:max-w-[520px] mb-[20px] md:mb-0">
            <div className="relative max-w-full lg:max-w-[630px] h-auto lg:h-[75%] rounded-[40px] mx-auto   mt-[50px] md:mt-0 p-0 lg:p-4   hidden md:block">
              {/* Add a video here replacing the images */}
              <video
                width="300"
                height="auto"
                autoPlay
                muted
                className="w-full lg:w-[350px] mx-auto h-auto rounded-[40px]"
              >
                <source src="/assets/imgs/zigment-retention/Zigment-ai-chat-v8.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-5 ms-0 lg:ms-[30px] order-1 lg:order-2">
            <TitleSection2
              title={`Leverage the true power of AI with Zigment`}
              details={`Improve lead conversion & CAC from your CTWA campaigns by 40% with Zigment's AI agents on your Whatsapp Business account`}
              className="text-start"
              titleClassName="mx-0"
              detailsClassName="mx-0"
            />
            {items && items.length && (
              <div className="flex flex-col gap-[20px] md:gap-[38px] mt-[20px] md:mt-[34px] has_fade_anim">
                {items.map((item, i) => (
                  <div
                    key={`feature_item-${i}`}
                    className="grid grid-cols-[65px_auto] gap-[25px]"
                  >
                    {item.icon && (
                      <Image
                        width={65}
                        height={65}
                        src={item.icon}
                        alt="icon"
                      />
                    )}
                    <div>
                      <h3 className="text-[18px] md:text-[20px] mb-[6px]">
                        {item.name}
                      </h3>
                      <p>{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeverageSection;
