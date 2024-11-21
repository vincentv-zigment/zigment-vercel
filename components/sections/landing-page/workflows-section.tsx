"use client";

import { useRef } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const services = [
  {
    title: "End-user Experience",
    sub_title:
      "AI agents’ behavior trained with your business personality and brand voice",
    image: "/path/to/end-user-experience-image.jpg",
  },
  {
    title: "Realtime Dashboard",
    sub_title:
      "View every interaction or the macro metrics. Track and control every conversation",
    image: "/path/to/realtime-dashboard-image.jpg",
  },
  {
    title: "Integrations",
    sub_title:
      "The platform is already integrated with most of the popular CRMs and marketing platforms",
    image: "/path/to/integrations-image.jpg",
  },
  {
    title: "Human Supervision",
    sub_title:
      "Every deployment with Zigment is monitored and supervised by our supervision team",
    image: "/path/to/human-supervision-image.jpg",
  },
];
const WorkflowsSection = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[auto_660px] gap-[30px] md:gap-[50px] 2xl:gap-[195px]">
          <div>
            <div className="mb-[25px] md:mb-[51px]">
              <h2 className="sec_title2 has_fade_anim">{`AI platform built for  custom(er) workflows `}</h2>
            </div>
            <div className="max-w-[520px]">
              <p className="has_fade_anim">
                {`Every business operates differently! Zigment platform is built with customization in mind. This is `}
                <strong>Service as a Software!</strong>{" "}
              </p>
            </div>
            <div>
              <Accordion
                type="single"
                collapsible
                className="w-full mt-[43px] border-t border-border has_fade_anim"
                defaultValue="item-2"
              >
                {services.map((item, i) => (
                  <AccordionItem
                    key={`accordion_item-${i}`}
                    value={`item-${i + 1}`}
                    className="border-b border-border overflow-hidden"
                  >
                    <AccordionTrigger className="shadow-none text-lg font-medium leading-[1.44] text-primary pt-[16px] pb-[14px] font-primary hover:no-underline">
                      {i + 1}. {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-lg leading-[1.44] text-secondary pt-1 pb-[23px] lg:pb-7">
                      {item.sub_title}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="relative max-w-full lg:max-w-[630px] rounded-[40px] mx-auto bg-[#FAFAFA] mt-[50px] md:mt-0 p-0 md:px-[50px] md:py-[60px]">
            <Image
              width={492}
              height={542}
              src={`/assets/imgs/workflow-section/z_web_IG-04.png`}
              alt="community-thumb"
              className="drop-shadow-md"
            />
            <Image
              width={500}
              height={500}
              src={`/assets/imgs/workflow-section/enduser.svg`}
              data-speed="0.8"
              className="absolute w-[200px] sm:w-[300px] drop-shadow-lg  object-contain top-6 md:top-[60px] md:right-auto md:left-1/4"
              alt="end-use-thumb"
            />
            <div className="h-[80px] sm:h-[130px] max-w-full lg:max-w-[630px] flex items-center justify-center  absolute top-1/2 -translate-y-1/2 gap-2   left-1/2 -translate-x-1/2">
              <Image
                width={500}
                height={500}
                src={`/assets/imgs/workflow-section/intgration.svg`}
                data-speed=""
                className="  w-auto h-full drop-shadow-lg  object-contain  "
                alt="integration-thumb"
              />
              <Image
                width={205}
                height={120}
                src={`/assets/imgs/workflow-section/dash.svg`}
                data-speed=""
                className=" w-auto h-full drop-shadow-lg right-2 "
                alt="dashboard-thumb"
              />
            </div>
            <Image
              width={500}
              height={500}
              src={`/assets/imgs/workflow-section/superviosn.svg`}
              data-speed="1.2"
              className="absolute w-[150px] sm:w-[250px] drop-shadow-lg h-auto object-contain left-1/2 -translate-x-1/2 bottom-10 lg:bottom-[120px] md:bottom-[150px]"
              alt="community-thumb"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowsSection;
