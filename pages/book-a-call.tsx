/* eslint-disable @typescript-eslint/no-unused-vars */

import line from "@/assets/images/solutions/hero/line-shape-2.svg";
import { testimonies } from "@/old-pages-pending/solutions/advertising";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import { useEffect, useState } from "react";



export default function SchedulePage() {
  const [testimony, setTestimony] = useState(0);
  useEffect(() => {
    // Set up an interval that increments the `testimony` state
    const interval = setInterval(() => {
      setTestimony((currentValue) => {
        if (currentValue < testimonies.length - 1) {
          return currentValue + 1;
        } else {  // Once the value reaches 3, clear the interval 
          return 0; // Return current value to avoid further changes
        }
      });
    }, 3000); // Every 3 seconds

    // Clean up the interval when the component is unmounted or when `testimony` reaches 3
    return () => clearInterval(interval);
  }, []);
   
  return (
    <>
      <Script type="text/javascript" id="cal-link-embed" crossOrigin="anonymous" strategy="lazyOnload">
            {`(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");

          Cal("init",  {origin:"https://cal.com"});

            Cal("inline", {
            elementOrSelector:"#my-cal-inline",
            calLink: "team/zigment/intro",
            layout: "month_view"
            });

            Cal("ui", {"theme":"light","styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});`}
          </Script>
          
        <Head>
          <title>Zigment.ai - Schedule a Call </title>
          <meta name="description" content="Schedule a demo" />
          <meta property="og:title" content="Zigment.ai - Intro call" />
          <meta property="og:description" content="Schedule your intro call with Zigment AI."/> 
        </Head>
        <div className="w-full max-w-6xl mx-auto sec_space1">
          <div
            className=" mx-10 my-4 md:my-8 rounded-xl overflow-hidden"
            style={{
              background: "url(https://cdn.zigment.ai/assets/aboutusbg.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="mx-auto max-w-7xl py-4 md:py-8 px-4 relative  sm:px-6 lg:px-8">
              <div className="text-center space-y-4 md:space-y-8">
                <p className="mt-1 relative text-4xl font-bold max-w-5xl mx-auto tracking-snug leading-normal text-gray-900  lg:text-6xl ">
                  Schedule a Call
                  <Image
                    src={line}
                    alt=""
                    className="absolute w-[260px] sm:w-[330px] md:w-[320px] lg:w-[330px] xl:w-[420px] inset-x-0 mx-auto     -bottom-3 md:-bottom-6 lg:-bottom-8"
                  />
                </p>
                
                <p className="mx-auto  max-w-2xl text-lg md:text-xl font-medium text-gray-600">
                  Experience the change Zigment brings to your business book a call!
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-full px-6">
          <div style={{width:"100%",height:"100%" }} id="my-cal-inline"></div>
          
          </div>
        </div>
    </>
  );
}
