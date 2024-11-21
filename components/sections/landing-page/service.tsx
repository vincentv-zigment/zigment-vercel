"use client";

import { useRef } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasPinContent from "@/lib/animation/hasPinContent";
import { useGSAP } from "@gsap/react";

// lib
import { cn } from "@/lib/utils";

// components
import ServiceCard6 from "@/components/blocks/landing-page/service-card6";
import Title1 from "@/components/common/title/title1";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const contentArray = [
  {
    title: "Lead Ad Campaigns",
    short_description:
      "Engage your audience from Meta & Google Ads. Leadcard campaigns or CTWA",
    image: `/assets/imgs/workflow-section/lead_ad_campaign.svg`,
  },
  {
    title: "Website Visitors",
    short_description:
      "Engage, Qualify & Convert your website visitors into customers",
    image: `/assets/imgs/workflow-section/website_visitors.svg`,
  },
  {
    title: "Social Audience",
    short_description:
      "Instantly engage your social media fans from comments or DMs",
    image: `/assets/imgs/workflow-section/social_audience.svg`,
  },
  {
    title: "Print & TV Media",
    short_description:
      "Start a conversation from a QR code or a number on packaging, a print Ad or a TV / video ad",
    image: `/assets/imgs/workflow-section/print_tv_media.svg`,
  },
];

const LeadConversion = () => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const pinElement = useRef<HTMLDivElement>(null!);
  const pinArea = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      hasPinContent(pinElement.current, pinArea.current, "top 100px", 1024);
    },
    { scope: containerRef }
  );

  return (
    <section className="sec_space1">
      <div className="container bg-white" ref={containerRef}>
        <div
          className="flex  justify-between flex-col xl:flex-row-reverse  gap-x-[100px] gap-y-[40px]"
          ref={pinArea}
        >
          <div className="w-full" ref={pinElement}>
            <div className={cn("text-center", `text-left`)}>
              <div></div>
              <Title1
                text={`No touchpoint, untouched`}
                className={cn("max-w-[565px] mx-auto has_fade_anim", ``)}
              />
              <p
                className={cn(
                  "mt-[23px] lg:mt-[33px] max-w-[550px] mx-auto has_fade_anim",
                  ``
                )}
              >
                {`Zigment can engage in real-time with touchpoints across every channel, from websites 
to social media to messenger apps. And your Google / Meta Ads too`}
              </p>
            </div>
            <div className="py-[25px] lg:py-[45px] has_fade_anim text-cneter w-fit">
              <Link
                href={"/contact-us"}
                className={cn(buttonVariants({ variant: "primary2" }))}
              >
                Get in touch
              </Link>
            </div>
          </div>
          <div
            className="max-w-full xl:max-w-[700px] overflow-hidden bg-white"
            style={{ background: "white" }}
          >
            <div
              className="grid grid-cols-1 md:grid-cols-2  md:gap-y-[70px] -mx-[50px] bg-white"
              style={{ background: "white" }}
            >
              {contentArray.map((service) => (
                <div
                  key={service.title}
                  className="border-s border-border has_fade_anim py-[25px] md:p-0"
                >
                  <ServiceCard6
                    service={{
                      data: {
                        ...service,
                      },
                    }}
                  />
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
