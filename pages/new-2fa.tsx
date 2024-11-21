// pages/VerifyIdentity.js or components/VerifyIdentity.js

import Image from "next/image";

export default function VerifyIdentity() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-lg max-w-sm w-full">
          <div className="flex items-center justify-center mb-6">
            <Image
              width={500}
              height={500}
              src="https://placehold.co/50x50"
              alt="Twilio logo"
              className="h-12"
            />
          </div>
          <h2 className="text-lg font-semibold text-center mb-2">
            Verify Your Identity
          </h2>
          <p className="text-sm text-center mb-4">
            {`We've sent a text message to:`}
          </p>
          <div className="mb-4 space-y-2">
            <input
              type="text"
              value="Phone ending in 1686" // Using value attribute to set the text
              className=" block w-full px-4 h-[52px] py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-orange-main focus:border-brand-orange-main sm:text-lg appearance-none"
              disabled // This makes the input non-editable
              style={{ backgroundColor: "#f3f4f6" }} // Optional: background color for disabled input
            />
            <input
              type="text"
              placeholder="Enter the 6-digit code*"
              className="appearance-none block w-full px-4 h-[52px] py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-orange-main focus:border-brand-orange-main sm:text-lg"
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm">
                Remember this browser for 30 days
              </span>
            </label>
          </div>
          <button className="w-full px-4 py-2 text-white bg-brand-orange-main rounded hover:bg-brand-orange-main focus:outline-none focus:shadow-outline">
            Continue
          </button>
          <p className="mt-4 text-sm text-center">
            {`Didn't receive a code?`}{" "}
            <a href="#" className="text-brand-orange-main hover:text-brand-orange-main">
              Resend
            </a>{" "}
            or{" "}
            <a href="#" className="text-brand-orange-main hover:text-brand-orange-main">
              get a call
            </a>
          </p>
          <p className="mt-2 text-sm text-center">
            <a href="#" className="text-brand-orange-main hover:text-brand-orange-main">
              Try another method
            </a>
          </p>
          <p className="mt-4 text-xs text-center text-gray-500">
            Terms of service | Privacy policy
          </p>
        </div>
      </div>
    </>
  );
}