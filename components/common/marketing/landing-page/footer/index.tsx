import { Button } from "@/components/ui/button";
import { Marketing_Lead_Source } from "@/lib/types/ui";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { useMutation } from "react-query";

const Footer = () => {
  const [email, setEmail] = useState("");

  const subscribeEmail = async (email: string) => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/cms/new-lead`,
      {
        email: email,
        source: Marketing_Lead_Source.EMAIL_SUBSCRIPTION,
        source_detail: "FOOTER",
      }
    );
    return res.data;
  };

  const { mutate, isSuccess } = useMutation(subscribeEmail, {
    onError: (error) => {
      console.error("Subscription error:", error);
    },
  });

  const handleSubmit = async () => {
    if (email && email.trim() !== "") {
      mutate(email);
    } else {
    }
  };
  return (
    <footer className="bg-white">
      <div className="  w-full mx-auto px-5 text-black">
        <div className="flex flex-col md:flex-row gap-y-3 w-full justify-between items-center py-4 md:py-9">
          <div className="w-full md:w-fit">
            <h1 className="font-montserrat font-extrabold  text-[30px] md:text-[40px]">
              Zigment.ai
            </h1>
          </div>

          <div className="w-full md:w-[340px]   flex flex-col sm:flex-row md:items-center gap-3">
            <p className="font-poppins md:text-lg font-semibold hidden sm:block whitespace-nowrap	">
              Follow US on
            </p>
            <div className="flex items-center gap-2">
              <Link
                href="https://www.linkedin.com/company/zigment"
                aria-label="Follow us on Linkedin"
              >
                <svg
                  className="fill-black hover:fill-brand-orange-main"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 0C7.16479 0 0 7.16479 0 16C0 24.8352 7.16479 32 16 32C24.8352 32 32 24.8352 32 16C32 7.16479 24.8352 0 16 0ZM11.3506 24.1875H7.45386V12.4641H11.3506V24.1875ZM9.40234 10.8633H9.37695C8.06934 10.8633 7.22363 9.96313 7.22363 8.83813C7.22363 7.68774 8.09521 6.8125 9.42822 6.8125C10.7612 6.8125 11.5815 7.68774 11.6069 8.83813C11.6069 9.96313 10.7612 10.8633 9.40234 10.8633ZM25.4014 24.1875H21.5051V17.9158C21.5051 16.3396 20.9409 15.2646 19.531 15.2646C18.4546 15.2646 17.8135 15.9897 17.5317 16.6897C17.4287 16.9402 17.4036 17.2903 17.4036 17.6406V24.1875H13.5071C13.5071 24.1875 13.5581 13.564 13.5071 12.4641H17.4036V14.124C17.9214 13.3252 18.8479 12.189 20.9153 12.189C23.479 12.189 25.4014 13.8645 25.4014 17.4653V24.1875Z"></path>
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/zigment"
                target="_blank"
                aria-label="Follow us on facebook"
              >
                <svg
                  className="fill-black hover:fill-brand-orange-main"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 0C7.17764 0 0 7.17764 0 16C0 24.8217 7.17764 32 16 32C24.8217 32 32 24.8217 32 16C32 7.17764 24.823 0 16 0ZM19.9791 16.5633H17.376V25.8413H13.5187C13.5187 25.8413 13.5187 20.7718 13.5187 16.5633H11.6852V13.2841H13.5187V11.1631C13.5187 9.64408 14.2406 7.27044 17.4114 7.27044L20.2697 7.2814V10.4645C20.2697 10.4645 18.5328 10.4645 18.1951 10.4645C17.8574 10.4645 17.3773 10.6334 17.3773 11.3578V13.2848H20.3161L19.9791 16.5633Z"></path>
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/zigment.ai"
                target="_blank"
                aria-label="Follow us on instagram"
              >
                <svg
                  className="fill-black hover:fill-brand-orange-main"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_112_77)">
                    <path d="M19.0625 16C19.0625 17.6914 17.6914 19.0625 16 19.0625C14.3086 19.0625 12.9375 17.6914 12.9375 16C12.9375 14.3086 14.3086 12.9375 16 12.9375C17.6914 12.9375 19.0625 14.3086 19.0625 16Z"></path>
                    <path d="M23.1621 10.5813C23.0149 10.1824 22.78 9.82129 22.4749 9.5249C22.1785 9.21973 21.8176 8.98486 21.4185 8.83765C21.0947 8.71191 20.6084 8.56226 19.7126 8.52148C18.7437 8.47729 18.4531 8.46777 16 8.46777C13.5466 8.46777 13.2561 8.47705 12.2874 8.52124C11.3916 8.56226 10.905 8.71191 10.5815 8.83765C10.1824 8.98486 9.82129 9.21973 9.52515 9.5249C9.21997 9.82129 8.98511 10.1821 8.83765 10.5813C8.71191 10.905 8.56226 11.3916 8.52148 12.2874C8.47729 13.2561 8.46777 13.5466 8.46777 16C8.46777 18.4531 8.47729 18.7437 8.52148 19.7126C8.56226 20.6084 8.71191 21.0947 8.83765 21.4185C8.98511 21.8176 9.21973 22.1785 9.5249 22.4749C9.82129 22.78 10.1821 23.0149 10.5813 23.1621C10.905 23.2881 11.3916 23.4377 12.2874 23.4785C13.2561 23.5227 13.5464 23.532 15.9998 23.532C18.4534 23.532 18.7439 23.5227 19.7124 23.4785C20.6082 23.4377 21.0947 23.2881 21.4185 23.1621C22.2197 22.853 22.853 22.2197 23.1621 21.4185C23.2878 21.0947 23.4375 20.6084 23.4785 19.7126C23.5227 18.7437 23.532 18.4531 23.532 16C23.532 13.5466 23.5227 13.2561 23.4785 12.2874C23.4377 11.3916 23.2881 10.905 23.1621 10.5813ZM16 20.7175C13.3943 20.7175 11.282 18.6055 11.282 15.9998C11.282 13.394 13.3943 11.282 16 11.282C18.6055 11.282 20.7178 13.394 20.7178 15.9998C20.7178 18.6055 18.6055 20.7175 16 20.7175ZM20.9043 12.198C20.2954 12.198 19.8018 11.7043 19.8018 11.0955C19.8018 10.4866 20.2954 9.99292 20.9043 9.99292C21.5132 9.99292 22.0068 10.4866 22.0068 11.0955C22.0066 11.7043 21.5132 12.198 20.9043 12.198Z"></path>
                    <path d="M16 0C7.16479 0 0 7.16479 0 16C0 24.8352 7.16479 32 16 32C24.8352 32 32 24.8352 32 16C32 7.16479 24.8352 0 16 0ZM25.1321 19.7878C25.0876 20.7659 24.9321 21.4336 24.7051 22.0181C24.2278 23.2522 23.2522 24.2278 22.0181 24.7051C21.4338 24.9321 20.7659 25.0874 19.7881 25.1321C18.8083 25.1768 18.4954 25.1875 16.0002 25.1875C13.5049 25.1875 13.1921 25.1768 12.2122 25.1321C11.2344 25.0874 10.5664 24.9321 9.98218 24.7051C9.3689 24.4744 8.81372 24.1128 8.35474 23.6453C7.88745 23.1865 7.52588 22.6311 7.29517 22.0181C7.06812 21.4338 6.9126 20.7659 6.86816 19.7881C6.823 18.8081 6.8125 18.4951 6.8125 16C6.8125 13.5049 6.823 13.1919 6.86792 12.2122C6.91235 11.2341 7.06763 10.5664 7.29468 9.98193C7.52539 9.3689 7.88721 8.81348 8.35474 8.35474C8.81348 7.88721 9.3689 7.52563 9.98193 7.29492C10.5664 7.06787 11.2341 6.9126 12.2122 6.86792C13.1919 6.82324 13.5049 6.8125 16 6.8125C18.4951 6.8125 18.8081 6.82324 19.7878 6.86816C20.7659 6.9126 21.4336 7.06787 22.0181 7.29468C22.6311 7.52539 23.1865 7.88721 23.6455 8.35474C24.1128 8.81372 24.4746 9.3689 24.7051 9.98193C24.9324 10.5664 25.0876 11.2341 25.1323 12.2122C25.177 13.1919 25.1875 13.5049 25.1875 16C25.1875 18.4951 25.177 18.8081 25.1321 19.7878Z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_112_77">
                      <rect width="32" height="32"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <Link
                href="https://twitter.com/Zigment_ai"
                target="_blank"
                aria-label="Follow us on Twiter"
              >
                <svg
                  className="fill-black hover:fill-brand-orange-main"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 0C7.17764 0 0 7.17764 0 16C0 24.8217 7.17764 32 16 32C24.8217 32 32 24.8217 32 16C32 7.17764 24.823 0 16 0ZM23.1377 12.338C23.1448 12.4966 23.1486 12.6564 23.1486 12.8162C23.1486 17.6828 19.4454 23.2924 12.6699 23.2924C10.5902 23.2924 8.65415 22.6846 7.02489 21.6392C7.31298 21.6734 7.60622 21.6908 7.90333 21.6908C9.62926 21.6908 11.2166 21.1017 12.4772 20.1144C10.866 20.0847 9.50552 19.0201 9.03698 17.5564C9.26126 17.599 9.49263 17.6228 9.72915 17.6228C10.0649 17.6228 10.391 17.579 10.6997 17.4946C9.01506 17.1569 7.74607 15.6687 7.74607 13.8835C7.74607 13.868 7.74607 13.8519 7.74672 13.8371C8.24297 14.1123 8.81076 14.2786 9.414 14.2973C8.42665 13.638 7.77636 12.5101 7.77636 11.2327C7.77636 10.5573 7.95746 9.92443 8.27455 9.38049C10.0901 11.6091 12.8046 13.0747 15.8647 13.2294C15.8015 12.9593 15.7699 12.679 15.7699 12.3896C15.7699 10.3562 17.4185 8.707 19.4519 8.707C20.5114 8.707 21.4672 9.15427 22.14 9.86965C22.9798 9.70466 23.7661 9.39918 24.4795 8.97575C24.2024 9.83614 23.6204 10.5573 22.858 11.0136C23.6036 10.9247 24.3152 10.7275 24.9732 10.4342C24.4821 11.1715 23.8576 11.8205 23.1377 12.338Z"></path>
                </svg>
              </Link>

              <Link
                href="https://www.youtube.com/@zigment01"
                className="w-8 h-8 bg-black hover:bg-brand-orange-main rounded-full flex items-center justify-center"
                target="_blank"
                aria-label="Follow us on Twiter"
              >
                <FaYoutube className="text-white bg-transparent" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t-2 border-white border-opacity-30"></div>
      <div className="w-full mx-auto px-5 lg:px-16 text-black font-poppins pt-6 md:pt-14 pb-12 md:pb-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10  ">
          <div className="md:mx-auto w-full ">
            <h3 className="md:text-lg font-semibold">Resources</h3>
            <div className="flex flex-col text-sm md:text-base gap-4 mt-5">
              <Link href="/pricing" className="hover:text-brand-orange-solid">
                Pricing
              </Link>
              <Link
                href="/blog"
                className="hover:text-brand-orange-solid"
                aria-label="blogs"
              >
                {`Blogs & Ebooks`}
              </Link>
              <Link
                href="/integrations"
                className="hover:text-brand-orange-solid"
                aria-label="integrations"
              >
                Integrations
              </Link>
              <Link
                href="/tools"
                className="hover:text-brand-orange-solid"
                aria-label="tools"
              >
                Tools
              </Link>
              <Link
                href="/demo"
                className="hover:text-brand-orange-solid"
                aria-label="demos"
              >
                Demos
              </Link>

              <Link
                href="/signin"
                className="hover:text-brand-orange-solid"
                aria-label="Ebook"
              >
                Login
              </Link>
            </div>
          </div>
          <div className="md:mx-auto w-full">
            <h3 className="md:text-lg font-semibold">Solutions</h3>
            <div className="flex flex-col text-sm md:text-base gap-4 mt-5">
              <Link
                href="/solutions/zigment"
                className="hover:text-brand-orange-solid"
                aria-label="For Enterprises"
              >
                For Enterprises
              </Link>
              <Link
                href="/solutions/coaches"
                className="hover:text-brand-orange-solid"
                aria-label="For Coaches and Creator"
              >
                For Coaches and Creator
              </Link>
              <Link
                href="/solutions/advertising"
                className="hover:text-brand-orange-solid"
                aria-label="For Advertising"
              >
                For Advertising
              </Link>
              <Link
                href="/solutions/saas"
                className="hover:text-brand-orange-solid"
                aria-label="For Saas"
              >
                For Saas
              </Link>
            </div>
          </div>
          <div className="md:mx-auto w-full">
            <h3 className="md:text-lg font-semibold">Company</h3>
            <div className="flex flex-col text-sm md:text-base gap-4 mt-5">
              <Link href="/about-us" className="hover:text-brand-orange-solid">
                About Us
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-brand-orange-solid"
                aria-label="Terms of Service"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy-policy"
                className="hover:text-brand-orange-solid"
                aria-label="privacy policy"
              >
                Privacy Policy
              </Link>

              <Link
                href="/refund-policy"
                className="hover:text-brand-orange-solid"
                aria-label="Refund and Cancellations"
              >
                Refund and Cancellations
              </Link>
              <Link
                href="/contact-us"
                className="hover:text-brand-orange-solid"
                aria-label="Contact Us"
              >
                Contact Us
              </Link>
              <Link
                href="/careers"
                className="hover:text-brand-orange-solid"
                aria-label="Careers"
              >
                Careers
              </Link>
            </div>
          </div>

          <div className="md:mx-auto w-full">
            <h3 className="text-lg md:text-2xl font-semibold">
              Subscribe To Our Newsletter
            </h3>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full md:max-w-sm rounded-xl bg-brand-gray-400 border-none outline-brand-orange-main text-sm md:text-base py-3 px-4 my-3  text-black   focus:ring-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isSuccess ? (
              <span className="block mt-2 text-sm text-green-500 pl-8">
                Email Submitted Successfully
              </span>
            ) : (
              <Button onClick={handleSubmit} disabled={isSuccess}>
                Subscribe
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="bg-white text-center text-black py-4">
        <p className="text-brand-blue-200 font-poppins font-medium text-sm ">
          © Copyright 2024, All Rights Reserved | Zigment.ai
        </p>
      </div>
    </footer>
  );
};

export default Footer;