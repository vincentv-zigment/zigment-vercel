import Image from 'next/image'
import React from 'react'
import line from "@/assets/images/solutions/hero/line-shape-1.svg";
import aimodel from "@/assets/images/solutions/benefits/trust.png"
import customservices from '@/assets/images/solutions/benefits/Observability.png'
import datasecurity from '@/assets/images/solutions/benefits/Data-Security.svg'

const benefits = [
    {
      "title": "Data Security",
      "description": "We ensure that your proprietary data isn’t available in public domains while running LLMs. We also ensure that only the permitted data is shared with the users and nothing more. We are ADA CASA Tier 2, SOC 2 and ISO 27001 complaint.",
      img:datasecurity
    },
    {
      "title": "Trustability",
      "description": "Zigment Platform implements external guardrails to ensure that the output from the LLMs is not only free of any hallucinations but also compliant with your enterprise policies and benchmarks.",
      img:aimodel
    },
    {
      "title": "Observability",
      "description": "Gain visibility into the underlying costs and ensure service reliability with a complete traceability of data flowing within the system. Realtime monitoring of all the systems both at macro and micro levels so that you are in the know all the time.",
      img:customservices
    }
  ]

const BenefitsComponent = () => {
  return (
    <div className="  w-full bg-white py-16 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

              <h2 className="text-4xl relative font-bold  text-center text-gray-900 sm:text-5xl   lg:text-5xl xl:text-5xl">Benefit from Zigment’s <br className='block md:hidden'/> business-grade AI
                <Image
                      src={line}
                      alt=""
                      className="absolute w-[300px] sm:w-[360px] md:w-[400px] lg:w-[400px] xl:w-[400px] inset-x-0 mx-auto -right-2 md:-right-2 lg:-right-[540px]  -bottom-6 md:-bottom-8 lg:-bottom-8"
                    />
              </h2>
              <div className="mt-20 grid grid-cols-1 md:grid-cols-3  gap-8">
                    {benefits.map((x)=>{
                      return (<>
                        <div className="">
                          <div className="w-40 h-40 mx-auto mb-8">
                            <Image alt={x.title} width={100} height={100} src={x.img} className="w-full h-full object-contain"/>
                          </div>
                          <h3 className="text-center text-xl font-semibold mb-4">
                            {x.title}
                          </h3>
                          <p className="text-center  text-gray-500">
                            {x.description}
                          </p>
                        </div>
                      </>)
                    })}
              </div>
            </div>
            {/* asd */}
          </div>
  )
}

export default BenefitsComponent