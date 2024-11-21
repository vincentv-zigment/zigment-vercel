/* eslint-disable react-hooks/exhaustive-deps */
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { Fragment, useEffect, useRef, useState } from 'react'

 

type Props = {
    val: string | undefined,
    setVal: (value: string | undefined) => void,
    list: {
        id: number | string,
        label: string,
        value: string,
        icon?: string
    }[],
    inputRef?: React.RefObject<HTMLInputElement>
    required?: boolean,
    formValidation?: boolean,
    showButton?: boolean,
    buttonLabel?: string,
    buttonAction?: () => void, 
    showLogos?: boolean,
    title?: string

}

export default function CustomSelect4({
    val,
    setVal,
    list,
    formValidation,
    showButton,
    buttonAction,
    buttonLabel,
    title
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

    const divRef = useRef<HTMLDivElement>(null);
    const [isTopHalf, setIsTopHalf] = useState(true);

    const updatePosition = () => {
        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect();
            const screenHeight = window.innerHeight;

            // Determine if the div is in the top half or bottom half
            setIsTopHalf(rect.top < screenHeight / 2);
        }
    };

    useEffect(() => {
        // Update the position initially
        updatePosition();

        // Update the position on scroll and resize
        window.addEventListener('scroll', updatePosition);
        window.addEventListener('resize', updatePosition);

        // Clean up event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', updatePosition);
            window.removeEventListener('resize', updatePosition);
        };
    }, []);


    return (
        <div className='flex flex-col w-full relative ' ref={divRef}>
            {
                list && list.length > 0 &&
                <Listbox value={selectedVal} onChange={setSelectedVal}>
                    {({ open }) => (
                        <div className="relative">
                            <Listbox.Button
                                className={`
                                    relative w-full  rounded-md border border-gray-300 bg-white   h-9 cursor-pointer  pl-3 pr-10 text-left shadow-sm focus:border-brand-orange-main focus:outline-none focus:ring-1 focus:ring-brand-orange-main sm:text-sm ${formValidation && `${formValidation ? 'ring-red-500 ring-1 border-red-500' : 'ring-transparent border-gray-300 '}`}
                                `}
                            >
                                <span className={`block truncate space-x-2`}>
                                    <span className='font-medium '>
                                        {selectedVal?.label} 
                                    </span>
                                    <span className='text-xs'>
                                        {title}
                                    </span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options
                                    className={`absolute z-10 max-h-64 w-full overflow-y-auto rounded-md bg-white p-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm customscroll ${isTopHalf ? 'top-10' : 'bottom-10'}`}
                                    style={{ overflowY: 'auto' }}
                                >
                                    <div className='relative'>
                                        {list && list.map((x) => (
                                            <Listbox.Option
                                                key={`${x.id}-${x.value}-${x.label}-customselect-key`}
                                                className={`relative text-base  select-none py-2 pl-3 pr-9 cursor-pointer hover:bg-brand-orange-main hover:text-white rounded-md flex items-center gap-2 ${selectedVal?.value === x.value ? 'bg-brand-orange-mainbg' : ''}`}
                                                value={x}
                                            >
                                                <>
                                                    {x.icon && 
                                                        <Image width={100} height={100} src={x.icon} alt="" className='h-5 w-5 object-contain' />
                                                    }
                                                    <span className={`${selectedVal?.value === x.value ? 'font-semibold' : 'font-normal'}`}>
                                                        {x.label}  
                                                    </span>
                                                </>
                                            </Listbox.Option>
                                        ))}
                                        {showButton && (
                                            <button
                                                className={`w-full select-none py-2 pl-3 pr-9 cursor-pointer hover:bg-brand-orange-mainbg border-2 bottom-0 border-brand-orange-main text-brand-orange-main font-medium rounded-md`}
                                                onClick={buttonAction}
                                            >
                                                {buttonLabel}
                                            </button>
                                        )}
                                    </div>
                                </Listbox.Options>
                            </Transition>
                        </div>
                    )}
                </Listbox>
            }
        </div>
    )
}