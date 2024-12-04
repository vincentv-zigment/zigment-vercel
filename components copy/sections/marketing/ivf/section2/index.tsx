import React from 'react'
import Image from 'next/image'
import image6 from '@/assets/ivf/section2/image6.png'
import line from "@/assets/images/solutions/hero/line-shape-1.svg";
import SectionLayout from '@/components/blocks/landing-page/marketing/ivf/section-layout';
import ContainerIVF from '@/components/blocks/landing-page/marketing/ivf/container-ivf';
import HeadingIVF from '@/components/blocks/landing-page/marketing/ivf/heading-ivf';
import SubHeadingIVF from '@/components/blocks/landing-page/marketing/ivf/sub-heading-ivf';
 

const Section2 = () => {

  return (
    <SectionLayout className='bg-ivf-mainbg relative'>
        <ContainerIVF >
            <div className='w-full h-full  grid grid-cols-2'>
            
            <div className='col-span-2 lg:col-span-1 flex items-center text-center lg:text-left justify-center p-4 lg:p-8 h-full relative z-20'>
                <div className='space-y-4 lg:space-y-8'>
                    <HeadingIVF className='relative   '>
                    your 24/7 AI IVF <br className='lg:hidden'/>
                    sales agent
                    <Image src={line} alt='line' width={500} height={500} className={'absolute w-1/2 top-1/2 -translate-y-1/2 right-20  '}/>
                    </HeadingIVF>
                    <SubHeadingIVF>
                    Zigment is not just AI-powered—it’s AI-Native. 
                    </SubHeadingIVF>
                    <div className='space-y-4'>
                        <p>
                        Every patient is nurtured individually, across every channel—even social. 
                        </p>
                        <p>
                        It’s part tech, part magic, and 100% ready to transform your IVF clinic’s sales process.
                        </p>
                    </div>
                </div>

            </div>
            <div className='col-span-2 lg:col-span-1    '>
                    <Image src={image6} alt='IVF' width={500} height={500} className='w-full lg:w-auto object-contain h-auto lg:h-screen lg:absolute mx-auto -mb-8 lg:m-0 lg:bottom-0'/>
            </div>
            </div>
            
        </ContainerIVF>
    </SectionLayout>
  )
}

export default Section2