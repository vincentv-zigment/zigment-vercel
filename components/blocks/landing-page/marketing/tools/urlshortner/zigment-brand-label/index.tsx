import img2 from "@/assets/images/solutions/features/InstantEngagement1.svg";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

function ZigmentBrandLabel() {
  return (
    <div className="flex text-gray-600 justify-center w-full max-w-5xl items-center mx-auto">
      <div className="w-full   bg-sec_bg    p-8  rounded-2xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="">
            <h3 className=" text-xl md:text-2xl font-bold mb-2 ">
              Take your business to the next level!
            </h3>
            <h5 className="cta-description   font-poppins text-base md:text-md mb-4 ">
              Want to use AI for your business? Get Zigment for your business
              and super-charge your business.
            </h5>
            <div className="flex items-center gap-2 mt-10">
              <Link
                className={cn(
                  buttonVariants({
                    variant: "primary",
                    size: "sm",
                  })
                )}
                href={"/contact-us"}
              >
                Try Zigment
              </Link>

              <span className="font-small ">&nbsp;or&nbsp;</span>

              <Link
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "sm",
                  })
                )}
                href={"/book-a-call"}
              >
                Talk to sales
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-6">
            <Image
              className="max-w-full h-auto object-contain "
              src={img2}
              width="200"
              height="175"
              alt="Short link"
              title="Short link"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZigmentBrandLabel;
