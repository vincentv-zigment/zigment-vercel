"use client";

import { useRef } from "react";
import { GoGoal } from "react-icons/go";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import { BsWindow } from "react-icons/bs";

// lib
import { delayTime } from "@/lib/helper/delayTime";

// types

// components
import TitleSection2 from "@/components/common/title-section/title-section2";

import { LucideIcon, RadioTower } from "lucide-react";
import Image from "next/image";
import { IconType } from "react-icons/lib";
import { LuNetwork } from "react-icons/lu";

const contentArray = [
  {
    id:1,
    title: 'We study your workflows and requirements',
    description: '',
    logo:LuNetwork  
  },
  {
    id:2,
    title: 'Train the AI agents with your data and sales goals',
    description: '',
    logo:GoGoal
  },
  {
    id:3,
    title: 'Integrate with your CRM and other software',
    description: '',
    logo: BsWindow  
  },
  {
    id:4,
    title: 'Test the agent and the workflows and go live',
    description: '',
    logo:RadioTower 
  }
];

 

const GoLive = ( ) => {

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
        <div className="mb-[30px] md:mb-[63px] relative z-10">
          <TitleSection2
            title={`Go live in days`}
            details={``}
            titleClassName="max-w-[710px]"
            detailsClassName="max-w-[710px]"
          />
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {contentArray.map((item, i) => (
              <div
                key={`content_key_${item.id}`}
                className="has_fade_anim"
                data-delay={delayTime(i + 1)}
              >
                <ServiceCard2 service={item} />
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default GoLive;



// types

type ServiceProps = {
  service: {
    id:number;
    title: string;
    description: string;
    logo: IconType | LucideIcon;
  };
};

const ServiceCard2 = ({ service }: ServiceProps) => {
  return (
    <div className="px-[20px] py-[30px] lg:py-[20px] xl:px-[0px] xl:py-[40px] border border-border rounded-[40px] text-center h-full flex flex-col justify-between items-center">
      <div className="pb-[16px] md:pb-[35px] w-[60px] mx-auto relative">
        {service.id === 3 &&
        <span className="absolute font-bold text-black top-1/2 -translate-y-full left-1/2 -translate-x-1/2">CRM</span>
        }
        <service.logo className="text-primary w-16 h-16" />
      </div>
      <div>
          <div className="text-[16px] xl:text-[20px] p-8 mx-auto  ">
            {service.title}
          </div>
      </div>
        <div className="rounded-full p-0 flex justify-center items-center w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-transparent border border-border  ">
          <Image
            width={19}
            height={14}
            src="/assets/imgs/icon/arrow.png"
            className=" "
            alt="icon"
          />
        </div>
    </div>
  );
};


