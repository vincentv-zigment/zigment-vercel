import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


const TrustedBySection = () => {
  // Define an array of objects for the logos
  const logos = [
    { src: 'https://cdn.zigment.ai/assets/1710830858-unigage_logo_small.png', alt: 'Unigage' },
    { src: 'https://cdn.zigment.ai/assets/1balance.svg', alt: '1balance' },
    { src: 'https://cdn.zigment.ai/assets/1710829319-vcnow.png', alt: 'vcnow' },
    { src: 'https://cdn.zigment.ai/assets/1710831597-mamabefit.png', alt: 'mamabefit' },
    { src: 'https://cdn.zigment.ai/assets/1711534462-bs-logo-2x.webp', alt: 'bluestone' },
    { src: 'https://cdn.zigment.ai/assets/1711534703-nova-ivf.jpg', alt: 'Nova IVF' },
    { src: 'https://cdn.zigment.ai/assets/service_buddy_logo.webp', alt: 'ServiceBuddy' },
    { src: 'https://cdn.zigment.ai/assets/1710830580-yezdi.png', alt: 'yezdi' },
    { src: 'https://cdn.zigment.ai/assets/1710832034-trinkerr.png', alt: 'trinkerr' },
    { src: '/logos/godrej-properties-logo.png', alt: 'godrej-properties' },
    { src: '/logos/nuware-logo.png', alt: 'nuware' },
  ];

  return (
    <section className="bg-white py-4 md:py-16 lg:py-20 w-full overflow-hidden">
      <div className="relative mx-auto max-w-7xl w-full px-4 pb-12 sm:px-6 lg:px-8">
         
        <div className='w-full  h-20' >
        <Swiper
                loop={true}
                navigation={{
                  nextEl: ".next",
                  prevEl: ".prev",
                }}
                
                modules={[]}
                speed={3000}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                slidesPerView={3}
                className=""
              >
                {logos.map((x) => (
                  <SwiperSlide key={`logos_key_id_${x.alt}`} className='px-4  md:px-10 flex items-center justify-center'>
            
                          <Image
                            className="h-16 w-full md:w-[400px]  object-contain"
                            src={x.src}
                            width={200}
                            height={200}
                            alt={x.alt}
                          />
                       
                  </SwiperSlide>
                ))}
              </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
