"use client";

import { useRef } from "react";
import Image from "next/image";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// components
import Title1 from "@/components/common/title/title1";
 
const contentArray = [
    {
      title: 'Digital Marketing Campaigns',
      description: `Engage customers directly from your digital campaigns like CTWA or Lead Form Ads`,
      image:'/assets/imgs/icon/icon-r-54.png'
    },
    {
      title: 'Web chat, Email / SMS / Whatsapp',
      description: `Let Zigment be the first point of contact across all your touchpoints engaging, qualifying and driving a sales motion`,
      image:'/assets/imgs/icon/icon-r-64.png'

    },
    {
      title: 'Social Media',
      description: `Zigment engages with your audience who are trying to connect with you via comments and DM`,
      image:'/assets/imgs/icon/icon-r-67.png'
    }
  ];

const LeadConversion = ( ) => {

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="sec_space1">
      <div className="container" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_6fr] gap-x-6 gap-y-12 items-center">
          
          <div className="relative max-w-full lg:max-w-[630px] rounded-[40px] mx-auto bg-[#FAFAFA] mt-[50px] md:mt-0 p-0 md:px-[50px] md:py-[60px]">
              <Image
                width={492}
                height={542}
                src={`/assets/imgs/lead-conversion/z_web_IG-04.png`}
                alt="community-thumb"
                className="drop-shadow-md"
              />
              <Image
                width={205}
                height={120}
                src={`/assets/imgs/lead-conversion/z_web_IG-05.png`}
                data-speed="1.2"
                className="absolute bottom-[142px] drop-shadow-lg left-[23px] "
                alt="community-thumb"
              />
              <Image
                width={500}
                height={500}
                src={`/assets/imgs/lead-conversion/z_web_IG-06.png`}

                data-speed="0.8"
                className="absolute w-[180px] drop-shadow-lg h-auto object-contain right-2 top-[48px]"
                alt="community-thumb"
              />
          </div>
          <div>
            <Title1
              text={`Zigment for lead conversion`}
              className="pb-[15px] md:pb-[24px] max-w-[463px] has_fade_anim"
            />
            <div className="max-w-[520px]">
              <p className="has_fade_anim">{`Increase your lead conversion by 40% with Zigment’s AI agents trained as SDRs. Resulting in lower CAC across all your lead channels.`}</p>
            </div>
              <div className="mt-[30px] md:mt-[45px] has_fade_anim">
                {contentArray.map((item, i) => (
                  <div
                    key={`feature_item-${i}`}
                    className="mb-[30px] md:mb-[50px] last:mb-0 flex gap-[15px] md:gap-[30px]"
                  >
                    <div className="shrink-0">
                      <Image
                        width={70}
                        height={70}
                        src={item.image}
                        alt="icon"
                      />
                    </div>
                    <div>
                      <h2 className="text-[18px] md:text-[24px] pb-0 md:pb-[13px]">
                        {item.title}
                      </h2>
                      <div className="w-full">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadConversion;
