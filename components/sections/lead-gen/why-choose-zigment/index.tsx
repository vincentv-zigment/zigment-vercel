"use client";

import { useRef } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

// lib
 
const data = [
    {
      title: "Boost Conversion Rates by 20-40%",
      description: "Engage and nurture leads with intelligent, empathetic interactions that drive higher conversion rates and customer satisfaction",
      img:'/assets/imgs/lead-gen/why-choose-zigment/Vector(2).png'
    },
    {
      title: "Reduce Operational Costs",
      description: "Cut tele-calling hours by up to 90%, lowering your team’s costs while maintaining high engagement levels.",
      img:'/assets/imgs/lead-gen/why-choose-zigment/cost-kreduction_179727821.png'
    },
    {
      title: "Seamless CRM Integration",
      description: "Effortlessly pass qualified leads directly into your CRM, enabling streamlined follow-ups and personalized outreach.",
      img:'/assets/imgs/lead-gen/why-choose-zigment/Vector(3).png'
    }
  ];
 
const WhyChooseZigment = () => {

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className=" container   mx-auto rounded-theme p-10 md:sec_space1">
      <div className="  bg-sec_bg p-10 md:p-20 rounded-3xl " ref={containerRef}>
         <div className="grid grid-cols-1 lg:grid-cols-12  gap-10 md:gap-[30px] lg:gap-20 p-0     items-center ">
            <div className="col-span-1 xl:col-span-7 space-y-2" style={{color:'black'}}>
                <p className="text-2xl lg:text-3xl" style={{color:'black'}}>Why Choose</p>
                <p className="text-7xl lg:text-[120px] font-tropiline" style={{color:'black'}}>Zigment</p>
            </div>
            <div className="col-span-1 xl:col-span-5 ">
                {data.map((item, i) => {
                    return (
                        <div key={i} className="mb-10 flex gap-6 items-center">
                            <div className="">
                                <span className="w-16 h-16 inline-block rounded-full bg-theme p-3">

                                    <Image alt={item.title} width={100} height={100} className="w-full h-full object-contain" src={item.img} />
                                </span>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-[21px]">{item.title}</h3>
                                <p className="text-[14px] lg:text-[16px]">{item.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
         </div>
      </div>
    </section>
  );
};

export default WhyChooseZigment;
