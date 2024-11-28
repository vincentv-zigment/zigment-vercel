"use client";

import { useRef } from "react";
import Image from "next/image";

// gsap
import { useGSAP } from "@gsap/react";
import gsap, { Power1 } from "gsap";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// components
import Title1 from "@/components/common/title/title1";
import { IoIosCheckmarkCircle } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

 

const items = [
  'Empathic Engagement',
  'No predefined templates',
  `Multilingual`,
  `Goal Oriented`
]


const Counter = ( ) => {

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      gsap.from(gsap.utils.toArray(`.count`), {
        textContent: 0,
        duration: 1.5,
        ease: Power1.easeIn,
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: ".counter__number",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="sec_space1">
      <div className="container" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-[20px]">
          <div className="col-md-5 col-lg-7 order-1 lg:order-2">
            <div className="bg-[#F6F0DF] relative rounded-[40px] max-w-full lg:max-w-[430px] xl:max-w-[530px] 2xl:max-w-[630px] ms-[unset] lg:ms-auto ps-[54px] pe-[45px] pt-[50px] hidden md:block">
              <div className="hidden md:block absolute start-10 lg:-start-[20px] xl:-start-[50px] 2xl:-start-[90px] -top-20 md:top-[20%] lg:top-[10%] w-full lg:w-[200px] 2xl:w-[256px] drop-shadow-lg  z-20">
                  <Image
                    width={300}
                    height={300}
                    src={`/assets/imgs/counter/sDC.svg`}
                    className="rounded-[30px]"
                    data-speed="0.95"
                    alt="shape"
                  />
              </div>
              <div className="hidden md:block absolute bottom-[20px] lg:bottom-[80px] -start-[20px] lg:-start-[80px] z-[2] drop-shadow-3 w-full lg:w-[300px] 2xl:w-[386px]">
                  <Image
                    width={386}
                    height={174}
                    src={`/assets/imgs/counter/z_web_IG-02.svg`}
                    className="rounded-[30px]"
                    data-speed="0.95"
                    alt="shape"
                  />
              </div>
              <div className="relative flex justify-center md:justify-end md:-right-8">
                  <Image width={1000} height={1000} className="w-[300px] h-auto object-contain"  src={'/assets/imgs/counter/z_web_IG_phone _mock_1.svg'} alt="shape" />
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-5 order-2 lg:order-1">
            <Title1
              text={`1-1 Conversations at scale`}
              className="pb-[15px] md:pb-[24px] has_fade_anim"
            />
              <div className="bg-[#F6F0DF] relative rounded-[40px] max-w-full lg:max-w-[430px] xl:max-w-[530px] 2xl:max-w-[630px] ms-[unset] lg:ms-auto ps-[54px] pe-[45px] pt-[50px] md:hidden my-10">
              <div className="hidden md:block absolute start-10 lg:-start-[20px] xl:-start-[50px] 2xl:-start-[90px] -top-20 md:top-[20%] lg:top-[10%] w-full lg:w-[200px] 2xl:w-[256px] drop-shadow-lg  z-20">
                  <Image
                    width={300}
                    height={300}
                    src={`/assets/imgs/counter/sDC.svg`}
                    className="rounded-[30px]"
                    data-speed="0.95"
                    alt="shape"
                  />
              </div>
              <div className="hidden md:block absolute bottom-[20px] lg:bottom-[80px] -start-[20px] lg:-start-[80px] z-[2] drop-shadow-3 w-full lg:w-[300px] 2xl:w-[386px]">
                  <Image
                    width={386}
                    height={174}
                    src={`/assets/imgs/counter/z_web_IG-02.svg`}
                    className="rounded-[30px]"
                    data-speed="0.95"
                    alt="shape"
                  />
              </div>
              <div className="relative flex justify-center md:justify-end md:-right-8">
                  <Image width={1000} height={1000} className="w-[300px] h-auto object-contain"  src={'/assets/imgs/counter/z_web_IG_phone _mock_1.svg'} alt="shape" />
              </div>
            </div>
            <div className="space-y-4 pb-[30px] md:pb-[55px] w-full has_fade_anim">
                <p className="  ">
                {`Zigment engages each customer individually, giving full attention to their specific needs.`}
                </p>
                <p className="">
                {`This continuous, hyper-personalized approach ensures conversions, deepen relationships, and sustainable growth.`}
                </p>
            </div>
          
              <div className="flex flex-col gap-[20px] counter__number">
                {items.map((item, i) => (
                  <div
                    key={`counter_item-${i}`}
                    className="flex flex-col justify-between max-w-full    gap-[20px] pb-[15px] xl:pb-[20px] border-b border-border last:pb-0 last:border-b-0 has_fade_anim"
                  >
                    <div className="flex items-center gap-4">
                      <IoIosCheckmarkCircle className="w-8 h-8 object-contain text-primary" />
                      
                      <h3 className="text-[12px] lg:text-[16px] xl:text-[20px] leading-none">
                        {item}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

            
              
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
