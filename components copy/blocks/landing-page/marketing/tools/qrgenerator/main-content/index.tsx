/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export interface QRColors {
  singleColor: string;
  gradientColor: string;
  backgroundColor: string;
}

type Props = {
  setQrValue: Dispatch<SetStateAction<string>>;
};

// MainContent component using TypeScript
const MainContent = ({ setQrValue }: Props) => {
  const [inputValue, setInputValue] = useState("https://example.com");

  useEffect(() => {
    setQrValue(inputValue); // Update QR value whenever inputValue changes
  }, [inputValue]);

  return (
    <input
      type="text"
      className="border-2 focus:border-brand-orange-main outline-none focus:ring-0 p-2 rounded w-full "
      placeholder="Enter URL here"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default MainContent;
