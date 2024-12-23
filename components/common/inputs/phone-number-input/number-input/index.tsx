import { Country, ICountry } from "country-state-city";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import CountryCodeDropdown from "../country-code-drop-down";


type PropsI = {
  state: string;
  setState: (value: string) => void;
  formValidation?: { error: boolean; message?: string };
  setPhoneCode: (value: string) => void
  className?: string
  placeholder?: string;
  initphoneCodeValue?:string
  countryCodeClassName?:string
};

export default function PhoneNumberInput({
  state,
  setState,
  formValidation,
  setPhoneCode,
  className = 'block w-full rounded-md border-gray-300  px-2 py-2 focus:border-brand-orange-main focus:ring-brand-orange-main sm:text-sm text-left ring-2',
  placeholder = "9999-999999",
  initphoneCodeValue = "IN",
  countryCodeClassName = "w-20"
}: PropsI) {
  const [selected, setSelected] = useState<ICountry>(
    Country.getCountryByCode(initphoneCodeValue) ?? Country.getAllCountries()[0]
  );

  useEffect(() => {
    setSelected(Country.getCountryByCode(initphoneCodeValue) ?? Country.getAllCountries()[0])
  },[initphoneCodeValue])

  useEffect(() => {
    setPhoneCode(`+${selected.phonecode}`)
  }, [selected])



  const timeoutRef = useRef<number | null>(null);



 





 
   

  useEffect(() => {
    // Cleanup the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutRef.current as number);
    };
  }, []);

   

  const handleStateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return (
    <div className="relative w-full" >
      <div className={`relative w-full rounded-md  flex items-center gap-2
        
      `}>
        <CountryCodeDropdown
          className={countryCodeClassName}
          initphoneCodeValue={initphoneCodeValue}
          setPhoneCode={setPhoneCode}
          formValidation={formValidation}
        />
        
        <input
          type="number"
          name="phone-number"
          id="phone-number"
          className={` 
          ${formValidation && formValidation.error
              ? "ring-red-500 border-red-500"
              : "ring-transparent"
            } ${className}
          `}
          placeholder={placeholder}
          value={state}
          onChange={handleStateChange}
        />
      </div>

    </div>
  );
}
