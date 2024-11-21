/* eslint-disable @typescript-eslint/no-explicit-any */
import line from "@/assets/images/solutions/hero/line-shape-1.svg";
import Layer_1 from "@/assets/ivf/section5/Layer_1.png";
import Layer_2 from "@/assets/ivf/section5/Layer_2.png";
import Layer_3 from "@/assets/ivf/section5/Layer_3.png";
import ContainerIVF from "@/components/blocks/landing-page/marketing/ivf/container-ivf";
import HeadingIVF from "@/components/blocks/landing-page/marketing/ivf/heading-ivf";
import SectionLayout from "@/components/blocks/landing-page/marketing/ivf/section-layout";
import SubHeadingIVF from "@/components/blocks/landing-page/marketing/ivf/sub-heading-ivf";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

const features = [
  {
    title: "40% Reduction in CAC",
    description: "Compared to campaigns running without Zigment.",
    img: Layer_1,
  },
  {
    title: "9x More Qualified Leads",
    description: `Reduced 90% of the telecalling team's time.`,
    img: Layer_2,
  },
  {
    title: "Multilingual AI Agents",
    description: `Zigment’s agents conversed with patients in 10+ local languages.`,
    img: Layer_3, 
  }
]

const Section5 = () => {
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
    <SectionLayout className="  w-full overflow-x-hidden ">
      <ContainerIVF className="text-center flex  justify-center">
        <div className="h-full   flex flex-col justify-between gap-4">
          <HeadingIVF className="relative">
            How Nova IVF <br className="lg:hidden"/> Transformed <br />
            Patient <br className="lg:hidden"/> Engagement
            <Image src={line} alt='line' width={500} height={500} className={'absolute w-[40%] lg:w-[50%]  left-1/2 -translate-x-1/2 -bottom-2 lg:-bottom-9 '}/>
          </HeadingIVF>
          <SubHeadingIVF>Smarter Engagement,<br className="lg:hidden"/> Better Results</SubHeadingIVF>

          <div className="hidden lg:grid grid-cols-3 gap-4  lg:py-0">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
          <div className="lg:hidden w-screen  relative">

            <div className="p-10 w-full overflow-hidden relative">
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
            </div>
              <button onClick={handlePrev} className="absolute rounded-full left-4 z-20 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2"><HiOutlineArrowLeft/></button>
              <button onClick={handleNext} className="absolute rounded-full right-4 z-20 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2"><HiOutlineArrowRight/></button>
          </div>
          <p className="px-8">{`Zigment didn’t just save time and reduce costs—It made patient communication more`}<br/> {`personal, across multiple languages,  while driving better conversions.`}</p>
        </div>
      </ContainerIVF>
    </SectionLayout>
  );
};

export default Section5;

const Feature = ({ title, description, img }:{title: string; description: string; img: StaticImageData}) => {
  return (
  <div className="flex flex-col items-center justify-center gap-4 p-8 bg-ivf-mainbg">
    <Image className="w-20 h-20 object-contain" src={img} alt="img_1"/>
    <h3 className="text-2xl font-semibold">
      {title}
    </h3>
    <p>{description}</p>
  </div>
  )
}