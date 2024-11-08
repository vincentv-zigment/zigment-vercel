import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";

interface IList {

  id: string,
  value: string,
  label: string
}
type Props = {
  list: IList[],
  state: string,
  setState: (state: string) => void
};



const DEBOUNCE_DELAY = 300; // Adjust the delay as needed




export default function ChipsWithInputSearch({ list, state, setState }: Props) {
  const [selected, setSelected] = useState<string[]>(state.split(','));
  const [inputValue, setInputValue] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    setState(selected.join(','))
  }, [selected])

  const timeoutRef = useRef<number | null>(null);

  const filtered = useMemo(() => {
    if (list) {
      const query = inputValue.trim().toLowerCase();
      return query === '' ? list : list.filter((city) => city.label.toLowerCase().includes(query));
    }
  }, [inputValue]);

  const handleSelect = (choice: string) => {
    const doesExist = selected.find((x) => x === choice);
    if (doesExist) {
      setSelected(selected.filter((x) => x !== choice))
    } else {
      setSelected([...selected, choice])
    }
  }

  const containerRef = useRef<HTMLDivElement | null>(null)
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



  useEffect(() => {
    // Cleanup the timeout when the component unmounts
    const timeoutId = timeoutRef.current;
    return () => {
      clearTimeout(timeoutId as number);
    };
  }, []);


  return (
    <>
      <div className="relative w-full   bg-red-100" ref={containerRef}>
        <button
          className="relative  w-full cursor-default rounded-md border border-gray-300 bg-white    h-fit  pl-1 py-1 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onClick={() => setShow(!show)}
          style={{ minHeight: '40px' }}
        >
          <div className="  truncate flex flex-wrap gap-1 ">
            {selected.map((x, ind) => {
              return (
                <>
                  <div
                    className=" border   flex w-fit py-1 pl-2 bg-indigo-200 pr-1 rounded-md gap-1 items-center"
                    key={`${x}-option-${ind}`}
                    onClick={() => setShow(show)}
                  >
                    {x},
                    <span
                      className="w-fit hover:bg-gray-200 active:bg-gray-300 rounded-full p-0.5"
                      onClick={() => setSelected([...selected.filter((select) => (select !== x))])}
                    >
                      <XMarkIcon className="w-4 h-4 text-black" />
                    </span>
                  </div>
                </>
              );
            })}
          </div>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </button>

        {show && (
          <div className="absolute z-10 mt-1   w-full  rounded-md bg-white p-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm   flex flex-col">
            {/* <div className="block h-10 pb-1 px-1  w-full  relative flex flex-col">
                  <div className="mb-1">
                    <div className="flex items-center w-full justify-between pl-0.5 pr-1 py-2">
                      <p className="text-base text-gray-400">Search City....</p>
                      <button onClick={()=>setShow(false)}><XMarkIcon className="w-5 h-5 text-gray-400 hover:text-black"/></button>
                    </div>
                    <div className="flex relative">
                      <input type="text" className="py-1 pl-2 pr-8 w-full rounded-md border  focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none" onChange={handleChange}  /> <BiSearch className="text-gray-600 absolute w-5 h-5 inset-y-0 my-auto right-2 "/>
                    </div>
                  </div>
                </div> */}
            <div className="overflow-auto max-h-60 customscroll pr-1 ">
              {filtered && filtered.map((choice: IList, newInd: number) => {
                return (
                  <button
                    key={`option-key-${choice.id}-${newInd}`}
                    className={
                      "relative text-gray-900 select-none py-2 w-full rounded-md px-3   hover:bg-gray-100 cursor-pointer"
                    }
                    onClick={() => {
                      handleSelect(choice.value)
                    }}
                  >
                    <div className="flex items-center gap-2 w-full justify-between cursor-pointer">
                      <span className={"block truncate"}>{choice.label}
                      </span>
                      {selected.find((x) => x === choice.value) && <button className="p-0.5 rounded-full bg-indigo-500"><CheckIcon className="w-3 h-3 text-white" /></button>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
