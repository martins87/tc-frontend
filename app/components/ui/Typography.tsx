import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TypographyProps = {
  children: string | ReactNode;
  className?: string;
  font?: "inter" | "sora";
  weight?: "400" | "500" | "600" | "700";
  maxChar?: number;
  onClick?: () => void;
};

const Typography: FC<TypographyProps> = ({
  children,
  className,
  font = "inter",
  weight = "400",
  maxChar,
  onClick,
}) => {
  return (
    <span
      className={twMerge(
        "text-black/90",
        font === "inter"
          ? "font-[family-name:var(--font-inter)]"
          : "font-[family-name:var(--font-sora)]",
        weight === "400"
          ? "font-normal"
          : weight === "500"
          ? "font-medium"
          : "font-bold",
        className
      )}
      onClick={onClick}
    >
      {maxChar
        ? children!.toString().length > maxChar
          ? `${children!.toString().slice(0, maxChar)}...`
          : children!.toString()
        : children}
    </span>
  );
};

export default Typography;
