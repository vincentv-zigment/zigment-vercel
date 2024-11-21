import hasFadeAnim from '@/lib/animation/hasFadeAnim';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'


const InnovationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <div className="  " ref={containerRef}>
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8 space-y-4 md:space-y-10">
          <div className="text-center has_fade_anim">
            <p className="mt-1 text-4xl font-bold font-tropiline  text-gray-900 sm:text-5xl lg:text-6xl  ">
              Innovation Meets Empathy
            </p>
            <p className="relative text-center text-xl font-sans text-gray-500  mt-4 py-4 max-w-3xl mx-auto">
             {` At Zigment, we're not just tech enthusiasts; we're people
              enthusiasts. Our journey began with a simple observation: in a
              world buzzing with digital chatter, genuine conversation was
              becoming a lost art. So, we set out to change that.`}
            </p>
          </div>

          <div className='space-y-4 md:space-y-10 has_fade_anim'>
            <div className="overflow-hidden   rounded-md    ">
              <div className="relative mx-auto max-w-xl    lg:max-w-7xl mt-4 ">
                <div className="mx-auto  ">
                  <div className="text-2xl text-center font-bold  text-gray-900 sm:text-5xl">
                    <div className="text-lg font-medium text-gray-500 uppercase   " >
                      Our Mission
                    </div>

                    <div className="relative inline-block font-tropiline max-w-3xl w-full text-2xl ">
                      Conversation with a Purpose
                    </div>
                  </div>
                </div>

                <div className="relative lg:items-center lg:gap-8  ">
                  <div
                    className="relative !font-sans text-center text-lg text-gray-500  mt-4 py-4 max-w-3xl mx-auto"
                    aria-hidden="true"
                  >
                    {`We believe every interaction is an opportunity to make a
                    difference. That's why Zigment is dedicated to crafting AI
                    that doesn't just talk but communicates. Our mission is to
                    empower businesses, coaches, creators, and fundraisers to
                    connect with their audience meaningfully, creating
                    relationships that lead to growth and success.`}
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden   rounded-md    has_fade_anim ">
              <div className="relative mx-auto max-w-xl    lg:max-w-7xl  ">
                <div className="mx-auto  ">
                  <div className="text-2xl text-center font-bold  text-gray-900 sm:text-5xl">
                    <div className="text-lg font-medium text-gray-500 uppercase " >
                      Our Vision
                    </div>

                    <div className="relative inline-block max-w-3xl font-tropiline w-full text-2xl  ">
                      A World Where No Message Goes Unheard
                    </div>
                  </div>
                </div>

                <div className="relative lg:items-center lg:gap-8  ">
                  <div
                    className="relative !font text-center text-lg text-gray-500  mt-4 py-4 max-w-3xl mx-auto"
                    aria-hidden="true"
                  >
                    In a perfect world, every outreach would spark a connection,
                    and no call for support would go unanswered. Zigment is here
                    to make that world a reality, one conversation at a time. We
                    envision a future where technology bridges gaps, not widens
                    them—where everyone, no matter the size of their platform or
                    the scope of their resources, has a voice.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default InnovationSection