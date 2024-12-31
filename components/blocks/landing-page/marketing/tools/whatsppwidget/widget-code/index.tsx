import { useToast } from "@/hooks/useToast";
import { initError, useWhatsappWidgetContext, WidgetDataI } from "@/pages/tools/whatspp-widget";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { useMutation } from "react-query";
import ClipLoader from "react-spinners/ClipLoader";
import validator from "validator";

 

const GetWidgetCode = ( ) => {
  
  const {errorState,setErrorState,widgetData} = useWhatsappWidgetContext()
  const [email, setEmail] = useState("");
  const [widgetCode, setWidgetCode] = useState("");
  const codeRef = useRef<HTMLPreElement>(null);



  const BASE_URL = 'https://fsfki8lqzd.execute-api.us-east-1.amazonaws.com/users';
  const CDN_URL = 'https://cdn.zigment.ai/whatsapp-custom-widget';

  const fetchWidgetCode = async ({countryCode, ...rest}: WidgetDataI) => {
    const postData = {...rest, phoneNumber: countryCode + rest.phoneNumber, email};
    const response = await axios.post(BASE_URL, postData);
    return response.data;
  };

  const mutation = useMutation(fetchWidgetCode, {
    onSuccess: (data) => {
      const { userId } = data;
      setWidgetCode(`<script src="${CDN_URL}/load.js?id=${userId}"></script>`);
    },
    onError: (error) => {
      console.error('Error creating widget:', error);
      setErrorState({
        ...errorState,
        fetchError: "There was an error creating the widget"
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validator.isMobilePhone(widgetData.phoneNumber)) {
      setErrorState({
        ...errorState,
        phoneNumber: "Please enter a valid phone number"
      });
      return;
    }

    if(!validator.isEmail(email)) {
      setErrorState({
        ...errorState,
        email: "Please enter a valid email"
      });
      return;
    }
    setErrorState(initError);
    mutation.mutate(widgetData);
  };

  const { addToast } = useToast();

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.style.width = "100%";
      codeRef.current.style.maxWidth = "100%";
      codeRef.current.style.height = `${codeRef.current.scrollHeight}px`;
    }
  }, [widgetCode]);

  return (
    <div className="flex flex-col items-start p-4 md:p-8 bg-white mb-4 rounded-lg">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        Step 3 - Add the code to your website
      </h2>
      <p className="text-lg font-medium mb-2">Get Widget Code</p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mb-2 relative">
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`px-3 py-2 pr-10  border-2  ${errorState.email  ? 'border-red-500' : 'focus:border-brand-orange-main'} outline-none focus:ring-0 p-2 rounded w-full sm:text-sm md:w-80 lg:w-96`}
          />
        </div>
        {errorState.email && <p className="text-red-500 ">{errorState.email}</p>}
        {errorState.phoneNumber && <p className="text-red-500 ">{errorState.phoneNumber}</p>}
        {errorState.fetchError && <p className="text-red-500 ">{errorState.fetchError}</p>}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 w-full text-white rounded bg-orange-400 hover:bg-brand-orange-main"
          >
            {mutation.isLoading ? (
              <ClipLoader
                color="#ffffff"
                loading={mutation.isLoading}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              'Get Code'
            )}
          </button>
        </div>
      </form>
      {widgetCode && (
        <div className="mt-4 relative w-full">
          <h3 className="text-lg font-semibold mb-1">Copy the code below:</h3>
          <pre
            ref={codeRef}
            className="bg-gray-100 p-4 rounded text-sm overflow-auto"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
          >
            <code>{widgetCode}</code>
          </pre>
          <button
            onClick={() => {
              navigator.clipboard.writeText(widgetCode);
              addToast("info", "success");
            }}
            className="absolute top-0 right-0 mt-2 mr-2 flex items-center justify-center text-blue-500"
          >
            <MdContentCopy size={20} className="text-brand-orange-main" />
          </button>
        </div>
      )}
      <p className="text-gray-500 text-sm mt-4">
        We will send the code to your email.
      </p>
      <p className="text-gray-500 text-sm">
        <strong>Please note:</strong> By clicking &quot;Get Code&quot; you agree to this website&apos;s{" "}
        <Link href="/privacy-policy"  id="privacy-policy" className="text-blue-500 underline">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
};

export default GetWidgetCode;