import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import {
  Fragment,
  useEffect,
  useState
} from "react";

const sizes = {
  xs:'32px',
  sm:'36px',
  md:'36px',
  lg:'40px',
  xl:'50px'
}


type Props = {
  state: { [key: string]: string };
  setState: (value: string) => void;
  list: { id: string | number, label: string, value: string, imgURL: string, enabled?:boolean }[];
  name: string;
  inputRef?: React.RefObject<{ [key: string]: HTMLInputElement }>;
  required?: boolean;
  position?: "up" | "down";
  size?: 'sm' | 'md' | 'lg' | 'xl'
};

export default function CustomMultiSelectImages({
  state,
  setState,
  list,
  name,
  inputRef,
  required,
  position = "down",
  size='md'

}: Props) {
  const [selected, setSelected] = useState<{ id: string | number, label: string, value: string, imgURL: string, enabled?: boolean } | undefined>(list.find((x) => x.value === state[name]) ?? list[0]);

  useEffect(() => {
    setState(selected?.value ?? '');
  }, [selected]);

  useEffect(() => {
    setSelected(list.find((x) => x.value === state[name]));
  }, [state]);

  return (
    <div className="flex flex-col w-full   ">
      {state && (
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <div className="relative">
                <Listbox.Button
                  className="relative w-fit cursor-default rounded-md border border-gray-300 bg-white  text-left shadow-sm focus:border-brand-orange-main focus:outline-none focus:ring-1 focus:ring-brand-orange-main sm:text-sm flex items-center"
                  aria-required={required}
                  data-value={state[name]}
                  ref={(el) => {
                    if (inputRef) {
                      if (inputRef.current && el instanceof HTMLInputElement) {
                        inputRef.current[name] = el;
                      }
                    }
                  }}
                >
                  <button>
                    <div className=" pl-3 text-lg flex items-center gap-2  pr-9 rounded-md cursor-pointer w-full text-left hover:bg-gray-100" style={{height:sizes[size]}}>
                      <span className="h-6 w-6  flex items-center justify-center">
                        <div className="">
                          <Image
                            src={selected?.imgURL ?? ''}
                            alt={selected?.label ?? ''}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </span>
                      <span className="hidden">{selected?.label}</span>
                    </div>
                  </button>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
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
                    className={`absolute z-10  mt-1 right-0  max-h-60 w-48 overflow-auto rounded-md bg-white p-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm customscroll flex flex-col text-left ${position === "up" && "bottom-full mb-2"
                      }`}
                  >
                    {list &&
                      list.map((x) => {
                        const disabled = x.enabled===false;
                        return (
                          <Listbox.Option key={`list_key_${x.id}`} value={x}  disabled={disabled} className="disabled:cursor-not-allowed flex items-center	pr-2 hover:bg-gray-100">
                            <div className={`py-2  h-[48px] px-2 text-lg flex items-center justify-start   gap-2   rounded-md  w-full text-left   `}>
                              <span className="h-7 w-7 shrink-0      flex items-center justify-center">
                                <div className="">
                                  <Image
                                    width={50}
                                    height={50}
                                    src={x.imgURL}
                                    alt={x.label}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                              </span>
                              <span className="    text-sm">{x.label} </span>
                            </div>
                              {disabled && <span className="text-red-500 text-xs font-medium">Disabled</span>}
                          </Listbox.Option>
                        );
                      })}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      )}
    </div>
  );
}
