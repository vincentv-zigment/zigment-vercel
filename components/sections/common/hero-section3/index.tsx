 
import React, { ReactNode } from "react";
 
 
type Props = {
    children?: ReactNode;
    title?:string;
    description?:string;
    show_gradient_background?:boolean
}
 
export default function HeroSection3({children, title, description, show_gradient_background=true}: Props) {
  
  return (
    <section className={`pt-[100px]    bg-[#F9F6ED] bg-cover`} style={{fontFamily: "colasta, sans-serif"}}>
      <div className="pt-[5px] xl:pt-[75px] 2xl:pt-[135px] sec_space_bottom1 !font-colasta container">
        <div className="flex gap-5 md:gap-[40px] flex-col md:flex-row  pb-[65px] xl:pb-[85px] 2xl:pb-[135px]">
            <h1
              className="text-[30px] md:text-[40px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] max-w-[410px] 2xl:max-w-[520px] has_fade_anim font-colasta"
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
              <img
                alt="shape image"
                loading="lazy"
                width={331}
                height={42}
                decoding="async"
                data-nimg={1}
                className="rtl_y"
                srcSet="/_next/image?url=%2Fassets%2Fimgs%2Fshape%2Fshape-s-56.png&w=384&q=75 1x, /_next/image?url=%2Fassets%2Fimgs%2Fshape%2Fshape-s-56.png&w=750&q=75 2x"
                src="/_next/image?url=%2Fassets%2Fimgs%2Fshape%2Fshape-s-56.png&w=750&q=75"
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
