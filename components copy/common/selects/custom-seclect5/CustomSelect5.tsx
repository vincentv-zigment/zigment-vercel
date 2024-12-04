import { Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'

 
type Props = {
    val: string,
    setVal: (value: string | undefined) => void,
    list: {
        id: number | string,
        label: string,
        value: string,
        icon?: string
    }[],
    inputRef?: React.RefObject<HTMLInputElement>
    required?: boolean,
    formValidation?: string | boolean,
    showButton?: boolean,
    buttonLabel?: string,
    buttonAction?: () => void,
    position?: 'top' | 'bottom',
    showLogos?: boolean
}

export default function CustomSelect5({
    val,
    setVal,
    list,
    formValidation,
    position = 'bottom',
    showButton,
    buttonAction,
    buttonLabel,
}: Props) {

    const [selectedVal, setSelectedVal] = useState<null | undefined | {
        id: number | string,
        label: string,
        value: string
    }>( list.find((x) => x.value === val) ?? null)
    const [initialSet, setInitialSet] = useState(false)

    useEffect(()=>{
        setSelectedVal(list.find((x) => x.value === val))
    },[val])


    useEffect(() => {
        if (list.length > 0 && !initialSet) {
            if (selectedVal === null || selectedVal === undefined) {
                const findItem = list.find((x) => x.value === val)
                if (findItem) {
                    setSelectedVal(findItem)
                    setInitialSet(true)
                }
            }
        }
    }, [val, list])
    useEffect(() => {

        setVal(selectedVal?.value)
    }, [selectedVal])

    const [open ,setOpen] = useState(false)

    return ( 
        <div className='flex flex-col w-full relative '>
            {
                list && list.length > 0 &&
                    
                <div className="relative  ">
                    <button
                        className={`
                            relative  w-full cursor-default rounded-md border border-gray-300 bg-white  py-2 pl-3 pr-10 text-left shadow-sm focus:border-brand-orange-main focus:outline-none focus:ring-1 focus:ring-brand-orange-main sm:text-sm ${formValidation && `${formValidation ? 'ring-red-500 ring-1 border-red-500' : 'ring-transparent border-gray-300 '}`}
                        `}
                        onClick={()=>setOpen(!open)}
                    >
                        <span className="block truncate  text-base ">{selectedVal?.label}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                    </button>

                    <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className={`absolute z-10 ${position === 'top' && 'bottom-10'} max-h-64 nowheel notrack w-full overflow-y-scroll   rounded-md bg-white p-1 text-base shadow-lg ring-1   ring-black ring-opacity-5 focus:outline-none sm:text-sm customscroll`} style={{overflowY: 'auto'}}>
                            <div className='relative '>
                                {list && list.map((x) => {
                                    return (
                                        <>


                                            <button
                                                key={`${x.id}-${x.value}-${x.label}-customselect-key`}
                                                className={`relative w-full text-base  select-none  py-2 pl-3 pr-9 cursor-pointer hover:bg-brand-orange-main hover:text-white rounded-md flex items-center gap-2 ${selectedVal?.value === x.value ? 'bg-brand-orange-mainbg ' : ''}`}
                                                onClick={()=>setSelectedVal(x)}
                                            >
                                                {x.icon && 
                                                    <Image 
                                                        width={50} 
                                                        height={50} 
                                                        src={x.icon} 
                                                        alt="" 
                                                        className='h-5 w-5 object-contain' 
                                                    />
                                                }
                                                    <span className={` ${selectedVal?.value === x.value ? 'font-semibold' : 'font-normal'} `}>
                                                        {x.label}  
                                                    </span>

                                            </button>

                                        </>
                                    )
                                })}
                                {
                                    showButton &&
                                    <button
                                        className={`w-full   select-none py-2 pl-3 pr-9 cursor-pointer hover:bg-brand-orange-mainbg border-2   bottom-0 border-brand-orange-main text-brand-orange-main font-medium rounded-md `}
                                        onClick={() => {
                                            if (buttonAction) {
                                                buttonAction()
                                            }
                                        }}
                                    >
                                        
                                        {buttonLabel}
                                    </button>
                                }

                            </div>
                        </div>
                    </Transition>
                </div>
            
            }
        </div>
    )
}
