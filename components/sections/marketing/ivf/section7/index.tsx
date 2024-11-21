import img2 from "@/assets/images/solutions/features/InstantEngagement.svg"
import line from "@/assets/images/solutions/hero/line-shape-1.svg"
import ContainerIVF from '@/components/blocks/landing-page/marketing/ivf/container-ivf'
import HeadingIVF from '@/components/blocks/landing-page/marketing/ivf/heading-ivf'
import SectionLayout from '@/components/blocks/landing-page/marketing/ivf/section-layout'
import SubHeadingIVF from '@/components/blocks/landing-page/marketing/ivf/sub-heading-ivf'
import Image from 'next/image'

const Section7 = () => {

  return (
    <SectionLayout className='  relative'>
        <ContainerIVF >
            <div className='w-full h-full  grid grid-cols-2'>
            
        <div className='col-span-2 lg:col-span-1 text-center lg:text-left '>
                <div className=' flex flex-col justify-between h-full'>
                    <HeadingIVF className='px-6 lg:p-0 relative'>
                    Get Started<br className='hidden lg:block' /> with Zigment.
                    <br className='hidden lg:block'/>
{` It’s`} Fast, Easy,<br className='hidden lg:block' /> and Comes<br className='lg:hidden'/> with Perks!
                    <Image src={line} alt='line' width={500} height={500} className={'absolute w-[60%] lg:w-[320px]  left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 top-[20px] lg:top-[36px] '}/>
                    </HeadingIVF>
                    <div className='space-y-4 py-8'>
                      <SubHeadingIVF>
                      {`Limited Offer:`}
                      </SubHeadingIVF>
                      <SubHeadingIVF className=' px-8 lg:p-0'>
                        
  {'Waive Your Set-Up Fee if You’re One of the First 10 to Sign Up.'}
                      </SubHeadingIVF>
                    </div>
                    <div className='space-y-4 px-8 lg:p-0'>
                        <p>
                        {`IVF businesses don’t have time to waste. With Zigment, you can deploy an AI-powered, empathetic lead management system in record time, with zero setup hassles. `}
                        </p>
                        <p>
                        {`Plus, if you're one of the first 10 businesses to sign up, we’ll waive the setup fee,  giving you an even smoother start.`}

                        </p>
                    </div>
                </div>

            </div>
            <div className='col-span-2 lg:col-span-1    '>
              <div className='w-full h-full  '>
              <Image
      width={400}
      height={400}
      // 24 X 4 X 2 = 
      className='w-auto h-full lg:h-[calc(100vh-192px)] object-contain  '
      alt='img'
      src={img2}
    />
              </div>
            </div>
            </div>
            
        </ContainerIVF>
    </SectionLayout>
  )
}

export default Section7