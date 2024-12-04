import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import {
  Fragment,
  useEffect,
  useState
} from "react";

type Props = {
  state: { label: string; imgURL: string };
  setState: (value: { label: string; imgURL: string }) => void;
  list: { label: string; imgURL: string }[];
  name: string;
  inputRef?: React.RefObject<{ [key: string]: HTMLButtonElement }>;
  required?: boolean;
  position?: "up" | "down";
};

export default function PricingCurrencyDropDown({
  state,
  setState,
  list,
  name,
  inputRef,
  required,
  position = "down",
}: Props) {
  const [selected, setSelected] = useState<{ label: string; imgURL: string }>(state ?? list[0]);

  useEffect(() => {
    setState(selected);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    setSelected(state);
  }, [state]);

  return (
    <div className="flex flex-col w-full relative ">
      {state && (
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <div className="relative">
                <Listbox.Button
                  className="relative w-fit cursor-default rounded-md border border-gray-300 bg-white  text-left shadow-sm focus:border-brand-orange-main focus:outline-none focus:ring-1 focus:ring-brand-orange-main sm:text-sm flex items-center"
                  aria-required={required}
                  data-value={state.label}
                  ref={(el) => {
                    if (inputRef) {
                      if (inputRef.current && el) {
                        inputRef.current[name] = el;
                      }
                    }
                  }}
                >
                  <button>
                    <div className="py-2 pl-3 text-lg flex items-center gap-2  pr-9 rounded-md cursor-pointer w-full text-left hover:bg-gray-100">
                      <span className="h-7 w-7 p-0.5  border flex items-center justify-center">
                        <div className="">
                          <Image
                            width={40}
                            height={40}
                            src={selected.imgURL}
                            alt={selected.label}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </span>
                      <span>{selected.label}</span>
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
                    className={`absolute z-10  mt-1  max-h-60 w-full overflow-auto rounded-md bg-white p-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm customscroll flex flex-col text-left ${position === "up" && "bottom-16"
                      }`}
                  >
                    {list &&
                      list.map((x) => {
                        return (
                          <button key={`curr_key_${x.label}`} onClick={() => setSelected(x)}>
                            <div className="py-2 pl-3 text-lg flex items-center gap-2  pr-9 rounded-md cursor-pointer w-full text-left hover:bg-gray-100">
                              <span className="h-7 w-7      flex items-center justify-center">
                                <div className="">
                                  <Image
                                    width={40}
                                    height={40}
                                    src={x.imgURL}
                                    alt={x.label}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </span>
                              <span>{x.label}</span>
                            </div>
                          </button>
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
