import { Dispatch, SetStateAction, useEffect, useState } from "react";
 

export interface QRColors {
  singleColor: string;
  gradientColor: string;
  backgroundColor: string;
}

type Props = {
  setQrValue: Dispatch<SetStateAction<string>>;
};

const BitCoinComponent = ({ setQrValue }: Props) => {
  const [selectedCrypto, setSelectedCrypto] = useState<string>("Bitcoin");
  const [address, setAddress] = useState<string>(
    "1FwFqqh71mUTENcRe9q4s9AWFgoc8BA9ZU"
  );
  const [amount, setAmount] = useState<string>("");

  useEffect(() => {
    const scheme = selectedCrypto.toLowerCase();
    const baseUrl = `${scheme}:${address}`; // Base URL for Bitcoin payment
    const queryParams = amount ? `?amount=${amount}` : ""; // Optional query parameter for the amount
    const fullUrl = `${baseUrl}${queryParams}`;

    setQrValue(fullUrl); // Set the QR code value with the constructed Bitcoin URL
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, amount, selectedCrypto]); // Dependencies

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between">
        {["Bitcoin", "Bitcoin Cash", "Ethereum", "Litecoin", "Dash"].map(
          (crypto, idx) => (
            <label key={idx} className="inline-flex items-center">
              <input
                type="radio"
                name="crypto"
                value={crypto}
                checked={selectedCrypto === crypto}
                onChange={() => setSelectedCrypto(crypto)}
                className="form-radio"
              />
              <span className="ml-2">{crypto}</span>
            </label>
          )
        )}
      </div>
      <div className="flex flex-col justify-start items-start space-y-4 w-full ">
        <div className="w-full">

          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            value={address}
            placeholder="1FwFqqh71mUTENcRe9q4s9AWFgoc8BA9ZU"
            onChange={(e) => setAddress(e.target.value)}
            className="border-2 p-2  focus:border-primary outline-none focus:ring-0  px-2 rounded w-full mt-2"
          />
        </div>
        <div className="w-full">

        <label className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border-2 p-2  focus:border-primary outline-none focus:ring-0  px-2 rounded w-full mt-2"
        />
        </div>
      </div>
    </div>
  );
};

export default BitCoinComponent;
