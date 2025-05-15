"use client";

import { FC, ReactNode } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { twMerge } from "tailwind-merge";
import Typography from "./Typography";

type ButtonProps = {
  label: string | ReactNode;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  className?: string;
  textClassname?: string;
  icon?: StaticImport;
  onClick?: () => void;
  full?: boolean;
  disabled?: boolean;
  blue?: boolean;
};

const Button: FC<ButtonProps> = ({
  label,
  primary,
  secondary,
  tertiary,
  className,
  textClassname,
  icon,
  onClick,
  full,
  disabled,
  blue,
}) => {
  return (
    <button
      className={twMerge(
        "h-12 group flex items-center justify-center gap-x-3 px-5 rounded-lg transition-colors ease-in-out duration-200 hover:cursor-pointer",
        primary
          ? "bg-black hover:bg-black/90 border-0"
          : secondary
          ? "bg-white border border-[#CED4DA] hover:bg-black/5"
          : tertiary
          ? "bg-white text-gray-700 border border-[#CED4DA] hover:bg-[#CED4DA]/20"
          : "",
        disabled && "bg-[#E9ECEF] hover:bg-[#E9ECEF] hover:cursor-not-allowed",
        full && "w-full",
        blue && "border-black hover:bg-black/10",
        className
      )}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt="button icon" />}
      <Typography
        className={twMerge(
          "text-sm tracking-wider",
          primary
            ? "text-white"
            : secondary
            ? "text-black"
            : tertiary
            ? "text-[#212529]"
            : "",
          disabled && "text-[#ADB5BD]",
          blue && "text-black",
          textClassname
        )}
      >
        {label}
      </Typography>
    </button>
  );
};

export default Button;
