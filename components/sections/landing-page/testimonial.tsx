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
} from "@/components/ui/carousel";

// components
import Title1 from "@/components/common/title/title1";
import RattingStar2 from "@/components/blocks/landing-page/ratting-stars";

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

const items:{
  name: string;
  occupation: string;
  image: string;
  text: string;
  rating: number;
}[] = [
  {
    name:'Naveen P',
    occupation:'COO, CureJoy',
    image:'https://cdn.zigment.ai/assets/curejoy_logo.jpeg',
    text:'We are seeing that our conversion rates of candidate response and also confirmed interviews improve significantly with ZigHR.',
    rating:5
  },
  {
    name:'Srini',
    occupation:'CMO, 1Balance',
    image:'https://cdn.zigment.ai/assets/1balance.svg',
    text:'We have practically eliminated the role involved in co-ordinating with the candidates. Saving a lot of man-hours!',
    rating:5
  },
  {
    name:'Caleb',
    occupation:'CEO, UniGage',
    image:'https://cdn.zigment.ai/assets/unigage_logo.jpeg',
    text:'I am blown over by the human-like interactions that ZigHR’s AI is able to have with the potential candidates. This is the future.',
    rating:5
  },
  {
    name:'Charry Maron',
    occupation:'Developer',
    image:'/images/testimonial/1.jpg',
    text:'Our unique and flexible pricing model is designed to allow any type of business to access high-end digital solutions, and to support them as they grow. Pay by usage, not by number of contacts.',
    rating:5
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
          text={`What our customers are saying`}
          className="w-full mx-auto text-center has_fade_anim"
        />
        <Carousel
          dir="ltr"
          opts={{
            duration: 60,
          }}
          className="w-full mt-[51px] 2xl:mt-[61px] mx-auto has_fade_anim"
        >
          <CarouselContent className="gap-[14px]">
            {items &&
              items.length &&
              items.map((item, i) => (
                <CarouselItem
                  key={`testimonial_item-${i}`}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-[25px] lg:p-[45px] bg-white border border-border rounded-theme">
                    <div className="flex items-center gap-[20px]">
                      <Avatar className="w-[63px] h-[63px]">
                        <AvatarImage src={item.image} alt="Avatar" />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <h2 className="text-[22px] leading-none">
                          {item.name}
                        </h2>
                        <small className="text-[14px] mt-[9px] leading-none">
                          {item.occupation}
                        </small>
                      </div>
                    </div>
                    <p className="text-[19px] 2xl:text-[22px] leading-[1.36] mt-[36px]">
                      {item.text}
                    </p>
                    <div className="mt-[23px] flex items-center gap-[4px]">
                      <RattingStar2 number={item.rating} />
                    </div>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
