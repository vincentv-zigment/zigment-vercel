/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

export interface QRColors {
  singleColor: string;
  gradientColor: string;
  backgroundColor: string;
}

type Props = {
  setQrValue: Dispatch<SetStateAction<string>>;
};

const WifiComponent = ({ setQrValue }: Props) => {
  const [ssid, setSsid] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [encryption, setEncryption] = useState<string>("nopass"); // Initializing the encryption state

  useEffect(() => {
    const wifiQrString = `WIFI:T:${encryption};S:${ssid};P:${password};;`; // Construct the QR code string
    setQrValue(wifiQrString); // Update the QR code value
  }, [encryption, ssid, password]); // Re-run useEffect when these dependencies change

  // Define handleEncryptionChange to update the encryption type
  const handleEncryptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEncryption(e.target.value);
  };

  return (
    <div className=" space-x-4 grid grid-cols-3 w-full">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">
          Wireless SSID
        </label>
        <input
          type="text"
          className="border-2 border-border focus:border-primary outline-none focus:ring-0  p-2 w-full mt-2 rounded-md"
          value={ssid}
          onChange={(e) => setSsid(e.target.value)}
        />
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          className="border-2 border-border focus:border-primary outline-none focus:ring-0  p-2 w-full mt-2 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">
          Encryption
        </label>
        <select
          value={encryption}
          onChange={handleEncryptionChange}
          className="border-2 border-border focus:border-primary outline-none focus:ring-0  p-2 w-full mt-2 rounded-md"
        >
          <option value="nopass">No Encryption</option>
          <option value="WEP">WEP</option>
          <option value="WPA/WPA2">WPA/WPA2</option>
        </select>
      </div>
    </div>
  );
};

export default WifiComponent;
