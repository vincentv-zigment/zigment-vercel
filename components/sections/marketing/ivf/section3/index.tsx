import line from "@/assets/images/solutions/hero/line-shape-1.svg"
import bgimage2 from '@/assets/ivf/section3/shutterstock_23253626071-Copy.png'
import bgimage from '@/assets/ivf/section3/shutterstock_23253626071.png'
import ContainerIVF from '@/components/blocks/landing-page/marketing/ivf/container-ivf'
import HeadingIVF from '@/components/blocks/landing-page/marketing/ivf/heading-ivf'
import SectionLayout from '@/components/blocks/landing-page/marketing/ivf/section-layout'
import SubHeadingIVF from '@/components/blocks/landing-page/marketing/ivf/sub-heading-ivf'
import Image from 'next/image'


const Section3 = () => {
  return (
    <SectionLayout className='relative bg-[#EAE5DB]'  >
        <Image alt='bg_image' src={bgimage} className='hidden lg:block w-auto object-contain h-full absolute top-0 left-0'/>
        <ContainerIVF className='grid grid-cols-12 px-0 lg:px-10 '>
            <div className='hidden lg:col-span-7  relative lg:flex items-center'>
              
            </div>
 
            <div className='col-span-12 lg:col-span-5 flex items-center text-center lg:text-left justify-center   h-full relative z-20'>
                <div className='space-y-8 px-8 lg:px-0'>
                    <HeadingIVF className='relative'>
                    Every Patient<br className='lg:hidden'/> Matters. <br className='lg:hidden'/>
Every Patient <br className='lg:hidden'/> Deserves <br className='lg:hidden'/> Attention
                      <Image src={line} alt='line' width={500} height={500} className={'absolute w-[45%] lg:w-[60%] left-1/2 -translate-x-1/2 -bottom-1 lg:-bottom-4 lg:left-0 lg:translate-x-0  '}/>
                    </HeadingIVF>
                    <SubHeadingIVF>
                    {`With Zigment, each patient gets the personalized attention they deserve.`}

                    </SubHeadingIVF>
                    <div>
                    {`Whether it’s guiding them through your website or engaging them via social channels, Zigment delivers seamless, tailored interactions that feel human—yet operate at AI speed.`}
                    </div>
                </div>

            </div>
            <div className='col-span-12 relative lg:hidden h-fit pt-8'>
              <Image 
                alt='bg_image' 
                src={bgimage2} 
                className='block h-auto w-full object-contain	  -mb-8     ' 
              />
            </div>
        </ContainerIVF>
    </SectionLayout>
  )
}

export default Section3