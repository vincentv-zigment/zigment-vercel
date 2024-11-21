"use client";

import ScrollSmoother from "@/assets/gsap-plugins/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ScrollSmootherComponent = () => {
  const pathname = usePathname();
  const history = "";

  useGSAP(() => {
    if (history !== pathname) {
      try {
        const device_width = window.innerWidth;
        ScrollSmoother.create({
          smooth: 1,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      } catch (e) {
        console.log("scrollSmootherError", e);
      }
    }
  }, []); // Add pathname to the dependency array

  return <div></div>;
};

export default ScrollSmootherComponent;
