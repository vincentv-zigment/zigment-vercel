"use client";

import { useRef } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

// components
import Counter2 from "@/components/blocks/landing-page/counter2";
import TitleSection2 from "@/components/common/title-section/title-section2";

 

const RealBusiness = ( ) => {

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="sec_space1 ">
      <div className="container" ref={containerRef}>
        <div className="relative">
          {/* {shape_img && (
            <div className="absolute bottom-[30px] start-[calc(100%+98px)] w-[96px]">
              <Image
                width={96}
                height={96}
                src={shape_img}
                data-speed="0.8"
                alt="shape image"
              />
            </div>
          )} */}

          <TitleSection2
            title={`Real business impact`}
            details={`Zigment delivers real value in the most critical metrics that matter`}
            titleClassName="max-w-[700px]"
          />
          <div className="mt-[33px] xl:mt-[43px] 2xl:mt-[63px] has_fade_anim">
            <Counter2 counter={[
                {
                    number: 35,
                    unit:'%',
                    text:'Higher lead conversion in the sales workflows, where deployed '
                },
                {
                    number: 85,
                    unit:'%',
                    text:`Reduction in human resources while delivering the same throughput`
                }
                ,
                {
                    number: 12,
                    unit:'x',
                    text:`ROI for the projects where it has been deployed`
                }
            ]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealBusiness;
