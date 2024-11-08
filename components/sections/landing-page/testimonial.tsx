"use client";

import { useRef } from "react";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// shadcn components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card"

// components
import Title1 from "@/components/common/title/title1";
import RattingStar2 from "@/components/blocks/landing-page/ratting-stars";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  testimonial: {
    data: {
      title: string;
      items: {
        name: string;
        occupation: string;
        image: string;
        text: string;
        rating: number;
      }[];
    };
  };
};

const items  = [
   
  {
    company:'Trinkerr',
    image:'https://cdn.zigment.ai/assets/1710832034-trinkerr.png',
    text:'“We are seeing almost 40% uplift in our onboarding conversions. And this is happening with almost 70% lesser human effort” - Srini',
  },
  {
    company:'Nova IVF',
    image:'https://cdn.zigment.ai/assets/1711534703-nova-ivf.jpg',
    text:`With engagement across 10+ languages, Zigment improved the marketing conversion by 38% and lead qualification by almost 90%. `,
  },
  {
    company:'Godrej Properties',
    image:'/assets/imgs/testimonial/godrej-properties-logo.png',
    text:'Godrej Properties has deployed Zigment for its lead campaigns, outbound and print media. Zigment delivers a rich brand experience.',
  },
  {
    company:'Give.org',
    image:'/assets/imgs/testimonial/give-org.png',
    text:'Zigment automates the volunteer engagement and donation process for Give.org. Zigment is deployed on SMS and social media.',
  }
  ,
  {
    company:'TIE',
    image:'/assets/imgs/testimonial/tie-logo.png',
    text:'Deployed as a ticketing agent and a full service concierge for the event attendees, Zigment has already provided an 8x ROI ',
  }
]

const Testimonial = ( ) => {

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
      }}
      className="w-full max-w-6xl mt-20 mx-auto px-8"
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="rounded-2xl h-[400px]">
                <CardContent className="  p-10">
                  <div className="">
                    <Image 
                      width={200}
                      height={200}
                      alt={item.text} 
                      src={item.image} 
                      className="w-auto h-8 object-contain"
                    />
                    <h3 className="text-[20px] font-normal leading-none mt-8" style={{fontFamily:'"Instrument Sans", "sans-serif"'}}>
                      {item.company}
                    </h3>
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
      <CarouselPrevious variant={'outline'} className="w-16 h-16 border-none" >
        <FaArrowLeft className="w-[60px] h-[60px]"/>  
      </CarouselPrevious>
      <CarouselNext variant={'outline'} className="w-16 h-16 border-none"  >
        <FaArrowRight className="w-[60px] h-[60px]"/>  
      </CarouselNext>
    </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
