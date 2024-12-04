"use client";

import { useRouter } from "next/router"; // Import useRouter
import { useEffect, useState } from "react";

// lib
import { cn } from "@/lib/utils";

// types

// shadcn components
import { buttonVariants } from "@/components/ui/button";

// components
import navigation from "@/config/navigation.json";
import Image from "next/image";
import Link from "next/link";
import Menu from "../menu";
import Offcanvas from "../offcanvas";

const Header = () => {
  const router = useRouter(); // Initialize useRouter
  const headerNav = navigation.header;
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
  }, []);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  if (router.pathname.startsWith("/lp")) {
    return null;
  }

  return (
    <>
      <header
        className={cn(
          scroll ? "fixed " : "absolute",
          "top-0 left-0 w-full z-[99]"
        )}
      >
        <div className="container">
          <div
            className={cn(
              "relative flex gap-[20px] justify-between items-center h-[60px] md:h-[70px] max-w-[950px] rounded-full my-[20px] mx-auto px-[30px] py-[10px] 2xl:pe-[10px]",
              scroll ? "bg-white-3" : "bg-[#FFFFFFD1]"
            )}
          >
            <Link href={'/'}>
            <Image
            width={500}
            height={500}
            src={'/Zigment_logo-black.svg'}
            alt={`zigment`}
            priority
            className="w-auto h-16  object-contain"
            
          />
            </Link>
            <div className=" hidden xl:flex justify-center">
              <Menu headerNav={headerNav} />
            </div>
            <div className=" flex justify-end gap-4">
            <Link
                href={'/demo'}
                className={cn(buttonVariants({ variant: "primary2", size: "sm" ,className:'lg:hidden'}))}
                id="demo"
              >
                  Demos
              </Link>
              <Link
                href={'/demo'}
                className={cn(buttonVariants({ variant: "primary2", size: "sm" ,className:'hidden lg:inline-block'}))}
                id="demo"
              >
                <span className="btn-span" data-text="Demo">
                  Demos
                </span>
              </Link>
              <div className="flex justify-end xl:hidden">
                <Offcanvas headerNav={headerNav} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
