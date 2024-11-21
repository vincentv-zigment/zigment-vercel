"use client";

import Image from "next/image";
import { useRef } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

// lib

// types

// shadcn components
import { Button } from "@/components/ui/button";

// components
import { useChatBotTrigger } from "@/components/common/chatbot-v2/ChatBotTriggerContext";
import Title1 from "@/components/common/title/title1";

 

const MeetZig = () => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const {setTriggerMessage} = useChatBotTrigger();
  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <>
      <section className="sec_space1">
      
        <div className="container" ref={containerRef}>
          <div className="grid grid-cols-1 lg:grid-cols-[6fr_5fr] gap-6 items-center">
            <div className="order-2 lg:order-1">
              <Image
                width={630}
                height={700}
                src={
                  "/assets/imgs/meet-zig/z_web_IG-07.png"
                }
                className="rounded-[40px]"
                alt="community-thumb"
                data-speed="1.2"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Title1
                text={`Meet Zig, our best sales rep.`}
                className="has_fade_anim pb-[15px] md:pb-[24px]"
              />
              <div className="space-y-4">
                  <p className="has_fade_anim">{`Even the best of salespeople can’t be everywhere. So, we created one that can.`}</p>
                  <p className="has_fade_anim">{`Zig is knowledgeable, attentive, honest, empathetic. Offering real-time, personalized, one-on-one interactions that are meaningful, contextually relevant and focused.`}</p>
              </div>

              
              <div className="py-[25px] lg:py-[45px] has_fade_anim">
                <Button
                variant={'primary2'}
                onClick={()=>{
                  setTriggerMessage({
                    open: true,
                    message: "Hi"
                  })
                }}
                >
                  Say Hi !
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetZig;
