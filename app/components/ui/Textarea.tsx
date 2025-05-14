"use client";

import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

import Centered from "./Centered";

type TextareaProps = {
  placeholder: string;
  value: string | number;
  setValue: Dispatch<SetStateAction<string>>;
  className?: string;
  inputClassName?: string;
};

const Textarea: FC<TextareaProps> = ({
  placeholder,
  value,
  setValue,
  className,
  inputClassName,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.target.value);

  return (
    <Centered
      className={twMerge(
        "px-2 py-0 gap-x-0 gap-y-1 rounded-lg bg-inherit border-[1px] border-[#CED4DA] focus-within:border-[#F7931A]",
        className
      )}
      justify="start"
    >
      <textarea
        className={twMerge(
          "w-full -mt-[1px] min-h-24 py-2 px-1 outline-none text-base font-[family-name:var(--font-inter)] bg-inherit",
          "placeholder:text-[#ADB5BD]",
          inputClassName
        )}
        // ref={inputref}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </Centered>
  );
};

export default Textarea;
