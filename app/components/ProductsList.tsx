import React from "react";

import { useProducts } from "../hooks/useProducts";
import Centered from "./ui/Centered";
import ProductRow from "./ProductRow";

const ProductsList = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      <Centered className="gap-y-4" direction="col">
        {products.map((produto) => (
          <ProductRow key={produto.id} product={produto} />
        ))}
      </Centered>
    </div>
  );
};

export default ProductsList;
