"use client";

import Container from "./components/ui/Container";
import ProductsList from "./components/ProductsList";
import Typography from "./components/ui/Typography";
import Centered from "./components/ui/Centered";
import SearchBar from "./components/Searchbar";
import AddProductButton from "./components/AddProductButton";

export default function Home() {
  return (
    <Container className="my-10">
      <Typography className="w-full mr-auto text-4xl my-4" weight="600">
        Produtos
      </Typography>
      <Centered className="mb-10">
        <AddProductButton />
        <SearchBar />
      </Centered>
      <ProductsList />
    </Container>
  );
}
