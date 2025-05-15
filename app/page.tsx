"use client";

import Container from "./components/ui/Container";
import ProductsList from "./components/ProductsList";
import Typography from "./components/ui/Typography";
import Link from "next/link";
import Centered from "./components/ui/Centered";
import SearchBar from "./components/Searchbar";

export default function Home() {
  return (
    <Container className="my-10">
      <Typography className="w-full mr-auto text-3xl my-4" weight="600">
        Produtos
      </Typography>
      <Centered className="mb-10">
        <Link className="w-fit mr-auto" href="/products/new">
          <Typography className="text-lg" weight="500">
            + Adicionar produto
          </Typography>
        </Link>
        <SearchBar />
      </Centered>
      <ProductsList />
    </Container>
  );
}
