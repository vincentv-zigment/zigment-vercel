/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useEffect, useState } from "react";
export interface QRColors {
  singleColor: string;
  gradientColor: string;
  backgroundColor: string;
}
// Dynamically import QRCodeManager with no SSR

type Props = {
  setQrValue: Dispatch<SetStateAction<string>>;
};

const YouTubeComponent = ({ setQrValue }: Props) => {
  const [inputValue, setInputValue] = useState("https://example.com");

  useEffect(() => {
    setQrValue(inputValue); // Update QR value whenever inputValue changes
  }, [inputValue]);

  useEffect(() => {
    setQrValue(inputValue);
  }, [inputValue]);

  return (
        <div>
          <label className="block font-bold text-sm mb-2 cursor-default text-gray-500">
            Your Youtube URL
          </label>

          <input
            className="border-2 p-2  focus:border-primary outline-none focus:ring-0  px-2 rounded w-full mt-2"
            type="text"
            value={inputValue}
            onChange={(e) => {
              setQrValue(e.target.value);
              setInputValue(e.target.value);
            }}
            placeholder="Enter URL to share"
          />
        </div>
  );
};

export default YouTubeComponent;
