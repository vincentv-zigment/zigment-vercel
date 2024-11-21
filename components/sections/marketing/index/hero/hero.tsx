import hero from "@/assets/images/solutions/hero/forad.png";
import line from "@/assets/images/solutions/hero/line-shape-1.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaCheck } from "react-icons/fa";

const heroBullets = ["Meta Tech Partner", "CRM Integration", "Custom Solution"];

const Hero = () => {
  const router = useRouter();
  return (
    <section className=" h-screen  md:mt-72  lg:-mt-[80px]">
      <main className="lg:relative flex flex-col-reverse	h-full lg:flex-row  md:gap-10   ">
        <div className="h-full w-full max-w-2xl mx-auto text-center flex items-center lg:text-left ">
          <div className="px-4 h-full sm:px-8 relative  mx-auto lg:mx-0 flex flex-col items-center lg:items-start  lg:justify-center gap-6  lg:gap-12">
            <h1 className="text-4xl font-black text-gray-900 sm:text-4xl relative md:text-5xl lg:text-4xl xl:text-6xl leading-tight">
              <p className="block xl:inline leading-tight">
                Nurture Every Lead <br className="hidden md:block" /> And
                Convert More
              </p>{" "}
              <Image
                src={line}
                alt=""
                className="absolute w-[250px] sm:w-[330px] md:w-[320px] lg:w-[220px] xl:w-[400px] inset-x-0 mx-auto -right-20 md:-right-28 lg:-right-32  -bottom-3 lg:-bottom-4"
              />
            </h1>

            <p className=" text-sm md:text-xl font-medium text-gray-800  ">
              Zigment’s conversational AI sales platform engages,
              <br />
              pitches, qualifies and converts leads 24/7
            </p>
            <div className=" mx-auto md:pb-16 lg:m-0 lg:p-0">
              <div className="rounded-md w-full flex items-center relative justify-center lg:justify-start">
                <Button
                  onClick={() => {
                    router.push(
                      "/contact-us?utm_source=organic&utm_campaign=hero_button_advertising"
                    );
                  }}
                >
                  Start Now
                </Button>
              </div>
              <div className="flex  gap-4 items-center mt-4">
                {heroBullets.map((x, index) => {
                  return (
                    <div
                      className="flex gap-1 md:gap-2 items-center"
                      key={`hero_bullet_${index}`}
                    >
                      <span>
                        <FaCheck className="w-4 h-4 text-brand-orange-main" />
                      </span>
                      <p className="text-gray-800 text-xs md:text-sm">{x}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center px-4 w-full   xl:w-1/2 mx-auto my-4  md:my-0">
          <Image
            className="inset-0 w-full h-full md:h-[500px] lg:h-[500px] md:my-4  object-contain	"
            src={hero}
            alt=""
            width={700}
            height={700}
            priority={true}
          />
        </div>
      </main>
    </section>
  );
};

export default Hero;
