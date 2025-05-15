"use client";

import { ChangeEvent, FC, useRef, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import Centered from "@/app/components/ui/Centered";
import magnifyingGlass from "@/app/assets/icons/magnifying-glass-light.svg";
import close from "@/app/assets/icons/close-small.svg";

type SearchBarProps = {
  onSearchChange: (searchTerm: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ onSearchChange }) => {
  const inputref = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const search: string = e.target?.value;
    setSearchTerm(search);
    onSearchChange(search);
  };

  const handleCleanSearch = () => {
    setSearchTerm("");
    onSearchChange("");
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // search action here
    }
  };

  return (
    <Centered
      className={twMerge(
        "w-full sm:w-1/2 lg:w-1/3 gap-x-4 rounded-full px-4 h-14",
        true ? "bg-[#222222] z-20" : "bg-inherit"
      )}
    >
      <Image
        className="hover:cursor-pointer"
        src={magnifyingGlass}
        alt="magnifying glass icon"
      />
      <input
        className={twMerge(
          "w-3/5 h-1/2 flex flex-1 bg-inherit outline-none font-[family-name:var(--font-inter)] text-base font-normal text-white",
          "transition-all transform duration-0 opacity-100 placeholder:text-white/50"
        )}
        type="text"
        ref={inputref}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleEnterKey}
        placeholder="Buscar pelo nome do produto"
      />
      <Image
        className="hover:cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out"
        src={close}
        alt="close icon"
        onClick={handleCleanSearch}
      />
    </Centered>
  );
};

export default SearchBar;
