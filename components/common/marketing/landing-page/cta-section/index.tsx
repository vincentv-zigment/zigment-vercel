import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
type Props = {
  tagline?: string;
};

const CTASection = ({
  tagline = "can help you 10x your coaching business?",
}: Props) => {
  return (
    <section className="bg-sec_bg text-center">
      <div className="w-full max-w-6xl mx-auto py-8 md:py-10 ">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 lg:text-5xl   leading-tight">
            <div className="relative leading-tight">
              <p className="block xl:inline ">
                Would you like to see how Zigment{" "}
              </p>{" "}
            </div>
            <span className="block   xl:inline leading-tight">{tagline}</span>
          </h1>
          <div className=" mt-6 md:mt-2 lg:mt-10 text-center  ">
            <div className="rounded-md w-full flex items-center relative justify-center lg:justify-center">
              <Link
                className={cn(buttonVariants({ variant: "primary" }))}
                href="/contact-us"
              >
                Schedule A Demo
              </Link>
            </div>
            <div className="mx-auto max-w-7xl  py-4">
              <h2 className="lg:text-center md:text-lg font-semibold text-center leading-8 text-gray-900">
                Integrates with Instagram and
                <span className="text-brand-orange-main text-xl md:text-3xl">
                  {" "}
                  100+{" "}
                </span>
                CRMs
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
