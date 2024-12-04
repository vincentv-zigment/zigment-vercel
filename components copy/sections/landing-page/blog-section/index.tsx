"use client";

import Image from "next/image";
import { useRef } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

// shadcn components
import { buttonVariants } from "@/components/ui/button";

// components
import Title1 from "@/components/common/title/title1";
import { cn } from "@/lib/utils";
import Link from "next/link";

const MeetZig = () => {
  const containerRef = useRef<HTMLDivElement>(null!);
  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <>
      <section className="sec_space1">
      
        <div className="container" ref={containerRef}>
          <div className="grid grid-cols-1 lg:grid-cols-[6fr_5fr] gap-16 items-center">
            <div className="order-2 lg:order-1 hidden md:block">
              <Image
                width={1000}
                height={1000}
                src={`/assets/imgs/blog-section/worflow-img.png`}
                className="rounded-[40px] object-contain w-full h-full"
                alt="community-thumb"
                data-speed="1.2"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Title1
                text={`Workflows of the Future`}
                className="has_fade_anim pb-[15px] md:pb-[24px]"
              />
              <div className="order-2 lg:order-1 block md:hidden">
              <Image
                width={1000}
                height={1000}
                src={`/assets/imgs/blog-section/worflow-img.png`}
                className="rounded-[40px] object-contain w-full h-full"
                alt="community-thumb"
                data-speed="1.2"
              />
            </div>
              <div className="mt-10 lg:mt-0 lg:space-y-4">
                  <p className="has_fade_anim">{`Will AI take away our jobs? Will the way work is done see a large disruption? Way more than any other disruption has in the past?`}</p>
                  <p className="has_fade_anim">{`The answer is a bit nuanced, and it would help to look at what work means today and how it has evolved over the years. Let's look at how work gets done in the modern world. (By modern, I mean after computers entered the scene) 
`}</p>
                <p className="has_fade_anim">
                    {`In this essay, we'll keep our focus solely on the realm of information technology (IT), (software, data etc.) leaving out the evolution of work or the role of technology or robotics in heavy engineering or mechanical...`}
                </p>
              </div>
              

              
              <div className="py-[25px] lg:py-[45px] has_fade_anim">
                <Link href={'/workflows-of-the-future'} className={cn(buttonVariants({variant:'primary2'}))}>
                  Read The Full Article
                </Link>
                 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetZig;
