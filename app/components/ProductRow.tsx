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
    <Centered className="h-auto border border-[#CED4DA] rounded-lg pl-6 py-4 gap-x-10">
      <Image
        width={94}
        height={140}
        className="rounded-sm"
        src={product.imagemURL}
        alt=""
      />
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
      {/* <Centered className="gap-y-2" direction="col">
        <Centered className="flex-1 ml-auto gap-x-2" justify="end">
          <IconButton tertiary icon={arrowDown} />
          <IconButton tertiary icon={arrowUp} />
          <IconButton tertiary icon={edit} onClick={handleEdit} />
          <IconButton tertiary icon={trash} onClick={handleDelete} />
        </Centered>
        <Button className="w-[184px] ml-auto" label="Ocultar" secondary />
      </Centered> */}
    </Centered>
  );
};

export default ProductRow;
