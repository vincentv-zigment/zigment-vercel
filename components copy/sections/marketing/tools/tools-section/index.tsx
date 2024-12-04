import { ToolsI } from '@/pages/tools';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconType } from 'react-icons/lib';
import { TbUnlink } from "react-icons/tb";
type Props = {
    data:ToolsI[]
}

const iconMap: { [key: string]: IconType } = {
    TbUnlink,
  };

const ToolsSections = ({data}: Props) => {
  return (
    <div className="mt-10  w-full gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left sm:p-4 md:p-0">
            {data.map((tools_data) => (
              <div
                key={`free_tools_${tools_data.id}`}
                className="flex flex-col overflow-hidden     rounded-2xl   group cursor-pointer"
              >
                <div className="flex items-center justify-center  bg-white mb-6 rounded-2xl p-4 h-64  " onClick={()=>{
                  window.location.href = tools_data.link;
                }}>
                  
                  {tools_data.logo && (
                    <Image
                      width={200}
                      height={200}
                      className="h-full w-full object-contain   p-4 rounded-2xl group-hover:opacity-50"
                      src={tools_data.logo}
                      alt=""
                    />
                  )}
                  {tools_data.icon && 
                    <Link href={tools_data.link} className="group-hover:opacity-50">
                      {React.createElement(iconMap[tools_data.icon], { className: "w-36 h-36 " })}
                    </Link>
                    }

                </div>
                <div className="flex flex-1 flex-col justify-between  px-2">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-800">
                      <Link
                        href={`${tools_data.link}`}
                        className="hover:underline"
                      >
                        {tools_data.sub_title}
                      </Link>
                    </p>
                    <Link href={`${tools_data.link}`} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">
                        {tools_data.name}
                      </p>
                      <p className="mt-3 text-base text-gray-600 group-hover:text-indigo-800 overflow-hidden">
                        {tools_data.description}
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href={`${tools_data.link}`}
                    className="group mx-auto lg:mx-0 inline-flex items-center space-x-2.5 font-semibold   rounded-full hover:bg-primary hover:text-white border border-primary transition duration-200 py-2 px-4 "
                  >
                    <span>Try Now</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 lg:w-6 lg:h-6 group-hover:fill-brand-blue group-hover:translate-x-2 transition duration-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
  )
}

export default ToolsSections