"use client";

import { useRef } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

// lib
 
const data = [
    {
      title: "Lead-generation Integration",
      description: "Effortlessly integrate with your existing CRM and marketing tools for a unified lead management experience.",
      img:'/assets/imgs/lead-gen/conversion-flow/conversion_151818942.png'
    },
    {
      title: "WhatsApp Business API",
      description: "Reach customers on their preferred marketing channel effortlessly.",
      img:'/assets/imgs/lead-gen/conversion-flow/business.png'
    },
    {
      title: "Web Chat Agents",
      description: "Scale customer experiences without increasing your team size.",
      img:'/assets/imgs/lead-gen/conversion-flow/customer-service.png'
    },
    {
        title: "Click to WhatsApp Ads",
        description: "Convert leads to deals using our targeted CTWA campaigns.",
        img:'/assets/imgs/lead-gen/conversion-flow/Group2.png'
    },
    {
        title:'Drip Marketing',
        description:'Automate message sequences on WhatsApp to nurture leads over time.',
        img:'/assets/imgs/lead-gen/conversion-flow/change-management.png'
    }
  ];
 
const ConversionFlowSection = () => {

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className=" container mx-auto rounded-theme  " style={{width:'100vw', overflowX:'hidden'}} >
      {/* <Image className="absolute top-1/2 -translate-y-1/2 -right-1/3 w-full hidden lg:block" width={500} height={500} src={'/assets/imgs/lead-gen/hero/lead-gen-hero.png'} alt="background logo" /> */}
      <Image 
        className="absolute top-1/2 right-0 w-full lg:hidden" 
        width={500} 
        height={500} 
        src={'/assets/imgs/lead-gen/hero/lead-gen-hero2.png'} alt="background logo" />
      <div className="  p-10 xl:p-16 rounded-3xl " ref={containerRef}>
         <div className="grid grid-cols-1 lg:grid-cols-12  lg:gap-[30px]  gap-20 p-0 items-center ">
            <div className="col-span-1 lg:col-span-5 space-y-2 order-1 lg:order-1" style={{color:'black'}}>
                <p className="text-4xl sm:text-5xl xl:text-7xl font-bold font-tropiline" style={{color:'black'}}>Fuel Your Conversion Flow</p>
                <p className="text-lg lg:text-md xl:text-xl text-gray-500" >From first touch to final sale, these capabilities refine and elevate every step of your pipeline.
                </p>
            </div>
            <div className="col-span-1 lg:col-span-7 grid grid-cols-1 lg:grid-cols-2 gap-6 order-1 lg:order-2">
                {data.map((item, i) => {
                    return (
                        <div key={i} className="space-y-4">
                            <div className="">
                                <span className="w-14 h-14 inline-block rounded-full bg-theme p-3">
                                    <Image alt={item.title} width={100} height={100} className="w-full h-full object-contain" src={item.img} />
                                </span>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-[21px]">{item.title}</h3>
                                <p className="text-[15px]  ">{item.description}</p>
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

export default ConversionFlowSection;
