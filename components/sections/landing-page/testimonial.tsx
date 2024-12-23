"use client";

import { useRef } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

// shadcn components
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// components
import Title1 from "@/components/common/title/title1";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const items = [
  {
    company: "Trinkerr",
    image: "https://cdn.zigment.ai/assets/1710832034-trinkerr.png",
    text: "“We are seeing almost 40% uplift in our onboarding conversions. And this is happening with almost 70% lesser human effort” - Srini",
  },
  {
    company: "Nova IVF",
    image: "https://cdn.zigment.ai/assets/1711534703-nova-ivf.jpg",
    text: `With engagement across 10+ languages, Zigment improved the marketing conversion by 38% and lead qualification by almost 90%. `,
  },
  {
    company: "Godrej Properties",
    image: "/assets/imgs/testimonial/godrej-properties-logo.png",
    text: "Godrej Properties has deployed Zigment for its lead campaigns, outbound and print media. Zigment delivers a rich brand experience.",
  },
  {
    company: "Give.org",
    image: "/assets/imgs/testimonial/give-org.png",
    text: "Zigment automates the volunteer engagement and donation process for Give.org. Zigment is deployed on SMS and social media.",
  },
  {
    company: "TIE",
    image: "/assets/imgs/testimonial/tie-tgs.png",
    text: "Deployed as a ticketing agent and a full service concierge for the event attendees, Zigment has already provided an 8x ROI ",
  },
];

const Testimonial = () => {
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
        <Title1
          text={`Customer Success Stories`}
          className="w-full mx-auto text-center has_fade_anim"
        />
        <Carousel
          opts={{
            align: "start",
            duration: 20,
            slidesToScroll: 1,
            watchSlides: true,
            loop: true,
          }}
          className="w-full max-w-6xl mt-10 md:mt-20 mx-auto px-2 md:px-8"
        >
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                <div className="p-1">
                  <Card className="rounded-2xl h-[320px] bg-white">
                    <CardContent className="  p-10">
                      <div className="">
                        <Image
                          width={200}
                          height={200}
                          alt={item.text}
                          src={item.image}
                          className="w-auto h-8 object-contain"
                        />

                        <p className="text-[19px] 2xl:text-[22px] leading-[1.36] mt-[36px] ">
                          {item.text}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            variant={"outline"}
            className="hidden md:inline-block w-16 h-16 border-none"
          >
            <FaArrowLeft className="w-[20px] h-[20px]" />
          </CarouselPrevious>
          <CarouselNext
            variant={"outline"}
            className="w-16 h-16 border-none hidden md:inline-block"
          >
            <FaArrowRight className="w-[20px] h-[20px]" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
