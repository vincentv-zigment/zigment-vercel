import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const SearchBar = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const ContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: any) {
      if (ContainerRef.current && !ContainerRef.current.contains(e.target)) {
        setSearchQuery("");
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ContainerRef} className="w-full">
      <div className="relative h-fit   w-full">
        <MagnifyingGlassIcon className="w-6 h-6 absolute  top-1/2 -translate-y-1/2  left-4   text-slate-300" />
        <input
          type="text"
          className="p-3 pl-12  rounded-md w-full border border-border  "
          placeholder="Search app by name, use case, and more"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {searchQuery.length > 0 && (
        <div className="w-full text-sm p-2 space-y-1 drop-shadow-md bg-white rounded-sm absolute z-[100]">
          <div className="p-2 cursor-pointer hover:bg-slate-100 rounded-sm font-medium">
            Google
          </div>
          <div className="p-2 cursor-pointer hover:bg-slate-100 rounded-sm font-medium">
            Yahoo
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
