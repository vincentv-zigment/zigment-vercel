/* eslint-disable @typescript-eslint/no-explicit-any */
import datasecurity from '@/assets/images/solutions/benefits/Data-Security.svg';
import customservices from '@/assets/images/solutions/benefits/Observability.png';
import aimodel from "@/assets/images/solutions/benefits/trust.png";
import line from "@/assets/images/solutions/hero/line-shape-1.svg";
import ContainerIVF from "@/components/blocks/landing-page/marketing/ivf/container-ivf";
import HeadingIVF from "@/components/blocks/landing-page/marketing/ivf/heading-ivf";
import SectionLayout from "@/components/blocks/landing-page/marketing/ivf/section-layout";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

const features = [
  {
    title: "Data Security",
    description: "We ensure that your proprietary data isn’t available in public domains while running LLMs. We also ensure that only the permitted data is shared with the users and nothing more. We are ADA CASA Tier 2, SOC 2 and ISO 27001 complaint.",
    img: aimodel,
  },
  {
    title: "Trustability",
    description: `Zigment Platform implements external guardrails to ensure that the output from the LLMs is not only free of any hallucinations but also compliant with your enterprise policies and benchmarks.`,
    img: customservices,
  },
  {
    title: "Observability",
    description: `Gain visibility into the underlying costs and ensure service reliability with a complete traceability of data flowing within the system. Realtime monitoring of all the systems both at macro and micro levels so that you are in the know all the time.`,
    img: datasecurity, 
  }
]

const Section6 = () => {
  const swiperRef = useRef<any>(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <SectionLayout className="bg-ivf-mainbg w-full overflow-x-hidden">
      <ContainerIVF className="text-center flex  justify-center">
        <div className="h-full   flex flex-col ">
          <HeadingIVF className="relative">
          Benefit from <br className="lg:hidden"/> Zigment’s <br />
          business-grade AI
          <Image src={line} alt='line' width={500} height={500} className={'absolute w-[60%] lg:w-[500px]  left-1/2 -translate-x-1/2 -bottom-4 lg:-bottom-7 '}/>
          </HeadingIVF>
          <div className="h-full hidden lg:flex items-center">
            <div className="h-fit items-center grid grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </div>
          </div>
          <div className=" lg:hidden w-screen p-10 overflow-hidden relative">
            <Swiper
              ref={swiperRef}
              modules={[]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={false}
            >
              {features.map((feature, index) => (
                <SwiperSlide key={index}>
                  <Feature {...feature} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button onClick={handlePrev} className="absolute rounded-full left-6 z-20 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2"><HiOutlineArrowLeft/></button>
            <button onClick={handleNext} className="absolute rounded-full right-6 z-20 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2"><HiOutlineArrowRight/></button>
          </div>
        </div>
      </ContainerIVF>
    </SectionLayout>
  );
};

export default Section6;

const Feature = ({ title, description, img }:{title: string; description: string; img: StaticImageData}) => {
  return (
  <div className="flex flex-col items-center h-full justify-center gap-2 p-8 bg-white">
    <div className='w-full h-24'>
        <Image width={400} height={400} className="w-auto mx-auto h-full object-contain" src={img} alt="img_1"/>
    </div>
    <h3 className="text-2xl font-semibold">
      {title}
    </h3>
    <p className='text-base'>{description}</p>
  </div>
  )
}