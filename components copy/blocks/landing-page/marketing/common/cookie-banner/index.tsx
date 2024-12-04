 import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";


const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the cookie is set
    const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
      const [name, value] = cookie.split("=");
      acc[name] = value;
      return acc;
    }, {} as Record<string, string>);

    if (!cookies["cookiesAccepted"]) {
      setIsVisible(true);
    }
  }, []);

  const handleDecline = () => {
    setIsVisible(false);
    // Optionally set a cookie to remember the decline action
    document.cookie = "cookiesAccepted=false; path=/; max-age=31536000"; // 1 year
  };

  const handleAllow = () => {
    setIsVisible(false);
    // Set a cookie to remember the acceptance
    document.cookie = "cookiesAccepted=true; path=/; max-age=31536000"; // 1 year
  };

  return (
    <div className="left-1/2 -translate-x-1/2  w-full z-50 max-w-5xl fixed inset-x-5 bottom-4 md:bottom-10 px-4">
      <div
        className={` p-4  border rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between transition-opacity duration-500 bg-white 
          ${
            isVisible ? "opacity-100" : "opacity-0"
          }
        `}
      >
        <div className="w-full text-sm md:text-base">
          This website uses cookies to ensure you get the best experience on our
          website. {" "}
          <Link href="/privacy-policy" className="text-brand-orange-main whitespace-nowrap hover:underline">
            Learn more
          </Link>
        </div>
        <div className="flex gap-2 items-center flex-shrink-0">
          <Button
            onClick={handleDecline}
          >
            Decline
          </Button>
          <Button
            onClick={handleAllow}
          >
            Allow Cookies
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;