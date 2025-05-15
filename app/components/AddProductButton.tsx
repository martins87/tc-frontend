import React from "react";
import Typography from "./ui/Typography";
import { useRouter } from "next/navigation";

const AddProductButton = () => {
  const router = useRouter();

  const handleClick = () => router.push("/products/new");

  return (
    <Typography
      className="w-fit mr-auto text-lg hover:cursor-pointer"
      weight="500"
      onClick={handleClick}
    >
      <span className="flex sm:hidden lg:flex">+ Adicionar produto</span>
      <span className="hidden sm:flex lg:hidden">+ Adicionar</span>
    </Typography>
  );
};

export default AddProductButton;
