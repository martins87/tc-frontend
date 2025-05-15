"use client";

import Container from "./components/ui/Container";
import ProductsList from "./components/ProductsList";
import Typography from "./components/ui/Typography";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Typography className="w-full mr-auto text-3xl my-4" weight="600">
        Produtos
      </Typography>
      <Link className="w-full mr-auto mb-4" href="/products/new">
        <Typography className="text-lg" weight="500">
          + Adicionar produto
        </Typography>
      </Link>
      <ProductsList />
    </Container>
  );
}
