import Image from 'next/image';
import excellence from '@/assets/images/aboutus/Excellence.svg';
import innovation from '@/assets/images/aboutus/Innovation.svg';
import integrity from '@/assets/images/aboutus/Integrity.svg';
import circle from '@/assets/images/solutions/circle.svg';
import square from '@/assets/images/solutions/square.svg';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import hasFadeAnim from '@/lib/animation/hasFadeAnim';


const values = [
  {
    title: "Innovation for Impact",
    content: "Every line of code we write is aimed at making a positive mark on the world.",
    img: innovation,
  },
  {
    title: "Integrity First",
    content: "Your trust is our foundation. We promise transparency, security, and respect for your data.",
    img: integrity,
  },
  {
    title: "Excellence as Standard",
    content: "Good isn't good enough. We strive for excellence in every solution we deliver.",
    img: excellence,
  },
];

const OurValuesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <div className="mx-4 md:mx-12 relative my-8 rounded-xl overflow-hidden bg-[#f2f7ff]  " ref={containerRef}>
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:pt-32 lg:pb-36">
        <div className="text-center mb-12 relative">
          <h2 className="text-lg font-semibold text-gray-400  tracking-normal">OUR VALUES</h2>
          <p className="mt-2 text-4xl font-bold max-w-4xl mx-auto text-gray-900 sm:text-5xl lg:text-6xl  tracking-normal font-tropiline has_fade_anim">
            The Zigment DNA
          </p>
          <p className="mx-auto mt-8 max-w-4xl  text-[20px]    text-primary leading-[1.36] has_fade_anim">
            At Zigment, we foster a culture where the drive for innovative solutions, uncompromising integrity, and a relentless pursuit of excellence shapes our approach to transforming the digital engagement landscape.
          </p>
          <Image
            src={square}
            alt="square"
            className="w-4 h-4 z-20 absolute text-brand-orange-main fill-brand-orange-main left-10 top-6 animate-moveUpDown"
            width={100}
            height={100}
            loading="lazy"
          />
        </div>
        <div className="w-full grid grid-cols-1 relative md:grid-cols-3">
          <Image
            src={square}
            alt="square"
            className="w-4 h-4 z-20 absolute text-brand-orange-main fill-brand-orange-main right-10 top-6 animate-moveUpDown"
            width={100}
            height={100}
            loading="lazy"
          />
          {values.map((value) => (
            <div className="px-5 pt-10 text-center flex flex-col items-center relative z-10 has_fade_anim" key={value.title}>
              <Image src={value.img} alt={value.title} className="h-24 object-fit" width={96} height={96} loading="lazy" />
              <h3 className="pt-9 pb-4 text-[20px] lg:text-[24px] leading-tight  ">{value.title}</h3>
              <p className="w-[280px]">{value.content}</p>
            </div>
          ))}
        </div>
        <Image
          src={circle}
          alt="circle"
          className="absolute w-64 h-64 -right-24 -bottom-24 -rotate-[60deg]"
          width={256}
          height={256}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default OurValuesSection;