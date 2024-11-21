/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { classNames } from "@/lib/utils";

const people = [
  { key: 1, label: "Wade Cooper" },
  { key: 2, label: "Arlene Mccoy" },
  { key: 3, label: "Devon Webb" },
  { key: 4, label: "Tom Cook" },
  { key: 5, label: "Tanya Fox" },
  { key: 6, label: "Hellen Schmidt" },
  { key: 7, label: "Caroline Schultz" },
  { key: 8, label: "Mason Heaney" },
  { key: 9, label: "Claudie Smitham" },
  { key: 10, label: "Emil Schaefer" },
];

type Item = {
  key: number | string;
  label: string;
  name?: string;
}

type Props = {
  list?: Item[];
  selectedItems:string[];
  handleChange:(values:string[])=>void;
  className?:string
};

const arrayToObj = (array: Item[]) => {
  return array.map((element) => {
    return {
      key: element.key,
      label: element.label,
    };
  });
};

export default function CustomMultiSelect({
  selectedItems,
  list = people,
  handleChange,
  className='rounded-md'
}:Props) {
  const [selected, setSelected] = useState<
    {
      key: string;
      label: string;
    }[]
  >([]);

  const options = arrayToObj(list)

  const onChange = (selectedItem: { key: string; label: string }) => {
    if (selected.find((x) => x.key === selectedItem.key)) {
      setSelected([...selected.filter((x) => x.key !== selectedItem.key)]);
    } else {
      setSelected((prev) => [...prev, selectedItem]);
    }
  };

  useEffect(()=>{
    if(selectedItems){
        setSelected( selectedItems.map((item)=>options.find((x)=>x.key===item) ?? { key: '', label: '' }).map(item => ({ ...item, key: String(item.key) })))

      
    }
  },[])


  useEffect(()=>{
    handleChange(selected.map((x)=>x.key))
  },[selected])

  return (
    <div className="   flex flex-col   w-full  relative ">
      {
        <Listbox value={selected}>
          {({ open }) => (
            <>
              <div className="relative w-full">
                <div className={`relative w-full cursor-default  border border-gray-300 bg-white    min-h-[40px] py-1 items-center   pl-1 pr-10 text-left shadow-sm focus:border-brand-orange-main focus:outline-none focus:ring-1 focus:ring-brand-orange-main sm:text-sm ${className}`}>
                  <Listbox.Button className={` truncate flex flex-wrap gap-1 items-center w-full h-full ${className}`}>
                    <div className=" truncate flex flex-wrap gap-1 items-center ">
                      <div className="   text-xs   text-slate-600 flex items-center border rounded-full opacity-0" />

                      {selected.length > 0 ? (
                        selected.map((x) => (
                          <span
                            key={x.label}
                            className=" pl-3 pr-1.5 py-[3.5px]  border text-white flex items-center gap-1 rounded-full text-xs font-medium bg-brand-orange-main "
                          >
                            {x.label}
                            <button
                              className="p-0.5 hover:bg-white/20  cursor-pointer rounded-full"
                              onClick={() => onChange(x)}
                            >
                              <XMarkIcon className="w-4 h-4" />
                            </button>
                          </span>
                        ))
                      ) : (
                        <span
                          // key={x.label}
                          className="  h-[30px]  py-0.5   text-slate-600 flex items-center gap-1 rounded-full text-sm "
                        />
                      )}
                    </div>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10   max-h-60 w-full overflow-auto rounded-md bg-white p-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm customscroll   flex flex-col">
                    {arrayToObj(list).map((choice: Item) => {
                      return (
                        <Listbox.Option
                          key={`multi-select-${choice.name}`}
                          className={({ active }) =>
                            classNames(
                              active ? "  bg-indigo-50" : "",
                              "relative cursor-default text-gray-900 select-none py-2 hover:bg-gray-100 rounded-md px-2 "
                            )
                          }
                          value={choice}
                          onClick={() => onChange({ ...choice, key: String(choice.key) })}
                        >
                          <div className="flex items-center justify-between gap-2 w-full">
                            <span className={"block text-xs truncate"}>
                              {choice.label}
                            </span>
                            {selected.find((x) => x.key === choice.key) && (
                              <CheckIcon className="w-4 h-4" />
                            )}
                          </div>
                        </Listbox.Option>
                      );
                    })}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      }
    </div>
  );
}
