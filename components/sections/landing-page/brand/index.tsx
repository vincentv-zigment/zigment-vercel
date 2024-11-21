"use client";

import { useRef } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

// lib
import { cn } from "@/lib/utils";

// components
import ImageAutoSlider from "@/components/tools/image-auto-slider";

 
 
const logoSrcs = [
  'https://cdn.zigment.ai/assets/1710830858-unigage_logo_small.png',
  'https://cdn.zigment.ai/assets/1balance.svg',
  'https://cdn.zigment.ai/assets/1710829319-vcnow.png',
  'https://cdn.zigment.ai/assets/1710831597-mamabefit.png',
  'https://cdn.zigment.ai/assets/1711534462-bs-logo-2x.webp',
  'https://cdn.zigment.ai/assets/1711534703-nova-ivf.jpg',
  'https://cdn.zigment.ai/assets/service_buddy_logo.webp',
  'https://cdn.zigment.ai/assets/1710830580-yezdi.png',
  'https://cdn.zigment.ai/assets/1710832034-trinkerr.png',
];

 
const Brand = ( ) => {

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div className={"sec_space1"}>
      <div className="container" ref={containerRef}>
        <p
          className={cn("text-center mb-[40px] has_fade_anim", ``)}
        >
          {`Zigment, trusted by some of the best companies`}
        </p>
        <div className="has_fade_anim">
          <ImageAutoSlider slides={logoSrcs} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
