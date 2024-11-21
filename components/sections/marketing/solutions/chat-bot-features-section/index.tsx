import img from '@/assets/images/solutions/chatbotfeature/NotYourAverageChatbot.svg'
import circle from '@/assets/images/solutions/circle.svg'
import line from '@/assets/images/solutions/hero/line-shape-1.svg'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import Comparision from '../comparision'
import SolutionSectionHeading from '../solution-section-heading'





type Props = {
  chatbotFeatures: { id: number, name: string, description: string }[],
  title1?: string,
  title2?: string
}

export default function ChatBotFeaturesSection(
  {
    chatbotFeatures,
    title1 = 'Not Your',
    title2 = 'Average Chatbot'
  }: Props) {
  return (
    <div className="overflow-hidden  bg-white md:m-4 rounded-md  py-16  ">
      <div className="relative mx-auto max-w-xl  pr-6 lg:max-w-7xl lg:pr-8"> 
        <div className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative flex items-center justify-center mt-4 lg:mt-0" aria-hidden="true">

            <Image

              className=" w-[250px] sm:w-[400px] relative z-[10]"
              width={500}
              height={500}
              src={img}
              alt=""
            />
            <Image

              className="w-[150px] absolute -bottom-16 sm:left-7 left-1"
              width={500}
              height={500}
              src={circle}
              alt=""
            />
          </div>
          <div className="relative px-6 mt-5 sm:mt-0">
            <SolutionSectionHeading >
              <div>
                {title1}
              </div>


              <div className=' '>
                {title2}
                <Image src={line} alt='' className='w-[300px]  ' />
              </div>
            </SolutionSectionHeading>


            <dl className=" sm:mt-10 space-y-3 pb-8">
              {chatbotFeatures.map((item) => (
                <Comparision item={item} key={`feature_key_${item.id}`} />
              ))}
            </dl>
              <Button variant={'primary2'}   onClick={()=>{
                window.location.href = '/demo'
              }} >
              Watch It In Action
              </Button>
            
          </div>


        </div>
      </div>
    </div>
  )
}


