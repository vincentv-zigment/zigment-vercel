import { ClockIcon, XMarkIcon } from '@heroicons/react/20/solid'
import React, { Dispatch, SetStateAction } from 'react'
import fontColorContrast from 'font-color-contrast'
import { CompanyDataI } from './ChatRightAway'
import Image from 'next/image'

type Props = {
    companyData:CompanyDataI
    setOpen: Dispatch<SetStateAction<boolean>>
}

const ChatBotnavbar = ({
    companyData,
    setOpen
}: Props) => {
  return (
    <>
        {companyData && companyData.data && 
            <div
                className="p-2 relative drop-shadow-md items-center flex w-full justify-between bg-action"
                >

                    <div className="flex gap-2 p-1   items-center">
                        <div className="flex rounded-full -space-x-2    justify-center overflow-hidden">
                            <Image
                                width={40}
                                height={40}
                                className="inline-block p-2 h-[40px] w-[40px]  bg-black   "
                                src={'/zigment_thumbnail_white.png'}
                                alt=""
                                 
                            />
                        </div>
                        <div className="text-left   ">
                            <p
                                className="text-sm font-semibold"
                                style={{
                                    color: fontColorContrast(companyData.data.background_color),
                                }}
                            >
                                {companyData.data?.heading ?? "Zigment AI"}
                            </p>
                            <p
                                className={`text-xs flex items-center gap-0.5 text-white`}
                                style={{
                                    color: fontColorContrast(companyData.data.background_color),
                                    opacity: 0.7,
                                }}
                            >
                                <ClockIcon className="w-4 h-4 stroke-white" />
                                {companyData.data?.sub_heading ?? "Responds Instantly"}
                            </p>
                        </div>
                    </div>
                    <button className="z-[1000] sm:hidden  mr-4 bg-white/20 hover:bg-white/30 rounded-md p-1" onClick={() => setOpen(false)}>
                        <XMarkIcon className="text-white w-5 h-5 fill-white " />
                    </button>
            </div>
        }
    </>
  )
}

export default ChatBotnavbar