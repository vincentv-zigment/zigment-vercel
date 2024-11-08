/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Country, ICountry } from "country-state-city";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FixedSizeList as List } from "react-window";
import CountryCodeDropdown from "../country-code-drop-down";

const DEBOUNCE_DELAY = 300; // Adjust the delay as needed

type PropsI = {
  state: any;
  setState: (value: any) => void;
  formValidation?: any;
  setPhoneCode: (value: any) => void
  className?: string
  placeholder?: string;
  initphoneCodeValue?:string
};

export default function PhoneNumberInput({
  state,
  setState,
  formValidation,
  setPhoneCode,
  className = 'block w-full rounded-md border-gray-300  px-2 py-2 focus:border-brand-orange-main focus:ring-brand-orange-main sm:text-sm text-left ring-2',
  placeholder = "9999-999999",
  initphoneCodeValue = "IN"
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

  // input state for searching the country code
  const [inputValue, setInputValue] = useState("");

  // for opening the modal
  const [show, setShow] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  const [filtered, setFiltered] = useState<ICountry[]>([]);

  useEffect(() => {
    const query = inputValue.trim().toLowerCase();
    const countries = Country.getAllCountries();
    if (countries) {
      setFiltered(() => {
        return query === ""
          ? countries
          : countries.filter(
            (country: ICountry) =>
              country.name.toLowerCase().includes(query) ||
              country.phonecode.toLowerCase().includes(query) || 
              country.isoCode.toLowerCase().includes(query) 
          );
      });
    }
  }, [inputValue]);


  const handleSelect = (choice: ICountry) => {
    setSelected(choice);
  };

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  const handleDebouncedChange = (value: string) => {
    setInputValue(value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    clearTimeout(timeoutRef.current as number); // Clear any existing timeout
    timeoutRef.current = setTimeout(
      () => handleDebouncedChange(query),
      DEBOUNCE_DELAY
    ) as any;
  };

  useEffect(() => {
    // Cleanup the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutRef.current as number);
    };
  }, []);

  // List Component
  const Row = ({ index, style }: any) => (
    <div
      style={style}
      className="hover:bg-gray-100 p-1 cursor-pointer flex items-center justify-between rounded-md px-2"
      onClick={() => handleSelect(filtered[index])}
    >
      <div className="flex items-center divide-x-2">
        <span className="w-16">{filtered[index].phonecode}</span>
        <span className="w-8 text-center">{filtered[index].isoCode}</span>
        <span className="px-2">{filtered[index].name}</span>
      </div>
      {filtered[index].name === selected.name &&
        filtered[index].phonecode === selected.phonecode && (
          <button className="p-1 bg-brand-orange-main rounded-full">
            <CheckIcon className="w-3 h-3 bg-brand-orange-main text-white rounded-full " />
          </button>
        )}
    </div>
  );

  const handleStateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return (
    <div className="relative w-full" >
      <div className={`relative w-full rounded-md  flex items-center gap-2
        
      `}>
        <CountryCodeDropdown
          className={className}
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
