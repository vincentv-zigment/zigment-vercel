"use client";

import { useRef, useState } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

// shadcn components

// components
import Title1 from "@/components/common/title/title1";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
 

const items = [
  {
    image:'',
    title:'Secure',
    description:`Ensuring that your proprietary data isn’t shared on public domains. And only the permitted data is shared with the users and nothing more. `,
    logo:'/assets/imgs/enterprise-grade-ai/secure.svg' 
  },
  {
    image:'',
    title:'Compliant',
    description:`External guardrails to ensure that the AI output is free of hallucinations and also compliant with your enterprise policies and benchmarks.`,
    logo:'/assets/imgs/enterprise-grade-ai/compliant.svg' 

  }
  ,
  {
    image:'',
    title:'Transparent',
    description:`Gain visibility into the underlying costs and ensure service reliability with a full traceability of data flowing within the system in real-time.`,
    logo:'/assets/imgs/enterprise-grade-ai/transparent.svg' 
  }
]

const certifiaction_logos = [
  '/assets/imgs/enterprise-grade-ai/isooo.png',
  '/assets/imgs/enterprise-grade-ai/socc.png',
  '/assets/imgs/enterprise-grade-ai/hippa-logo.png'
]

const EnterpriseGradeAI = ( ) => {

  const containerRef = useRef<HTMLDivElement>(null!);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="sec_space1">
      <div className="container" ref={containerRef}>
        <Title1
          text={`Enterprise grade AI`}
          className="w-full mx-auto text-center has_fade_anim"
        />
              <div className="flex items-center gap-24 mx-auto justify-center mt-10 has_fade_anim">
                {certifiaction_logos.map((logo, i) => {
                  return (
                    <Image alt={logo} width={100} height={100} src={logo} key={i} className="w-12 h-12 md:h-32 md:w-32 inline-block" />
                  )
                })}
              </div>
        <div className="w-full p-2 relative mt-[51px] 2xl:mt-[61px] mx-auto has_fade_anim md:hidden">
          <div className="flex overflow-hidden">
            {items.map((item, i) => (
              <div
                key={`carousel_item-${i}`}
                className={`flex-shrink-0 w-full h-[360px] transition-transform duration-500 ${i === currentIndex ? 'block' : 'hidden'}`}
              >
                <div className="p-[25px] lg:p-[45px] bg-white border border-border rounded-theme h-full">
                  <div className="flex flex-col justify-center items-center gap-[20px]">
                    <div className="w-[84px] h-[84px] inline-flex items-center rounded-full justify-center bg-gray-100">
                      <Image alt={item.title} width={100} height={100} src={item.logo} className="text-primary w-16 h-16 object-fit"/>
                    </div>
                    <div>
                      <h2 className="text-[22px] leading-none">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-[19px] text-center 2xl:text-[22px] leading-[1.36] mt-[36px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex items-center justify-between mt-4">
            <Button onClick={handlePrev}><BsArrowLeft className="w-6 h-6"/></Button>
            <Button onClick={handleNext}><BsArrowRight  className="w-6 h-6"/></Button>
          </div>
        </div>
        <div
         
          className="w-full mt-[51px] 2xl:mt-[61px] mx-auto has_fade_anim hidden md:block"
        >
          <div className="gap-10 grid grid-cols-3">
             { items.map((item, i) => (
                <div
                  key={`testimonial_item-${i}`}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-[25px] lg:p-[45px] bg-white border border-border rounded-theme h-full">
                    <div className="flex flex-col justify-center items-center  gap-[20px]">
                      <div className="w-[84px] h-[84px] inline-flex items-center rounded-full justify-center bg-gray-100">
                        <Image alt={item.title} width={100} height={100} src={item.logo} className="text-primary w-16 h-16 object-fit"/>
                      </div>
                     
                      <div>
                        <h2 className="text-[22px] leading-none">
                          {item.title}
                        </h2>
                      
                      </div>
                    </div>
                    <p className="text-[19px] text-center 2xl:text-[22px] leading-[1.36] mt-[36px]">
                      {item.description}
                    </p>
                    
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseGradeAI;
