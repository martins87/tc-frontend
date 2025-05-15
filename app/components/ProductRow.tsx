import { FC } from "react";
import Image from "next/image";

import { Product } from "../types/Product";
import Centered from "./ui/Centered";
import Typography from "./ui/Typography";

type ProductRowProps = {
  product: Product;
};

const ProductRow: FC<ProductRowProps> = ({ product }) => {
  return (
    <Centered className="flex-col sm:flex-row gap-y-10 h-auto rounded-lg pl-6 py-4 gap-x-10 border border-white hover:cursor-pointer hover:border-[#F7931A] transition-all duration-500 shadow-sm hover:shadow-lg">
      <Centered className="w-fit">
        <Image
          width={94}
          height={140}
          className="rounded-sm"
          src={product.imagemURL}
          alt=""
        />
      </Centered>
      <Centered direction="col" items="start" justify="between">
        <Typography className="text-xl text-[#212529]" weight="500" font="sora">
          {product.nome}
        </Typography>
        <Typography className="text-base text-[#767676]" weight="600">
          {product.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 0,
          })}
        </Typography>
        <Typography className="text-base text-[#343A40]" weight="500">
          Categoria: {product.categoria}
        </Typography>
        <Typography className="text-base text-[#767676]">
          {product.descricao}
        </Typography>
      </Centered>
    </Centered>
  );
};

export default ProductRow;
