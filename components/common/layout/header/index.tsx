"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Import useRouter

// lib
import { cn } from "@/lib/utils";

// types

// shadcn components
import { Button } from "@/components/ui/button";

// components
import Image from "next/image";
import { MenuDataType } from "@/types";
import Signup from "@/components/signup";
import Signin from "../signin";
import Menu from "../menu";
import Offcanvas from "../offcanvas";
import navigation from "@/config/navigation.json";
import Link from "next/link";

const Header = () => {
  const router = useRouter(); // Initialize useRouter
  const headerNav = navigation.header;
  const [scroll, setScroll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
  }, []);

  const closeDialog = () => {
    setIsOpen(!isOpen);
  };

  const closeDialog2 = () => {
    setIsOpen2(!isOpen2);
  };

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
              <Button
                variant="primary2"
                size="sm"
                onClick={() => {
                  router.push("/demo");
                }}
              >
                <span className="btn-span" data-text="Demo">
                  Demo
                </span>
              </Button>
              <div className="flex justify-end xl:hidden">
                <Offcanvas headerNav={headerNav} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Signup isOpen={isOpen} close={closeDialog} open={closeDialog2} />
      <Signin isOpen={isOpen2} close={closeDialog2} open={closeDialog} />
    </>
  );
};

export default Header;
