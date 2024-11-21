import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/router";

const CTAWithDemo = dynamic(
  () => import("@/components/blocks/landing-page/marketing/common/ctawith-demo")
);
const MetaTagsComponents = dynamic(
  () => import("@/components/common/meta-tags-components")
);

const EasyCopyExtension = () => {
  const router = useRouter();
  return (
    <>
      <MetaTagsComponents
        url="https://zigment.ai/tools/easy-copy-extension"
        description="Free Website Copy Generator. Simple. Easy. Free Chrome Extension to generate copy from browser itself in 2 clicks. Get it now. Zigment AI powerful free tool."
        keywords="Website Copy, Copy Generator, AI Copy Generator, Chrome Extension"
        title="Easy Copy AI - Chrome Extension by Zigment AI"
      />

      <div className="mb-20 mt-[40px] lg:mt-[80px]">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Image
            src={"https://cdn.zigment.ai/assets/easy_copy_logo.png"}
            alt="Logo"
            className="w-16 h-16  object-contain mx-auto"
            width={500}
            height={500}
          />
          <div className="flex flex-col items-center justify-center gap-4 mx-auto ">
            <p className="flex flex-col md:flex-row  items-center px-3 py-1.5 text-sm text-gray-900 border border-gray-100 bg-gray-100 rounded-md font-medium">
              <span className="flex items-center ">
                Made by
                <Link
                  href={"/"}
                  className=" w-auto pt-0.5 flex items-center  mx-2"
                >
                  <Image
                    src={"/Zigment_logo-black.svg"}
                    width={800}
                    height={800}
                    alt=""
                    className="w-auto h-[30px] object-contain"
                  />
                </Link>
              </span>
              with love for designers, developers, and entrepreneurs
            </p>
            <Button
              variant={"outline"}
              onClick={() => {
                router.push("/contact-us?ref=easy-copy-extension-landing-page");
              }}
              size={"sm"}
            >
              Buy Pro <ArrowRight />
            </Button>
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
            Generate Copy in 2 Clicks
          </h1>
          <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600 font-inter">
            Simple. Easy. Free Chrome Extension to generate copy from browser
            itself. Get it now
          </p>
          <div className="relative inline-flex mt-10 mb-20 group">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <div
              title=""
              className="relative inline-flex items-center justify-center px-2 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer hover:bg-gray-800"
              onClick={() => {
                window.location.href =
                  "https://chromewebstore.google.com/detail/easy-copy-ai-copy-generat/gccfgfeoaicaleihkofhknklhcghommf";
              }}
            >
              <Image
                width={500}
                height={500}
                className="w-auto h-24"
                src="https://cdn.zigment.ai/assets/chrome_available.png"
                alt=""
              />
            </div>
          </div>
          <CTAWithDemo />
        </div>
      </div>
    </>
  );
};

export default EasyCopyExtension;
