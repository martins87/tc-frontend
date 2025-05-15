"use client";

import { useState } from "react";

import Container from "./components/ui/Container";
import ProductsList from "./components/ProductsList";
import Typography from "./components/ui/Typography";
import Centered from "./components/ui/Centered";
import ComboBox from "./components/ui/ComboBox";
import SearchBar from "./components/Searchbar";
import AddProductButton from "./components/AddProductButton";

const ordenacaoPreco = [
  { value: "descending", label: "Do maior para o menor" },
  { value: "ascending", label: "Do menor para o maior" },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtroPreco, setFiltroPreco] = useState<string | boolean>(
    "descending"
  );

  return (
    <Container className="my-10">
      <Typography className="w-full mr-auto text-4xl my-4" weight="600">
        Produtos
      </Typography>
      <Centered className="flex-col md:flex-row gap-y-6 mb-10">
        <AddProductButton />
        <ComboBox
          className="w-60 mr-auto md:mr-4"
          label="Ordenar por preço"
          list={ordenacaoPreco}
          value={filtroPreco}
          setValue={setFiltroPreco}
        />
        <SearchBar onSearchChange={setSearchTerm} />
      </Centered>
      <ProductsList searchTerm={searchTerm} sortOrder={filtroPreco as string} />
    </Container>
  );
}
