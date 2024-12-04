import {
  XMarkIcon
} from "@heroicons/react/24/outline";
import {
  useEffect,
  useRef,
  useState,
} from "react";
  
  type ListI = {
    id: string;
    value: string;
  };
  
  type Props = {
    val:ListI[]
    setVal:(val:ListI[])=>void;
    className?:string;
    onCurrentValueChange?:(val:string)=>void;
  };
  
  

   


  const ChipsInputWithoutDropDown = ({
    setVal, val, className, onCurrentValueChange 
  }: Props) => {
    const [show, setShow] = useState(false);
    const [tobeDeleted, setToBEDeleted] = useState<string | null>(null);
  
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState('')
  
    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setShow(false);
        }
      };
  
      document.addEventListener("click", handleClickOutside);
  
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);
   

    useEffect(()=>{
       if(onCurrentValueChange) onCurrentValueChange(inputValue)
    },[inputValue])
  
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (
        inputRef.current &&
        inputRef.current.selectionStart === 0 &&
        e.key === "Backspace"
      ) {
        
        if (tobeDeleted) {
          setVal([...val.filter((x) => x.id !== tobeDeleted)]);
          setToBEDeleted(null);
        } else {
          setToBEDeleted(val[val.length - 1].id);
        }
      }else{
        if (tobeDeleted) setToBEDeleted(null)
        
      }
  
      if (e.key === "Enter") {
        const uniqueID = Math.floor(Math.random() * 10 ** 6).toString();
        setVal([
          ...val,
          {
            id: `chip_${uniqueID}`,
            value: inputValue,
          },
        ]);
        // e.target.value = "";
        setInputValue('')
      }
    };
  
    return (
      <div ref={containerRef} className="relative w-full"  >
        <div
          onClick={() =>{ setShow(true); inputRef.current?.focus()}}
          className={`relative  w-full cursor-default rounded-md border border-gray-300 bg-white  h-auto min-h-9  pl-1 py-1 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1  focus:ring-indigo-500 sm:text-sm ${className}`}
        >
          {/* Chips Input */}
          <div className="  truncate flex flex-wrap  items-center gap-0.5">
            {show && val.map((submenu) => (
              <>
                {
                  <div
                    className={`${
                      submenu.id === tobeDeleted
                        ? "bg-indigo-200"
                        : "bg-white-100"
                    }    flex w-fit p-1 pl-4 rounded-full gap-1 text-sm items-center border border-gray-500 shadow`}
                    key={submenu.id}
                  >
                    <span>{submenu.value}</span>
                    <button
                      className="w-fit hover:bg-gray-300/50 active:bg-gray-300 rounded-full p-0.5 ml-2"
                      onClick={() =>
                        setVal([
                          ...val.filter((x) => x.id !== submenu.id),
                        ])
                      }
                    >
                      <XMarkIcon className="text-black w-[16px] h-[16px]" />
                    </button>
                  </div>
                }
              </>
            ))}
  
            <input
              ref={inputRef}
              type="text"
              className="py-2 pl-1 text-sm rounded-full border-none w-full max-w-full focus:outline-none focus:ring-0"
              value={inputValue}
              onKeyDown={handleKeyDown}
              onChange={(e)=>{setInputValue(e.target.value)}} 
            />
          </div>
        
        </div>
       
      </div>
    );
  };
  
  export default ChipsInputWithoutDropDown;
  