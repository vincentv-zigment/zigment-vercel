import { BiCheck } from "react-icons/bi";

import circle from "@/assets/images/solutions/circle.svg";
import square from "@/assets/images/solutions/square.svg";
import ChatBotFeaturesSection from "@/components/sections/marketing/solutions/chat-bot-features-section";
import Image from "next/image";
import { useEffect, useState } from "react";

import PricingCurrencyDropDown from "@/components/common/pricing-currency-drop-down";
import HeroSection2 from "@/components/sections/common/hero-section2";
import FAQ from "@/components/sections/landing-page/FAQ";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

const pricing = {
  tiers: [
    {
      title: `Super Agent`,
      price: 89,
      frequency: "Price: $89/month",
      // description: `Conversations: Up to 100`,
      features: [
        "Includes credits for 1000 messages per month",
        "AI Agent training and goal setting",
        "Includes Website Chatbot, Instagram and FB Messenger",
        "Google Calendar & standard CRM Integration included",
        "Additional conversations charged at 0.03 / message or $0.6 per new lead",
      ],
      cta: "Get Started",
      Bestfor: "Small businesses and startups",
    },
    {
      title: `Advanced Agent`,
      price: 189,
      frequency: `Price: $189/month`,
      // description: `Conversations: Up to 1000`,
      features: [
        "Includes credits for 2000 messages per month",
        "Everything from Super Agent Plan included",
        "Whatsapp and SMS integrations at extra charges",
        "Additional conversations charged at 0.03 / message or $0.6 per lead",
        "Option to use your own openAI API key",
      ],

      cta: "Get Started",
      Bestfor: "Growing businesses",
    },
    {
      title: "Custom Agent",
      price: 0,
      frequency: "Price: Contact Us",
      // description: "Conversations: No Limit",
      features: [
        `Have larger lead volumes or want us to integrate into your custom process or software stack? Lets talk.`,
      ],
      cta: "Get Started",
      Bestfor: "Large enterprises",
    },
  ],
};

const chatbotFeatures = [
  {
    id: 1,
    name: "Zigment Gets You",
    description:
      "We understand your business and adapt our conversations to represent you authentically.",
  },
  {
    id: 2,
    name: "Personal Assistant Vibe",
    description:
      "Handles scheduling, reminders, and even upsells—like an assistant who’s always on the clock.",
  },
  {
    id: 3,
    name: "Always Learning",
    description:
      "Zigment grows with you, so your engagement gets better every day.",
  },
];

const countriesArray = [
  {
    id: 0,
    label: "USD $",
    value: "USD",
    imgURL: "https://www.worldometers.info/img/flags/us-flag.gif",
    symbol: "$",
  },
  // { id: 1, label: 'INR ₹', value: 'INR', imgURL:'https://www.worldometers.info/img/flags/in-flag.gif', symbol:'₹' },
  // { id: 3, label: 'EUR €', value: 'EUR', imgURL:'https://cdn.zigment.ai/assets/Europe.svg.png', symbol:'€' },
  // { id: 4, label: 'GBP £', value: 'GBP', imgURL:'https://www.worldometers.info/img/flags/uk-flag.gif', symbol:'£'},
  // { id: 5, label: 'CAD $', value: 'CAD', imgURL:'https://www.worldometers.info/img/flags/ca-flag.gif', symbol:'$' },
];

export default function Example() {
  const [formData, setFormData] = useState<{
    id: number;
    label: string;
    value: string;
    imgURL: string;
    symbol: string;
  }>({
    id: 0,
    label: "USD $",
    value: "USD",
    imgURL: "https://www.worldometers.info/img/flags/us-flag.gif",
    symbol: "$",
  });

  function getCurrencyBasedOnTimezone() {
    // return timezoneToCurrencyMap[timezone]  ;
    return "USD";
  }

  useEffect(() => {
    const country = getCurrencyBasedOnTimezone();
    const countryPricing = countriesArray.find((x) => x.value === country);
    if (countryPricing) {
      setFormData(countryPricing);
    }
  }, []);

  const router = useRouter();

  return (
    <>
      <HeroSection2
        title={"Choose Your Agent, Boost Your Sales"}
        description="Whether you're a startup or an enterprise, we've got an AI agent that fits your conversational needs."
      >
        <div className="mx-auto   relative z-10 max-w-7xl text-center   px-4 sm:px-6 lg:px-6">
          {/* Tiers */}
          <div className="  relative ">
            <div className="text-left w-48 mb-10 z-20 relative flex items-center gap-4">
              <PricingCurrencyDropDown
                state={formData}
                setState={(val) => {
                  setFormData({ ...formData, ...val });
                }}
                list={countriesArray}
                name={"pricing"}
              />
            </div>

            <div className="space-y-12 divide-x lg:grid lg:grid-cols-3    lg:space-y-0 border border-border rounded-2xl overflow-hidden">
              {pricing.tiers.map((tier) => (
                <div
                  key={tier.title}
                  className="relative flex flex-col     bg-white p-8 shadow-sm"
                >
                  <div className="flex-1">
                    <h3 className="text-xl text-center font-semibold text-gray-900">
                      {tier.title}
                    </h3>

                    <div className="mx-auto w-fit h-32 flex flex-col justify-center mt-6 mb-4 text-center relative">
                      <span className="absolute top-1 -left-5 font-semibold text-3xl">
                        {tier.price !== 0 ? formData.symbol : ``}
                      </span>
                      <span className="text-6xl text-black font-bold relative">
                        {tier.price !== 0 ? (
                          tier.price
                        ) : (
                          <span className="text-6xl">Custom Pricing</span>
                        )}
                      </span>

                      <span className="block">
                        {tier.price !== 0 ? `/month` : ``}
                      </span>
                    </div>

                    {/* Feature list */}
                    <ul
                      role="list"
                      className="mt-6 space-y-6 border-t text-left pt-4"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex">
                          <BiCheck
                            className="h-6 w-6 flex-shrink-0 text-brand-orange-main"
                            aria-hidden="true"
                          />
                          <span className="ml-2  ">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 text-lg text-left font-medium">
                    Best For:
                    <span className="text-brand-orange-main">
                      {" "}
                      {tier.Bestfor}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 font-outfit  text-left mt-16 relative rounded-2xl  bg-sec_bg ">
            <Image
              src={circle}
              alt="triangle"
              className="absolute w-28 h-28 right-10 bottom-4  "
              style={{
                animation: "rotate 30s linear infinite",
              }}
            />
            <Image
              src={square}
              alt="triangle"
              className=" w-4 h-4 z-20 absolute  left-80 top-12   "
              width={100}
              height={100}
              style={{
                animation: "moveUpDown 4s ease-in infinite",
              }}
            />
            <h3 className="text-2xl md:text-5xl">Need More?</h3>
            <p className="mt-4 text-lg text-gray-600">
              For requirements exceeding 5,000 conversations, opt for our
              customized Enterprise Plan.
            </p>
            <Button
              size={"sm"}
              variant={"primary"}
              className="mt-8"
              onClick={() => {
                router.push("/contact-us");
              }}
            >
              Talk to Us to Find Out Rates
            </Button>
          </div>
        </div>
      </HeroSection2>
      <ChatBotFeaturesSection chatbotFeatures={chatbotFeatures} />
      <FAQ />
    </>
  );
}
