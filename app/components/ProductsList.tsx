import React from "react";

import { useProducts } from "../hooks/useProducts";

const ProductsList = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {products.map((produto) => (
          <li key={produto.id}>
            <strong>{produto.nome}</strong> - R${produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
