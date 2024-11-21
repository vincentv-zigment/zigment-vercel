import Spinner from "@/components/common/loaders/spinner";
import MetaTagsComponents from "@/components/common/meta-tags-components";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/useToast";
import { Marketing_Lead_Source } from "@/lib/types/ui";
import axios from "axios";
import Link from "next/link";
import { ChangeEvent, MouseEvent, useState } from "react";

interface FormDataI {
  fullName: string;
  email: string;
  companyUrl: string;
  additionalInfo: string;
  agreeToTerms: boolean;
}

interface FormErrorsI {
  fullName?: string;
  email?: string;
  companyUrl?: string;
  agreeToTerms?: string;
}

export default function Example() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataI>({
    fullName: "",
    email: "",
    companyUrl: "",
    additionalInfo: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<FormErrorsI>({});
  const { addToast } = useToast();

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrorsI = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!formData.companyUrl.trim()) {
      newErrors.companyUrl = "Company URL is required";
      isValid = false;
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms of service";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (validateForm()) {
      // Your submission logic goes here
      setLoading(true);
      try {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/cms/new-lead`, {
          name: formData.fullName,
          email: formData.email,
          company_name: formData.companyUrl,
          requirements: formData.additionalInfo,
          source: Marketing_Lead_Source.CONTACT_US,
          source_detail: "CONTACTUS-PAGE",
        });
        // setIsSubmitted(true)
        addToast("success", "Thank you for Submitting, Redirecting to  ");
        window.location.href = "/book-a-call";
      } catch (error) {
        console.log(error, "error");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <MetaTagsComponents
        title="Contact Zigment | Get Started with AI Sales Engagement Platform"
        description="Ready to transform your sales engagement? Connect with Zigment's team to learn how our AI platform can boost your conversions by 35% and deliver 12x ROI."
        keywords="contact Zigment, sales automation consultation, AI platform demo request, sales engagement solution, enterprise AI sales, conversational AI support, sales automation pricing, AI platform implementation"
        url="https://www.zigment.ai/contact-us"
      />
      <section className=" sec_space1" style={{ fontFamily: "colasta" }}>
        <div className="flex flex-col md:flex-row justify-between relative gap-[40px] md:gap-[80px] container sec_space1 ">
          <div
            className="w-full md:max-w-md has_fade_anim"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(0px, 0px)",
              opacity: 1,
            }}
          >
            <h2
              className="sec_title2 [&>img]:inline-block mb-[38px] text-center font-colasta"
              style={{ fontFamily: "colasta" }}
            >
              Answer to <br /> every channel. <br />
              Adapt to <br /> every customer.
            </h2>
            <div className="hidden md:block w-[1px] h-[120px] bg-primary mx-auto" />
            <div className="mt-[41px] text-center flex  items-center justify-center gap-8">
              <p style={{ fontFamily: "colasta" }}>
                Continuous, hyper-personalized approach to ensure conversions,
                deepen relationships, and sustainable growth
              </p>
            </div>
          </div>
          <div
            className="max-w-[530px] xl:max-w-[740px] w-full has_fade_anim"
            data-delay="0.30"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(0px, 0px)",
              opacity: 1,
            }}
          >
            <h3 className="text-[24px] !font-sans ">It all starts here!</h3>
            <div className="mt-[26px] xl:mt-[56px]">
              <form className="space-y-5">
                <div className="space-y-2">
                  <input
                    className="flex bg-background py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 w-full h-[50px] md:h-[60px] px-[16px] md:px-[30px] outline-0 rounded-[10px] border-2 border-border focus:border-theme !font-sans"
                    placeholder="Type your name"
                    id=":R6jkvfanqja:-form-item"
                    aria-describedby=":R6jkvfanqja:-form-item-description"
                    aria-invalid={!!errors.fullName}
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <input
                    className="flex bg-background py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 w-full h-[50px] md:h-[60px] px-[16px] md:px-[30px] outline-0 rounded-[10px] border-2 border-border focus:border-theme !font-sans"
                    placeholder="Type Email"
                    id=":Rajkvfanqja:-form-item"
                    aria-describedby=":Rajkvfanqja:-form-item-description"
                    aria-invalid={!!errors.email}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <input
                    className="flex bg-background py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 w-full h-[50px] md:h-[60px] px-[16px] md:px-[30px] outline-0 rounded-[10px] border-2 border-border focus:border-theme !font-sans"
                    placeholder="Company URL"
                    id=":Rajkvfanqja:-form-item"
                    aria-describedby=":Rajkvfanqja:-form-item-description"
                    aria-invalid={!!errors.companyUrl}
                    name="companyUrl"
                    value={formData.companyUrl}
                    onChange={handleChange}
                  />
                  {errors.companyUrl && (
                    <p className="text-red-500 text-sm">{errors.companyUrl}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <textarea
                    className="flex min-h-[80px] bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none w-full h-[120px] md:h-[200px] py-[18px] px-[16px] md:px-[30px] outline-0 rounded-[10px] border-2 border-border focus:border-theme !font-sans"
                    placeholder="Type your message..."
                    name="additionalInfo"
                    id=":Rmjkvfanqja:-form-item"
                    aria-describedby=":Rmjkvfanqja:-form-item-description"
                    aria-invalid="false"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          agreeToTerms: e.target.checked,
                        })
                      }
                      className="border cursor-pointer border-border w-4 h-4 rounded-md text-primary  "
                    />
                    <label htmlFor="agreeToTerms">
                      I agree to the{" "}
                      <Link className="text-blue-400" href="/terms-of-service">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link className="text-blue-400" href="/privacy-policy">
                        Privacy Policy.
                      </Link>
                    </label>
                  </div>
                  {errors.agreeToTerms && (
                    <p className="text-red-500 text-sm">
                      {errors.agreeToTerms}
                    </p>
                  )}
                </div>
                <Button
                  variant={"primary"}
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? <Spinner color="" /> : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
