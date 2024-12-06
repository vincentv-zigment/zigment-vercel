"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { cn } from "@/lib/utils";

// shadcn components
import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TitleSection2 from "@/components/common/title-section/title-section2";

// components

const tab_lists = [
  {
    key: "tab1",
    name: "Campaign Performance",
    image: "/assets/imgs/ctwa/icon-r-27.webp",
  },
  {
    key: "tab2",
    name: "Sales Funnel Status",
    image: "/assets/imgs/ctwa/icon-r-28.webp",
  },
  {
    key: "tab3",
    name: "Conversation Summary",
    image: "/assets/imgs/ctwa/icon-r-29.webp",
  },
];

const tab_content = [
  {
    key: "tab1",
    title: "Realtime performance updates of your campaigns",
    content:
      "Get a macro view of your Meta-linked campaigns and a micro view of all the user engagement at all times. Track progress and download reports any time.",
    image: "/assets/imgs/ctwa/automatic-marketing/dashboard1.png",
  },
  {
    key: "tab2",
    title: "Lead funnel status for each & every click",
    content:
      "Watch each lead pass though your sales funnel and progress in real time. Each conversation gets automatically tagged with the correct status update and raise alerts if required.",
    image: "/assets/imgs/ctwa/automatic-marketing/contact-page.png",
  },
  {
    key: "tab3",
    title: "Conversation summary & lead engagement advice",
    content:
      "Get a complete summary of every conversation added to your CRM or contact center software. Also get the relevant closure advice for your calling executives to build context and close better.",
    image: "/assets/imgs/ctwa/automatic-marketing/chat-summary.png",
  },
];

const AutomatedMarketing = () => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="sec_space_bottom1 md:sec_space1">
      <div className="container" ref={containerRef} dir="ltr">
        <TitleSection2
          title={`Be in control of your campaigns all the time`}
          details={`View, manage and control all your campaigns in one single dashboard. `}
          titleClassName="max-w-[770px]"
          detailsClassName="max-w-[695px]"
        />

        {tab_lists && tab_lists.length && tab_content && tab_content.length && (
          <Tabs
            defaultValue={tab_lists[0].key}
            className="mt-[20px] md:mt-[40px] lg:mt-[60px] bg-sec_bg p-[15px] md:p-[30px] rounded-theme"
          >
            <TabsList className="h-full flex w-full overflow-x-auto justify-between gap-[10px] bg-white rounded-theme mb-[50px] p-[15px]">
              {tab_lists.map((tab, i) => (
                <TabsTrigger
                  key={`tab_list-${i}`}
                  value={tab.key}
                  className="data-[state=active]:shadow-none data-[state=active]:bg-sec_bg cursor-pointer"
                  asChild
                >
                  <div className="flex items-center !justify-start min-w-[200px] lg:min-w-[300px] gap-[20px] ps-4 py-2 pe-6 w-full !rounded-[15px] !whitespace-normal">
                    <div className="rounded-full flex justify-center items-center">
                      <Image
                        width={55}
                        height={55}
                        src={tab.image}
                        alt="icon image"
                      />
                    </div>
                    <p className="text-[14px] md:text-[20px] leading-[1.12] text-primary font-semibold has_fade_anim">
                      {tab.name}
                    </p>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            {tab_content.map((tab, i) => (
              <TabsContent
                key={`tab_content-${i}`}
                value={tab.key}
                className="min-h-[400px]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[auto_450px] 2xl:grid-cols-[auto_550px] gap-[20px] md:gap-[30px] lg:gap-[40px] p-0 2xl:px-[60px]  ">
                  <div>
                    <h2 className="text-[22px] xl:text-[40px] leading-tight has_fade_anim">
                      {tab.title}
                    </h2>
                    <p className="my-[20px] has_fade_anim">{tab.content}</p>
                    <div className="my-[32px] has_fade_anim">
                      <Link
                        href={"/contact-us"}
                        className={cn(
                          buttonVariants({ variant: "primary2" }),
                          "text-[16px]"
                        )}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                  <div className="">
                    <Image
                      width={500}
                      height={500}
                      src={tab.image}
                      className={`h-auto w-full object-contain   overflow-hidden    `}
                      alt="gallery image"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </section>
  );
};

export default AutomatedMarketing;
