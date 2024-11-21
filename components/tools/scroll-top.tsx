"use client";

import { useEffect, useRef } from "react";
import { useStopScrollTop } from "@/context/app.context";
import { useRouter } from "next/router"; // Import useRouter

import { FaArrowUp } from "react-icons/fa6";

const ScrollTop = () => {
  const { stopScrollTop } = useStopScrollTop();
  const router = useRouter(); // Initialize useRouter

  const topScroll = useRef<HTMLButtonElement>(null!);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const scroll_top = topScroll.current;
      if (scroll_top) {
        window.onscroll = function () {
          if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
          ) {
            scroll_top.style.display = "block";
          } else {
            scroll_top.style.display = "none";
          }
        };
      }
    }

    const handleRouteChange = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  if (stopScrollTop) return null;

  const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <span className="hidden md:inline">
      <button
        ref={topScroll}
        style={{ display: "none" }}
        className=" fixed w-[50px] h-[50px] left-4 md:left-[20px] bottom-4 sm:bottom-[60px] md:bottom-[80px] lg:bottom-[20px] z-[9991] rounded-full text-white hover:text-gray-2 bg-white hidden transition-all duration-300 mix-blend-exclusion"
        onClick={goToTop}
      >
        <FaArrowUp className="w-[14px] h-[16px] text-black-old-2 m-auto" />
      </button>
    </span>
  );
};

export default ScrollTop;
