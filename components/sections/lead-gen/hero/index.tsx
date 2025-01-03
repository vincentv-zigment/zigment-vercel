"use client";

import Image from "next/image";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

// shadcn components
import PhoneNumberInput from "@/components/common/inputs/phone-number-input/number-input";
import Spinner from "@/components/common/loaders/spinner";
import VideoModal from "@/components/tools/video-modal";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Hero2LeadGen from "../hero2";
import { Marketing_Lead_Source } from "@/lib/types/ui";
import { personalEmailDomains } from "@/lib/utils";

interface FormDataI {
  full_name: string;
  phone: string;
  email: string;
  lead_type: string;
  phone_code: string;
}

interface FormErrorsI {
  full_name?: string;
  phone?: string;
  email?: string;
  lead_type?: string;
  form?: string; // For the general "Please fill all the details" error
}

const LeadGenHero = () => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataI>({
    full_name: "",
    email: "",
    phone: "",
    lead_type: "",
    phone_code: "+91",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [errors, setErrors] = useState<FormErrorsI | null>(null);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    // For phone number, we only want digits
    if (name === "phone") {
      // Remove non-numeric characters
      let formattedValue = value.replace(/\D/g, "");

      // Check for India country code (+91), restrict to exactly 10 digits
      if (formData.phone_code === "+91" && formattedValue.length > 10) {
        formattedValue = formattedValue.slice(0, 10); // Ensure it only allows 10 digits
      }

      setFormData((prevState) => ({
        ...prevState,
        [name]: formattedValue,
      }));
    } else {
      // For other fields, just update the value normally
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Helper function to validate phone number (only digits allowed, no special chars)
  const validatePhone = (phone: string, countryCode: string): boolean => {
    if (countryCode === "+91") {
      // India phone number validation (10 digits, no special characters)
      const regex = /^\d{10}$/;
      return regex.test(phone);
    }

    // E-164 standard validation for international phone numbers
    const regex = /^[+]?[1-9][0-9]{7,14}$/; // E-164 format
    return regex.test(phone);
  };

  // Helper function to validate email format and domain
  const validateEmail = (
    email: string
  ): { isValid: boolean; message: string } => {
    // First check basic email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return { isValid: false, message: "Please enter a valid email address" };
    }

    // Get domain from email
    const domain = email.split("@")[1].toLowerCase();

    // Check if it's a personal email domain
    if (personalEmailDomains.includes(domain)) {
      return {
        isValid: false,
        message: "Please use your company email address",
      };
    }

    return { isValid: true, message: "" };
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrorsI = {};
    let isValid = true;

    // Check if all fields are empty
    if (
      !formData.full_name.trim() &&
      !formData.email.trim() &&
      !formData.phone.trim() &&
      !formData.lead_type.trim()
    ) {
      newErrors.form = "Please fill all the details";
      isValid = false;
    } else {
      // Individual field validation
      if (!formData.full_name.trim()) {
        newErrors.full_name = "Full name is required";
        isValid = false;
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
        isValid = false;
      } else {
        const emailValidation = validateEmail(formData.email);
        if (!emailValidation.isValid) {
          newErrors.email = emailValidation.message;
          isValid = false;
        }
      }

      if (!formData.phone) {
        newErrors.phone = "Phone number is required";
        isValid = false;
      } else if (!validatePhone(formData.phone, formData.phone_code)) {
        newErrors.phone = "Please enter a valid phone number";
        isValid = false;
      }

      if (!formData.lead_type) {
        newErrors.lead_type =
          "You must specify whether you're a Brand or Agency";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  // Your existing handleSubmit function remains the same
  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (validateForm()) {
      setLoading(true);

      try {
        await axios.post(
          "https://proxy.zigment.ai/webhooks/dynamic-form/HR4YWKO",
          {
            full_name: formData.full_name,
            email: formData.email,
            phone: `${formData.phone_code}${formData.phone}`,
            lead_type: formData.lead_type,
          }
        );
        try {
          await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/cms/new-lead`, {
            name: formData.full_name,
            email: formData.email,
            phone: `${formData.phone_code}${formData.phone}`,
            company_name: `NA`,
            requirements: `lead_type: ${formData.lead_type} | phone_code:  ${formData.phone_code}${formData.phone}`,
            source: Marketing_Lead_Source.CONTACT_US,
            source_detail: "LEADGEN-PAGE",
          });
        } catch (errr__) {
          console.log(errr__);
        }

        if (window && window.fbq) {
          window.fbq("track", "Lead", {
            content_name: formData.lead_type,
            status: "submitted",
          });
        }
        setIsSubmitted(true);
        setFormData({
          full_name: "",
          email: "",
          phone: "",
          lead_type: "",
          phone_code: "+91",
        });
        window.location.href =
          "https://wa.me/14159808513?text=I%27m%20interested%20";
      } catch (error) {
        console.error("Error during form submission:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  console.log(errors, "errors");

  return (
    <section
      style={{ background: "black" }}
      className="pt-24 pb-4 md:pt-[80px] lg:pb-[120px]   rounded-b-[40px] space-y-4 lg:space-y-20 relative w-screen overflow-x-hidden max-w-screen"
    >
      <Image
        className="absolute bottom-[120px] -right-1/2 lg:right-0 w-full lg:w-1/2"
        width={500}
        height={500}
        src={"/assets/imgs/lead-gen/hero/lead-gen-hero.png"}
        alt="background logo"
      />
      <div className="container lg:space-y-12" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-y-[25px] md:gap-y-[50px] gap-x-10 items-center">
          <div className="col-span-1 xl:col-span-5">
            <h1
              className="pb-[10px] md:pb-[30px] text-[35px] md:text-[50px] xl:text-[48px] !leading-[0.9] has_fade_anim text-center lg:text-left text-white-2"
              style={{ color: "white" }}
            >
              Stop chasing every <br className="lg:hidden" /> lead — Focus on
              the ones that count.
            </h1>
            <p
              className="pb-[20px] md:pb-[40px] has_fade_anim text-center lg:text-left"
              data-delay="0.30"
              style={{ color: "white" }}
            >
              Zigment instantly identifies your high-intent{" "}
              <br className="lg:hidden" /> prospects so you can turn more leads
              into <br className="lg:hidden" /> loyal customers —{" "}
              {`faster, smarter, and`} <br className="lg:hidden" /> without the
              wasted effort.
            </p>

            <div
              className="lg:pb-[35px] xl:pb-[50px] flex items-center gap-[20px] has_fade_anim justify-center lg:justify-start"
              data-delay="0.45"
            >
              <Button
                variant={"primary2"}
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Discover
              </Button>
            </div>
          </div>
          <div className="col-span-1 xl:col-span-7">
            <Image
              src={"/assets/imgs/lead-gen/circle_ain 1.gif"}
              width={600}
              height={600}
              alt="hero-lead-gen-gif"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="mx-auto p-4 xl:px-10 lg:py-4 rounded-[30px] w-full xl:w-fit justify-center bg-[#1F1F1F]">
          <div className="flex flex-col xl:flex-row items-center gap-4 relative z-[2]">
            <p className="text-[18px] lg:text-[12px] xl:text-[14px] text-white text-center lg:text-left">
              Fill out the form and <br className="hidden xl:inline-block" />{" "}
              discover <br className="lg:hidden" /> the magic
            </p>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 items-center w-full xl:w-auto">
              <input
                type="text"
                placeholder="Name"
                className={`w-full xl:w-[220px] h-[46px] text-center rounded-full ${
                  errors && errors.full_name
                    ? "border-red-500 border-[3px]"
                    : ""
                }`}
                value={formData.full_name}
                name="full_name"
                onChange={handleChange}
              />

              <div
                className={`w-full xl:w-[220px] rounded-full ${
                  errors && errors.phone ? "border-red-500 border-[3px]" : ""
                } bg-white`}
              >
                <PhoneNumberInput
                  setPhoneCode={(code) => {
                    setFormData({ ...formData, phone_code: code });
                  }}
                  countryCodeClassName="w-20 h-[46px] text-center rounded-full"
                  setState={(val) => {
                    setFormData({ ...formData, phone: val.toString() });
                  }}
                  state={formData.phone.toString()}
                  placeholder="Your Personal Number"
                  className={`text-center h-[46px] w-full rounded-full   [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className={`w-full xl:w-[220px] h-[46px] text-center rounded-full ${
                  errors && errors.email ? "border-red-500 border-[3px]" : ""
                }`}
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
              <select
                className={`w-full xl:w-[220px] p-0 h-[46px] appearance-none text-center rounded-full ${
                  errors && errors.lead_type
                    ? "border-red-500 border-[3px]"
                    : ""
                }`}
                name="lead_type"
                value={formData.lead_type}
                onChange={(e) => {
                  setFormData({ ...formData, lead_type: e.target.value });
                }}
              >
                <option value="">Are you Brand/Agency</option>
                <option value="Brand">Brand</option>
                <option value="Agency">Agency</option>
              </select>
            </div>

            <Button
              variant={"primary2"}
              size={"sm"}
              onClick={handleSubmit}
              disabled={loading || isSubmitted}
              className="hidden lg:block"
            >
              {loading ? <Spinner color="" /> : "Submit"}
            </Button>
            <Button
              variant={"primary2"}
              onClick={handleSubmit}
              disabled={loading || isSubmitted}
              className=" lg:hidden"
            >
              {loading ? <Spinner color="" /> : "Submit"}
            </Button>
          </div>

          {errors && (
            <>
              {errors.email !== "" &&
                errors.full_name !== "" &&
                errors.phone !== "" &&
                errors.lead_type !== "" &&
                errors.form !== "" && (
                  <div className="text-red-500 text-center mt-4  ">
                    {errors.form && <p>{errors.form}</p>}
                    {errors.email && <p>{errors.email}</p>}
                    {errors.phone && <p>{errors.phone}</p>}
                    {errors.full_name && <p>{errors.full_name}</p>}
                    {errors.lead_type && <p>{errors.lead_type}</p>}
                  </div>
                )}
            </>
          )}

          {isSubmitted && (
            <p className="text-green-500 text-center mt-4">
              {`Thanks for your interest! We'll be in touch soon.`}
            </p>
          )}
        </div>
      </div>
      <Hero2LeadGen />
      <VideoModal
        isOpen={openModal}
        close={() => setOpenModal(false)}
        link="https://cdn.zigment.ai/assets/Zigment-ai-chat-v8.mp4"
      />
    </section>
  );
};

export default LeadGenHero;
