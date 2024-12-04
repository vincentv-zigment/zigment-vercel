import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";

const SearchBar = ({ setSearchQuery }: { setSearchQuery: (query: string) => void }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState<string>("");
  const ContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ContainerRef.current && !ContainerRef.current.contains(e.target as Node)) {
        setLocalSearchQuery("");
        setSearchQuery("");
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setSearchQuery]);

  return (
    <div ref={ContainerRef} className="w-full">
      <div className="relative h-fit w-full">
        <MagnifyingGlassIcon className="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-4 text-slate-300" />
        <input
          type="text"
          className="p-3 pl-12 rounded-md w-full border border-border"
          placeholder="Search app by name, use case, and more"
          value={localSearchQuery}
          onChange={(e) => {
            setLocalSearchQuery(e.target.value);
            setSearchQuery(e.target.value);
          }}
        />
      </div>
       
    </div>
  );
};

export default SearchBar;
