/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  setQrValue: Dispatch<SetStateAction<string>>;
};

const SmsComponent = ({ setQrValue }: Props) => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const smsFormat = `SMSTO:${phone}:${message}`;
    setQrValue(smsFormat); // Set QR code to VCard format
  }, [phone, message]);

  return (
    <div className="space-y-2">
      <label className="block font-bold text-sm text-gray-500">
        Your Phone Number
      </label>
      <input
        className="border-2 focus:border-brand-orange-main outline-none focus:ring-0  px-2 rounded w-full  "
        placeholder="+91 9999999999"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <label className="block font-bold text-sm text-gray-500  ">
        Message
      </label>
      <textarea
        className="border-2 focus:border-brand-orange-main outline-none focus:ring-0  px-2 rounded w-full  "
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
      />
    </div>
  );
};

export default SmsComponent;
