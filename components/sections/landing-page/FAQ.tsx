"use client";

import { useRef } from "react";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// shadcn components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TitleSection2 from "@/components/common/title-section/title-section2";

// components

const faqArray = [
  {
    question: "What is Zigment.ai?",
    answer:
      `Zigment.ai is a conversational AI platform that employs AI agents to handle your inbound and outbound sales conversations.`,
  },
  {
    question: "How do Zigment.ai AI agents differ from each other?",
    answer:
      `The AI agents vary based on the number of conversations they can manage each month. We offer Lite, Advanced, and Super AI Agents to accommodate 900, 2,100, and 5,000 conversations respectively.
      `,
  },
  {
    question: "What languages do your AI agents support?",
    answer:
      `Our AI agents can converse in multiple popular languages, including but not limited to Spanish, Italian, and German.
      `,
  },
  {
    question: "Is this a Done-For-You service?",
    answer:
      `Yes, absolutely! We handle the entire setup for you and ensure that your AI agents are up and running effectively.
      `,
  },
  {
    question: "How are additional conversations billed?",
    answer:
      `Any conversations that exceed your chosen plan’s limit are billed at $0.50 per conversation.
      `,
  },
  {
    question: "Can I change my AI agent plan? ",
    answer:
      `Certainly! You can upgrade, downgrade, or cancel your AI agent plan at any time.
      `,
  },
  {
    question: "How do Zigment.ai AI agents compare to human sales executives?",
    answer:
      `In terms of capacity to handle conversations, a Lite AI Agent equates to one human sales executive, an Advanced AI Agent to two, and a Super AI Agent to five.
      `,
  },
  {
    question: "What functionalities do these AI agents offer",
    answer:
      `The AI agents can initiate conversations, schedule demos, set up calls, process payments, and perform various other tasks aimed at driving desired outcomes.
      `,
  },
  {
    question: "Is there a contract or minimum term requirement?",
    answer:
      `No, all our plans are monthly, and you can cancel at any time without a minimum commitment.
      `,
  }
]
 
 
const FAQ = () => {

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
        <div className="relative flex gap-10 xl:gap-24">
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
    </section>
  );
};

export default FAQ;
