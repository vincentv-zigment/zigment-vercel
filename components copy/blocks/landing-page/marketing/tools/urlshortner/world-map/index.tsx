import React, { useEffect, useState } from 'react';
import countries from 'i18n-iso-countries';
import Flag from 'react-world-flags';
import WorldMap from "react-svg-worldmap";
import { countryToAlpha3 } from 'country-to-iso';


import enLocale from 'i18n-iso-countries/langs/en.json';
import { LinkData } from '@/lib/types/ui';
countries.registerLocale(enLocale);
 
type Props = {
  linkData: LinkData;
  data: { country: string; value: number }[];
}

const WorldMap1 = ({   linkData, data }: Props) => {
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [countryData, setCountryData] = useState<{ name: string; flagCode: string; clickPercentage: number }[]>([]);
  

  useEffect(()=>{
    // name: string;
    // flagCode: string;
    // clickPercentage: number;
    const newData = data.map((x)=>{
      return {
        name:countryToAlpha3(x.country) ?? '',
        flagCode:x.country,
        clickPercentage:(x.value/linkData.details.length)*100
      }
    })

    setCountryData(newData)
  },[data,linkData])

   console.log(data, 'data')

  const toggleDiv = () => setIsDivVisible(!isDivVisible);

  return (
    <div className="w-full h-fit p-2 my-4 border border-solid border-slate-200 rounded-b-lg rounded-t-lg overflow-hidden relative antialiased text-[20.8px] transition-all duration-300 ease-out bg-[#f9f9f9] scrollbar-track-white font-proximaNova"
       >
      {data && 
        <WorldMap
          color="rgb(255, 101, 89)"
          title=""
          value-suffix="people"
          size="xl"
          data={data}
          backgroundColor='#f9f9fa'
        />
      }
      <a className="inline-block relative cursor-pointer text-center w-full text-blue-500 no-underline align-middle text-sm font-semibold leading-snug bg-transparent antialiased"
          onClick={toggleDiv}>
          {isDivVisible ? 'Hide countries' : 'Show countries'}
        </a>
        {isDivVisible && (
          <div className="box-border mt-6 inline-block w-full  h-auto align-middle opacity-100 antialiased space-y-2">
            {countryData.map((data, index) => (
              <div key={index} className="flex items-center justify-between bg-brand-orange-main/60 hover:bg-brand-orange-main text-gray-800 px-4 py-2 text-sm font-semibold cursor-pointer rounded-md">
                <div className="flex items-center">
                  <Flag code={data.flagCode} style={{ width: '20px', height: '15px', marginRight: '10px' }} />
                  <span>{data.name}</span>
                </div>
                <span>{data.clickPercentage}%</span>
              </div>
            ))}
          </div>
        )}
     
    </div>
  );
};

export default WorldMap1;
