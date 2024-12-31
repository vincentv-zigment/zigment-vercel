import PhoneNumberInput from "@/components/common/inputs/phone-number-input/number-input";
import Spinner from "@/components/common/loaders/spinner";
import Modal from "@/components/common/ModalN";
import { link_title } from "@/components/sections/marketing/demo/demo-agent-section";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/useToast";
import { Marketing_Lead_Source } from "@/lib/types/ui";
import { personalEmailDomains } from "@/lib/utils";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import React, { Dispatch, SetStateAction, useState } from "react";

type Props = {
  selectedChannelLink: () => void;
  selectedChannel: link_title | null;
  setShowDemoForm: Dispatch<SetStateAction<boolean>>;
  showDemoForm: boolean;
};

type FormData = {
  email: string;
  companyName: string;
  full_name: string;
  phone: string;
};

type Errors = {
  full_name: boolean;
  email: boolean;
  companyName: boolean;
  phone: boolean;
  message?: string;
};

const inputStyle = `block w-full rounded-md border border-gray-200 bg-white shadow-sm px-4 py-3 focus:border-brand-orange-main focus:ring-brand-orange-main sm:text-sm text-left ring-1 placeholder:font-[400] placeholder:text-gray-400 rounded-xl`;

const TextInput = ({
  value,
  name,
  placeholder,
  error,
  onChange,
}: {
  value: string;
  name: string;
  placeholder: string;
  error: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <input
    type="text"
    value={value}
    name={name}
    className={`${inputStyle} ${
      error ? "ring-red-500 border-red-500" : "ring-transparent"
    }`}
    onChange={onChange}
    placeholder={placeholder}
  />
);

// Email validation helper function
const validateEmail = (
  email: string
): { isValid: boolean; message: string } => {
  // Basic email format check
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, message: "Please enter a valid email address" };
  }

  const domain = email.split("@")[1].toLowerCase();
  if (personalEmailDomains.includes(domain)) {
    return { isValid: false, message: "Please use your company email address" };
  }

  return { isValid: true, message: "" };
};

// Phone validation helper function
const validatePhone = (phone: string, countryCode: string): boolean => {
  if (countryCode === "1") {
    // US phone validation
    return phone.length === 10;
  }
  // Add other country-specific validations here
  return phone.length >= 8 && phone.length <= 15;
};

const DemoForm = ({
  selectedChannel,
  selectedChannelLink,
  setShowDemoForm,
  showDemoForm,
}: Props) => {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [phonecode, setPhonecode] = useState("1");
  const [errors, setErrors] = useState<Errors>({
    full_name: false,
    email: false,
    companyName: false,
    phone: false,
    message: "",
  });
  const [formData, setFormData] = useState<FormData>({
    email: "",
    companyName: "",
    full_name: "",
    phone: "",
  });

  const handleValidation = (): boolean => {
    let isValid = true;
    const newErrors: Errors = {
      full_name: false,
      email: false,
      companyName: false,
      phone: false,
      message: "",
    };

    // Company name validation
    if (formData.companyName.trim() === "") {
      newErrors.companyName = true;
      newErrors.message = "Company name is required";
      isValid = false;
    }

    // Full name validation
    if (formData.full_name.trim() === "") {
      newErrors.full_name = true;
      newErrors.message = "Full name is required";
      isValid = false;
    }

    // Email validation
    const emailValidation = validateEmail(formData.email.trim());
    if (!emailValidation.isValid) {
      newErrors.email = true;
      newErrors.message = emailValidation.message;
      isValid = false;
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = true;
      newErrors.message = "Phone number is required";
      isValid = false;
    } else if (!validatePhone(formData.phone, phonecode)) {
      newErrors.phone = true;
      newErrors.message = "Please enter a valid phone number";
      isValid = false;
    }

    setErrors(newErrors);
    if (!isValid && newErrors.message) {
      addToast("error", newErrors.message);
    }
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loading) {
      setLoading(true);

      if (handleValidation()) {
        try {
          await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/cms/new-lead`, {
            name: formData.full_name,
            email: formData.email,
            company_name: formData.companyName,
            phone: `+${phonecode}${formData.phone}`,
            source: Marketing_Lead_Source.DEMO,
            source_detail: selectedChannel,
          });

          selectedChannelLink();
          addToast("success", "Demo request submitted successfully!");
        } catch (error__) {
          console.error(error__);
          addToast("error", "Something went wrong, Please try again");
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }
  };

  return (
    <Modal
      open={showDemoForm}
      setOpenModal={setShowDemoForm}
      height={600}
      width="lg"
      className="rounded-lg md:rounded-xl"
      zIndex={100}
    >
      <div
        id="demo-form"
        className="flex flex-col w-full h-full p-2 sm:p-4 md:p-6 items-center justify-center"
      >
        <button
          onClick={() => setShowDemoForm(false)}
          className="p-1 md:p-2 hover:bg-gray-200 bg-gray-100 rounded-md absolute top-3 right-3"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
        <div className="sm:flex w-full sm:items-start">
          <div className="mt-3 text-center w-full sm:mt-0 sm:text-center">
            <h3 className="text-3xl font-bold leading-6 text-gray-900">
              {`Let's get this demo started`}
            </h3>
            <p className="text-sm mt-4">
              But first, we need some info. Share a few details in the form
              below so we can better help you and your company
            </p>
            <div className="mt-8 w-full space-y-6">
              <TextInput
                value={formData.companyName}
                name="companyName"
                placeholder="Company Name..."
                error={errors.companyName}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
              <TextInput
                value={formData.full_name}
                name="full_name"
                placeholder="Full Name"
                error={errors.full_name}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
              <TextInput
                value={formData.email}
                name="email"
                placeholder="Work Email"
                error={errors.email}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
              <div className="relative">
                <PhoneNumberInput
                  state={formData.phone}
                  setPhoneCode={setPhonecode}
                  setState={(val) => setFormData({ ...formData, phone: val })}
                  formValidation={{ error: errors.phone }}
                  className={`${inputStyle}`}
                  placeholder="Phone Number (Required)"
                  initphoneCodeValue="US"
                  countryCodeClassName={`${inputStyle}`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full">
          <Button
            variant={"primary"}
            size={"sm"}
            className="w-full"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <Spinner color="" /> : "Continue"}
          </Button>
          <div className="text-center text-xs mt-6">
            We respect your privacy & information
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DemoForm;
