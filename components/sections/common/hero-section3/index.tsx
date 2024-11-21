 
import Image from "next/image";
import React, { ReactNode } from "react";
 
 
type Props = {
    children?: ReactNode;
    title?:string;
    description?:string;
    show_gradient_background?:boolean
}
 
export default function HeroSection3({children, title, description, }: Props) {
  
  return (
    <section className={`pt-[100px]    bg-[#F9F6ED] bg-cover`} style={{fontFamily: "colasta, sans-serif"}}>
      <div className="pt-[5px] xl:pt-[75px] 2xl:pt-[135px] sec_space_bottom1 !font-colasta container">
        <div className="flex gap-5 md:gap-[40px] flex-col md:flex-row  md:pb-[65px] xl:pb-[85px] 2xl:pb-[135px]">
            <h1
              className="text-[30px] md:text-[40px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] max-w-[420px] 2xl:max-w-[560px] has_fade_anim font-colasta"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
                fontFamily: "colasta, sans-serif"

              }}
            >
              {title}
            </h1>
            <div
              className="hidden md:block mt-[58px] xl:mt-[93px] 2xl:mt-[123px] has_fade_anim"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1
              }}
            >
              <Image
                alt="shape image"
                loading="lazy"
                width={331}
                height={42}
                decoding="async"
                data-nimg={1}
                className="rtl_y"
                src="/assets/imgs/shape/shape-s-56.png"
                style={{ color: "transparent", height: "auto" }}
              />
            </div>
            <div
              className="max-w-full md:max-w-[250px] lg:max-w-[410px] ms-auto mt-0 md:mt-[57px] lg:mt-[92px] xl:mt-[102px] 2xl:mt-[132px] has_fade_anim"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
              }}
            >
              <p 
                style={{fontFamily: "Instrument, sans-serif"}}
                className="tracking-wider font-medium text-primary"
              >
                {description}
              </p>
            </div>
        </div>

         <div>
            {children}
         </div>
      </div>
    </section>
  );
}
