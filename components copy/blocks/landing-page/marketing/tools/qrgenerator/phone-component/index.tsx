/* eslint-disable react-hooks/exhaustive-deps */
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from "react";
 
type Props = {
  setQrValue: Dispatch<SetStateAction<string>>;
};

const PhoneComponent = ({ setQrValue }: Props) => {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    // Format the phone number in URI scheme for QR codes
    const phoneFormat = `tel:${phone}`;
    setQrValue(phoneFormat); // Update QR code to phone call format
  }, [phone]);

  return (
    <div>
      <label className="block font-bold text-sm text-gray-500">
        Your Phone
      </label>
      <input
        className="border-2 focus:border-brand-orange-main outline-none focus:ring-0 w-full  px-2 rounded h-10 mt-2"
        placeholder="+91 9999999999"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
  );
};

export default PhoneComponent;
