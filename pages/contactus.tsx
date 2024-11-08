import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/useToast";
import { testimonies } from "@/lib/testimonial";
import { Marketing_Lead_Source } from "@/lib/types/ui";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const inputStyle = `p-4 mb-1  shadow-sm focus:ring-btn-bg-main focus:border-primary block w-full  border-2 border-border  rounded-xl  disabled:opacity-30 disabled:cursor-not-allowed font-costa, sans-serif`;

const labelStyle = `block text-lg tracking-wider font-medium text-gray-700 mb-2`


interface FormDataI {
  fullName: string;
  email: string;
  role: string;
  companyUrl: string;
  country: string;
  industry: string;
  additionalInfo: string;
}

interface FormErrorsI {
  fullName?: string;
  email?: string;
  role?: string;
  companyUrl?: string;
  country?: string;
  industry?: string;
}
export default function Example() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataI>({
    fullName: '',
    email: '',
    role: '',
    companyUrl: '',
    country: '',
    industry: '',
    additionalInfo: '',
  });

  const [errors, setErrors] = useState<FormErrorsI>({});
  const { addToast } = useToast();
  const router = useRouter()

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrorsI = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    if (!formData.role) {
      newErrors.role = 'Role is required';
      isValid = false;
    }

    if (!formData.companyUrl.trim()) {
      newErrors.companyUrl = 'Company URL is required';
      isValid = false;
    }

    if (!formData.country) {
      newErrors.country = 'Country is required';
      isValid = false;
    }

    if (!formData.industry) {
      newErrors.industry = 'Industry is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (validateForm()) {
      // Your submission logic goes here
      setLoading(true)
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/cms/new-lead`,
          {

            name: formData.fullName,
            email: formData.email,
            role: formData.role,
            company_name: formData.companyUrl,
            country: formData.country,
            industry: formData.industry,
            requirements: formData.additionalInfo,
            source: Marketing_Lead_Source.CONTACT_US,
            source_detail: 'CONTACTUS-PAGE',

          }
        );
        // setIsSubmitted(true)
        addToast('success', 'Thank you for Submitting, Redirecting to  ')
        window.location.href = '/book-a-call'
      } catch (error) {
        console.log(error, "error");
      } finally {
        setLoading(false)
      }
    }
  };

  const [testimony, setTestimony] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimony((currentValue) =>
        currentValue < testimonies.length - 1 ? currentValue + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-[100px]   bg-sec_bg" style={{fontFamily: "colasta, sans-serif"}}>
      <div className="pt-[5px] xl:pt-[75px] 2xl:pt-[135px] sec_space_bottom1 !font-colasta container">
        <div className="flex gap-5 md:gap-[40px] flex-col md:flex-row  pb-[65px] xl:pb-[85px] 2xl:pb-[135px]">
            <h1
              className="text-[30px] md:text-[40px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] max-w-[410px] 2xl:max-w-[520px] has_fade_anim font-colasta"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
                fontFamily: "colasta, sans-serif"

              }}
            >
              {`Let’s get in touch`}
            </h1>
            <div
              className="hidden md:block mt-[58px] xl:mt-[93px] 2xl:mt-[123px] has_fade_anim"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1
              }}
            >
              <img
                alt="shape image"
                loading="lazy"
                width={331}
                height={42}
                decoding="async"
                data-nimg={1}
                className="rtl_y"
                srcSet="/_next/image?url=%2Fassets%2Fimgs%2Fshape%2Fshape-s-56.png&w=384&q=75 1x, /_next/image?url=%2Fassets%2Fimgs%2Fshape%2Fshape-s-56.png&w=750&q=75 2x"
                src="/_next/image?url=%2Fassets%2Fimgs%2Fshape%2Fshape-s-56.png&w=750&q=75"
                style={{ color: "transparent", height: "auto" }}
              />
            </div>
            <div
              className="max-w-full md:max-w-[250px] lg:max-w-[410px] ms-auto mt-0 md:mt-[57px] lg:mt-[92px] xl:mt-[102px] 2xl:mt-[132px] has_fade_anim"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
              }}
            >
              <p 
                style={{fontFamily: "Instrument, sans-serif"}}
                className="tracking-wider font-medium text-primary"
              >
                {`Everything you need to dominate app service fortified the industry's #1
                rated our customer support.`}
              </p>
            </div>
        </div>

        <div className="gap-10  grid grid-cols-1 lg:grid-cols-2  " >
          <div className="w-full  py-16  " >
            <h1 className="text-5xl font-bold text-gray-800" style={{fontFamily: "colasta, sans-serif"}}>
              Less Effort.<br /> More Results.
            </h1>
            <p className="mt-4 text-gray-600" >
              Unlock the power of Zigment to revolutionize your sales strategy.
            </p>
            <div className="mt-8" >
              <h2 className="text-xl font-semibold text-gray-800" style={{fontFamily: "Instrument, sans-serif"}}>{`Leverage Zigment's cutting-edge AI to:`}</h2>
              <ul className="text-gray-600 mt-4 space-y-2 [&>li]:flex [&>li]:gap-2 [&>li]:items-center tracking-wide text-lg" 
                
              >
                <li><IoIosCheckmarkCircleOutline className="text-primary w-6 h-6 shrink-0" /> Engage across platforms with AI-driven conversations.</li>
                <li><IoIosCheckmarkCircleOutline className="text-primary w-6 h-6 shrink-0" /> Broaden your audience with personalized content.</li>
                <li><IoIosCheckmarkCircleOutline className="text-primary w-6 h-6 shrink-0" /> Simplify engagement with unified solutions.</li>
                <li><IoIosCheckmarkCircleOutline className="text-primary w-6 h-6 shrink-0" /> Boost engagement and conversion.</li>
              </ul>
            </div>
            <div className="mt-8">
              <div className="flex items-center">
                <div className=" p-8 bg-white rounded-xl border border-border shadow-md">
                  <Image width={500} height={500} src={testimonies[testimony]?.img} alt="Testimonial portrait" className="w-24 h-24 object-contain rounded-full" />
                  <p className="mt-4 font-medium text-lg" style={{fontFamily: "Instrument, sans-serif"}}>{`"${testimonies[testimony]?.testimony}"`}</p>
                  <p className="mt-2 text-gray-800 font-semibold">{testimonies[testimony]?.name}</p>
                  <p className="text-gray-600 text-md" style={{fontFamily: "colasta, sans-serif"}}>{testimonies[testimony]?.designation}</p>
                  <div className="flex items-center gap-2 mt-4">
                    {testimonies.map((x, i) => (
                      <div
                        onClick={() => setTestimony(i)}
                        key={i}
                        className={`block cursor-pointer rounded-full w-3 h-3 ${i === testimony ? 'bg-action' : 'bg-gray-400'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-xl mx-auto py-16">

                <h1 className="text-4xl font-bold mb-6" style={{fontFamily: "colasta, sans-serif"}}>It all starts here!
                </h1>

                <div className="space-y-4"  >
                  <div>
                    <label htmlFor="fullName" className={labelStyle}>
                      Full Name <span className="text-red-500 text-base">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      required
                      className={inputStyle}
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName}</span>}
                  </div>
                  <div>
                    <label htmlFor="email" className={labelStyle}>
                      Email <span className="text-red-500 text-base">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className={inputStyle}
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                  </div>
                  <div className="w-full flex gap-2">
                    <div className="w-full">
                      <label htmlFor="role" className={labelStyle}>
                        Role <span className="text-red-500 text-base">*</span>
                      </label>
                      <select
                        id="role"
                        name="role"
                        required
                        className={inputStyle}
                        value={formData.role}
                        onChange={handleChange}
                      >
                        <option disabled value="">
                          Please Select
                        </option>
                        <option>CEO</option>
                        <option>Founder</option>
                        <option>Manager</option>
                        <option>Other</option>
                      </select>
                      {errors.role && <span className="text-red-500 text-xs">{errors.role}</span>}
                    </div>
                    <div className="w-full">
                      <label htmlFor="industry" className={labelStyle}>
                        Industry <span className="text-red-500 text-base">*</span>
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        required
                        className={inputStyle}
                        value={formData.industry}
                        onChange={handleChange}
                      >
                        <option disabled value="">
                          Please Select
                        </option>
                        <option>Technology</option>
                        <option>Finance</option>
                        <option>Retail</option>
                        <option>Healthcare</option>
                        <option>Other</option>
                      </select>
                      {errors.industry && <span className="text-red-500 text-xs">{errors.industry}</span>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="companyUrl" className={labelStyle}  >
                      Company URL <span className="text-red-500 text-base">*</span>
                    </label>
                    <input
                      id="companyUrl"
                      type="url"
                      name="companyUrl"
                      placeholder="Company URL"
                      required
                      className={inputStyle}
                      value={formData.companyUrl}
                      onChange={handleChange}
                    />
                    {errors.companyUrl && <span className="text-red-500 text-xs">{errors.companyUrl}</span>}
                  </div>
                  <div>
                    <label htmlFor="country" className={labelStyle}>
                      Country <span className="text-red-500 text-base">*</span>
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      className={inputStyle}
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option disabled value="">
                        Please Select
                      </option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                      <option>India</option>
                      <option>Other</option>
                    </select>
                    {errors.country && <span className="text-red-500 text-xs">{errors.country}</span>}
                  </div>

                  <div>
                    <label htmlFor="additionalInfo" className={labelStyle}>
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      placeholder="Tell us more..."
                      rows={3}
                      className={inputStyle}
                      value={formData.additionalInfo}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="block font-sm text-gray-600 font-medium" >
                    I agree to the <Link href={`/terms-of-service`} className="text-blue-400">Terms of Service</Link>  and {' '}
                    <Link href={`privacy-policy`} className="text-blue-400">Privacy Policy.</Link>
                    
                  </div>
                  <Button
                    onClick={handleSubmit}
                    size="lg"
                    variant={'primary'}
                  >
                      Submit                    
                  </Button>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}
