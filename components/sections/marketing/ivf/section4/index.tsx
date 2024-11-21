import line from "@/assets/images/solutions/hero/line-shape-1.svg"
import image7 from '@/assets/ivf/section4/image7.png'
import ContainerIVF from '@/components/blocks/landing-page/marketing/ivf/container-ivf'
import HeadingIVF from '@/components/blocks/landing-page/marketing/ivf/heading-ivf'
import SectionLayout from '@/components/blocks/landing-page/marketing/ivf/section-layout'
import SubHeadingIVF from '@/components/blocks/landing-page/marketing/ivf/sub-heading-ivf'
import Image from 'next/image'
import { HiOutlineArrowRight } from 'react-icons/hi'


const steps = [
  `We train our AI model based on your previous conversations and communications.`, 
  `We test and fine-tune the agent to ensure optimal performance.`, 
  `We go live—fully integrated, fully operational, and ready to engage your patients.`
]

const Section4 = () => {

  return (
    <SectionLayout className='bg-ivf-mainbg relative'>
      <Image src={image7} alt='IVF' width={500} height={500} className='w-auto object-contain h-full hidden lg:block lg:h-screen lg:absolute mx-auto lg:right-0 '/>
        <ContainerIVF >
            <div className='w-full h-full  grid grid-cols-2'>
            
        <div className='col-span-2 lg:col-span-1 flex items-center text-center lg:text-left justify-center h-full relative z-20'>
                <div className='gap-4 flex flex-col justify-between'>
                  <div className='space-y-2'>

                    <HeadingIVF className=' relative'>
                    Implementation <br/>is Effortless.
                    <Image src={line} alt='line' width={500} height={500} className={'absolute w-[50%] lg:w-[55%]  left-1/2 -translate-x-1/2  -bottom-[5px] lg:-bottom-4 lg:left-0 lg:translate-x-0  '}/>
                    </HeadingIVF>
                    <HeadingIVF className=' '>
                    We DO THE HEAVY <br/> LIFTING FOR YOU
                    </HeadingIVF>
                  </div>
                    <SubHeadingIVF>
                    Go Live in 3 Easy Steps.<br /> No Code. No Sweat.
                    </SubHeadingIVF>
                    <div className='space-y-4'>
                        <p>
                        Zigment is built for seamless integration, and we make it effortless to get started.</p>
                        <div className='grid grid-cols-3 gap-2 lg:gap-4'>
                          {steps.map((step, index) => {
                            return (
                              <div key={`ivf_step_key_${index}`} className=' p-2 md:p-4 py-4 text-left bg-white/90 space-y-1 flex flex-col justify-between gap-2 '>
                                <div className='space-y-1'>
                                  <div className='font-extrabold text-[#FFDBAD] text-2xl'>
                                    Step {index + 1}
                                  </div>
                                  <div className='text-[10px] text-black'>
                                    {step}
                                  </div>
                                </div>
                                <HiOutlineArrowRight className='text-gray-200 w-8 h-8'/>
                              </div>
                            )
                          })}
                        </div>

                        <p>
                        No in-house tech team needed, no complicated rollouts just simple, fast deployment that lets you focus on running your clinic while we handle the setup.
                        </p>
                      
                    </div>
                </div>

            </div>
            <div className='col-span-2 lg:col-span-1    '>
            </div>
            </div>
            
        </ContainerIVF>
            <Image src={image7} alt='IVF' width={500} height={500} className='w-full object-contain h-full lg:hidden  lg:h-screen lg:absolute mx-auto lg:right-0 '/>
    </SectionLayout>
  )
}

export default Section4