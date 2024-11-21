/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  setQrValue: Dispatch<SetStateAction<string>>;
};

const FacebookComponent = ({ setQrValue }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string>("facebookURL"); // State to handle radio selection
  const [url, setUrl] = useState<string>(""); // State to store the

  useEffect(() => {
    let updatedQRValue: string = "";

    if (selectedOption === "facebookURL") {
      updatedQRValue = url; // Use the given URL for Facebook profile
    } else if (selectedOption === "shareURL") {
      updatedQRValue = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`; // Use Facebook share URL
    }

    setQrValue(updatedQRValue);
  }, [selectedOption, url]); // Re-run when selected option or URL changes

  return (
    <div>
      <div className="flex space-x-2 items-center mb-4 ">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="urlOption"
            value="facebookURL"
            checked={selectedOption === "facebookURL"}
            onChange={() => setSelectedOption("facebookURL")}
          />
          <span className="ml-2">Facebook URL</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="urlOption"
            value="shareURL"
            checked={selectedOption === "shareURL"}
            onChange={() => setSelectedOption("shareURL")}
          />
          <span className="ml-2">Share URL</span>
        </label>
      </div>
      <label className="block font-bold text-sm mb-2 cursor-default text-gray-500">
        {selectedOption === "facebookURL"
          ? "Your Facebook URL"
          : "Share your URL on Facebook"}
      </label>
      <input
        className="border-2 p-2  focus:border-primary outline-none focus:ring-0  px-2 rounded w-full mt-2"
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder={
          selectedOption === "facebookURL"
            ? "Enter your Facebook URL"
            : "Enter URL to share"
        }
      />
    </div>
  );
};

export default FacebookComponent;
