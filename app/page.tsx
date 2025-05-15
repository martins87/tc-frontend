"use client";

import { useState } from "react";

import Container from "./components/ui/Container";
import ProductsList from "./components/ProductsList";
import Typography from "./components/ui/Typography";
import Centered from "./components/ui/Centered";
import SearchBar from "./components/Searchbar";
import AddProductButton from "./components/AddProductButton";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Container className="my-10">
      <Typography className="w-full mr-auto text-4xl my-4" weight="600">
        Produtos
      </Typography>
      <Centered className="flex-col sm:flex-row gap-y-6 mb-10">
        <AddProductButton />
        <SearchBar onSearchChange={setSearchTerm} />
      </Centered>
      <ProductsList searchTerm={searchTerm} />
    </Container>
  );
}
