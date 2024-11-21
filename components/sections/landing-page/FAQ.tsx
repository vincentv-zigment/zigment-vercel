"use client";

import { useRef } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

// shadcn components

// components

 
 
 
const FAQ = () => {

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <>
    {/* <section className="sec_space1">
      <div className="container" ref={containerRef}>
        <div className="relative flex flex-col md:flex-row gap-10 xl:gap-24">
          <div className="max-w-full md:max-w-[80%] xl:max-w-[350px] mx-auto xl:mx-0">
            <TitleSection2
              title={`Frequently Asked Questions`}
              details={`Explore this section to learn more about our AI chatbots and find answers to your questions.`}
              className="text-center xl:text-start"
            />
          </div>
          <div className="w-full">
              <Accordion
                type="single"
                collapsible
                className="w-full has_fade_anim"
                defaultValue="item-2"
              >
                {faqArray.map((item, i) => (
                  <AccordionItem
                    key={`accordion_item-${i}`}
                    value={`item-${i + 1}`}
                    className="border-b-0 mb-[7px] overflow-hidden"
                  >
                    <AccordionTrigger className="bg-white text-xl leading-tight text-primary shadow-none text-start font-semibold pt-[21px] lg:pt-[25px] pb-[15px] lg:pb-5 px-[25px] md:px-[30px] border border-border rounded-[10px] hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="bg-white text-lg leading-[1.44] text-secondary pt-0 pb-[23px] lg:pb-6 p-[25px] m:px-[30px] border border-border rounded-[10px] mt-[7px]">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
          </div>
        </div>
      </div>
    </section> */}
    </>
  );
};

export default FAQ;
