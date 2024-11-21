/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  setQrValue: Dispatch<SetStateAction<string>>;
};

const TwitterComponent = ({ setQrValue }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string>("Twitter URL");
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    let updatedQRValue: string = "";

    if (selectedOption === "Twitter URL") {
      updatedQRValue = url; // QR code for Twitter profile or page
    } else if (selectedOption === "Tweet") {
      updatedQRValue = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        url
      )}`; // QR code for tweeting with the provided text
    }

    setQrValue(updatedQRValue); // Update QR code value
  }, [selectedOption, url]); // Re-run when the selected option or URL changes

  return (
    <div>
      <div className="flex space-x-2 items-center mb-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="urlOption"
            value="Twitter URL"
            checked={selectedOption === "Twitter URL"}
            onChange={() => setSelectedOption("Twitter URL")}
          />
          <span className="ml-2">Twitter URL</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="urlOption"
            value="Tweet"
            checked={selectedOption === "Tweet"}
            onChange={() => setSelectedOption("Tweet")}
          />
          <span className="ml-2">Tweet</span>
        </label>
      </div>
      <label className="block font-bold text-sm mb-2 cursor-default text-gray-500">
        {selectedOption === "Twitter URL"
          ? "Your Twitter URL"
          : "Share your URL on Twitter"}
      </label>
      {selectedOption === "Tweet" ? (
        <textarea
          className="border-2 p-2  focus:border-primary outline-none focus:ring-0  px-2 rounded w-full mt-2" // Adjusted height for textarea
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          rows={5}
          placeholder="Compose your tweet..."
        />
      ) : (
        <input
          className="border-2 p-2  focus:border-primary outline-none focus:ring-0  px-2 rounded w-full mt-2"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to share"
        />
      )}
    </div>
  );
};

export default TwitterComponent;
