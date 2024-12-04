import Spinner from '@/components/common/loaders/spinner';
import { useToast } from '@/hooks/useToast';
import { Marketing_Lead_Source } from '@/lib/types/ui';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChangeEvent, MouseEvent, useState } from 'react';

const inputStyle = 'p-2 mb-1 shadow-sm focus:ring-brand-orange-main focus:border-brand-orange-main block w-full sm:text-sm border-2 border-gray-500 rounded-sm disabled:opacity-30 disabled:cursor-not-allowed';

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

function AIReport() {
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
    setErrors((prevErrors) => ({
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
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/cms/new-lead`,
          {

            name: formData.fullName,
            email: formData.email,
            role: formData.role,
            company_name: formData.companyUrl,
            country: formData.country,
            industry: formData.industry,
            requirements: formData.additionalInfo,
            source: Marketing_Lead_Source.REPORT,
            source_detail: 'AI-REPORT',

          }
        );
        // setIsSubmitted(true)
        addToast('success', 'Thank you for Submitting, Redirecting to  ')
        router.push('/book-a-call')
      } catch (error) {
        console.log(error, "error");
      } finally {
        setLoading(false)
      }
    }
  };

  return (
    <>
      <div className="w-full bg-brand-orange-mainbg mt-10 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-10 w-full max-w-4xl mx-auto">
          <div className="p-5">
            <Image
              src="https://placehold.co/600x400"
              alt="Bar chart showing AI impact on business"
              className="mb-4"
            />
            <div className="border-4 border-white px-6 pt-2 pb-4">
              <h2 className="font-semibold text-2xl mb-4">What you will learn:</h2>
              <ul className="list-disc text-xs ml-5 space-y-4 custom-list-style">
                <li>The most impactful tools their teams are using</li>
                <li>{`How much they've budgeted for **AI Research & Development**`}</li>
                <li>Which part of their industry they think **will be impacted most** (and least)</li>
                <li>The measurable impact AI is having on their businesses</li>
                <li>And Much More!</li>
              </ul>
            </div>
          </div>
          <div className="p-5 text-sm">
            <h1 className="text-4xl font-bold mb-6">2024 AI & Business Report: Uses, Tools, and Business Impact</h1>
            <p className="mb-6">
              Hampton is a private community for CEOs and founders, many of whom are using AI in their business.
            </p>
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
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
              <div>
                <label htmlFor="companyUrl" className="block text-sm font-medium text-gray-700 mb-2">
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
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
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
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
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
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
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
              <button
                onClick={handleSubmit}
                className="px-10 py-2 mx-auto text-center border-2 border-brand-orange-main bg-brand-orange-main text-white hover:text-brand-orange-main hover:bg-transparent rounded-md font-medium transition-all disabled:bg-brand-orange-mainbg"
                disabled={loading}
              >
                {loading ? <Spinner color='text-brand-orange-main' /> :
                  'Submit'
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AIReport;
