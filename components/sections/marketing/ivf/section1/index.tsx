import React from 'react' 
import hero from '@/assets/ivf/section1/hero.svg'
import herobg from '@/assets/ivf/section1/herobg.svg'
import Image from 'next/image' 
import line from "@/assets/images/solutions/hero/line-shape-1.svg";
import ContainerIVF from '@/components/blocks/landing-page/marketing/ivf/container-ivf';
import SectionLayout from '@/components/blocks/landing-page/marketing/ivf/section-layout';
import HeadingIVF from '@/components/blocks/landing-page/marketing/ivf/heading-ivf';
import SubHeadingIVF from '@/components/blocks/landing-page/marketing/ivf/sub-heading-ivf';
import ButtonIVF from '@/components/blocks/landing-page/marketing/ivf/button-ivf';


const Section1 = () => {
  return (
    <SectionLayout className='pt-12 lg:py-0 relative' >
        <ContainerIVF className='relative grid grid-cols-2 gap-8 '>
        <Image 
            width={500} 
            height={500} 
            src={'https://cdn.zigment.ai/assets/zigment_logo_latest.svg'} 
            alt='zigment_logo' 
            className='h-8 lg:h-10 w-auto object-contain absolute lg:left-0 top-4 lg:top-8 left-1/2 -translate-x-1/2 lg:translate-x-0 z-50' 
        />
         

            <div className='col-span-2 lg:col-span-1 py-10 lg:py-0 relative flex items-center'>
            <Image src={herobg} alt='IVF_bg' width={500} height={500} className='w-auto h-screen block  absolute   mt-24 lg:m-0 lg:-top-24 left-1/2 -translate-x-1/2  ' />
                <Image src={hero} alt='IVF' width={500} height={500} className='w-full h-auto relative z-20' />
            </div>
            <div className='col-span-2 lg:col-span-1 flex items-center text-center lg:text-left justify-center p-4 lg:p-8 h-full relative z-20'>
                <div className='space-y-8'>
                    <HeadingIVF className='relative'>
                        Talking <br className='hidden lg:block'/> 
                        About <br className='lg:hidden'/> IVF is <br/>
                        Uncomfortable
                        <Image src={line} alt='line' width={500} height={500} className='absolute -bottom-3 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-bottom-6 lg:left-auto w-8/12 lg:w-3/4'/>
                    </HeadingIVF>
                    <SubHeadingIVF>
                    Zigment makes it easier to start a difficult conversation.
                    </SubHeadingIVF>
                    <ButtonIVF className='hidden lg:inline-block' text='Book A Demo'  onClick={()=>{
                        window.open('https://calendly.com/sudhar-zigment', '_blank');
                    }} />
                </div>

            </div>
        </ContainerIVF>
        
    </SectionLayout>
  )
}

export default Section1