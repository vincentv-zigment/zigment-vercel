import hasFadeAnim from '@/lib/animation/hasFadeAnim';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { ReactNode, useRef } from 'react';

type Props = {
    children?: ReactNode;
    sub_heading?: string;
    title?: ReactNode;
    description?: string;
    background?: 'bg-white' | 'bg-[#F9F6ED]';
}

const HeroSection = ({
    sub_heading,
    title ,
    description ,
    children,
    background = 'bg-[#F9F6ED]'
}: Props) => { 

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
 
  return (
    <section className={`pt-[124px] lg:pt-[115px] xl:pt-[110px] pb-[50px] xl:pb-[100px] text-center bg-[url('/assets/imgs/background/bg.png')] bg-no-repeat ${background} bg-cover`}>
        <div className="container" ref={containerRef}>
          <div className="p-10 md:p-16 lg:p-24 rounded-2xl  " style={{
          background: "url(https://cdn.zigment.ai/assets/aboutusbg.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
            <div className="max-w-2xl pb-[22px] mx-auto">
              <h2 className="text-[18px] md:text-[36px] has_fade_anim">
                {sub_heading}
              </h2>
            </div>
            <div className="pb-[20px] has_fade_anim" data-delay="0.30">
              <div className="">
                <h1 className="text-[50px] md:text-[70px] lg:text-[50px] xl:text-[100px] leading-none font-black relative inline">
                  <Image
                    width={60}
                    height={70}
                    src="/assets/imgs/shape/shape-r-2.png"
                    className="max-w-[21px] md:max-w-[60px] absolute -top-[11px] md:-top-[28px] -left-[22px] md:-left-[50px] text-xs"
                    alt="shape"
                  />
                  {title}
                </h1>
              </div>
            </div>
            <div className="  w-full max-w-4xl mx-auto">
              <p
                className="text-[16px] md:text-[20px] text-primary leading-[1.36] has_fade_anim"
                data-delay="0.45"
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
  )
}

export default HeroSection