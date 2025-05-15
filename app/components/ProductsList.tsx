import React, { FC } from "react";

import { useProducts } from "../hooks/useProducts";
import Centered from "./ui/Centered";
import ProductRow from "./ProductRow";
import Typography from "./ui/Typography";

type ProductsListProps = {
  searchTerm: string;
  sortOrder: string;
};

const ProductsList: FC<ProductsListProps> = ({ searchTerm, sortOrder }) => {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  const processedProducts = [...products];

  const filteredProducts = processedProducts
    .filter((product) =>
      product.nome.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "ascending") {
        return a.preco - b.preco;
      } else {
        // Default to descending if not explicitly ascending
        return b.preco - a.preco;
      }
    });

  return (
    <div>
      <Centered className="gap-y-4" direction="col">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((produto) => (
            <Centered key={produto.id} className="w-full h-1/4">
              <ProductRow product={produto} />
            </Centered>
          ))
        ) : (
          <Typography className="text-white text-lg">
            Nenhum produto encontrado.
          </Typography>
        )}
      </Centered>
    </div>
  );
};

export default ProductsList;
