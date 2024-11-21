"use client";

import { useRef } from "react";

// icons

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

const AboutUsHero = () => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <>
      <section className={`sec_space3 bg-sec_bg text-center `}>
        <div className="container pt-20 " ref={containerRef}>
          <div className="">
            <div className="max-w-2xl pb-[22px] mx-auto">
              <h2 className="text-[18px] md:text-[36px] has_fade_anim">
                {`About us`}
              </h2>
            </div>
            <div className="pb-[20px] has_fade_anim" data-delay="0.30">
              <div className="">
                <h1 className="text-[50px] md:text-[70px] lg:text-[40px] xl:text-[70px] leading-none font-black relative inline">
                  {`Building the most advanced conversational sales platform`}
                </h1>
              </div>
            </div>

            <div className=" w-full max-w-4xl mx-auto">
              <p
                className="text-[16px] md:text-[20px] text-primary leading-[1.36] has_fade_anim"
                data-delay="0.45"
              >
                {`We help companies shorten their lead cycle times and significantly reduce the human capital required in the process.`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsHero;
