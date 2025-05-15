"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useProductsStore } from "@/app/store/products";
import Centered from "@/app/components/ui/Centered";
import Container from "@/app/components/ui/Container";
import Input from "@/app/components/ui/Input";
import InputWrapper from "@/app/components/ui/InputWrapper";
import Typography from "@/app/components/ui/Typography";
import Textarea from "@/app/components/ui/Textarea";
import Button from "@/app/components/ui/Button";

const NewProductPage = () => {
  const router = useRouter();
  const { addProduct, products } = useProductsStore();
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      categoria: category,
      nome: name,
      preco: parseFloat(price),
      descricao: description,
      imagemURL: imageURL,
    };

    console.log("New Product:", newProduct);
    addProduct(newProduct);

    router.push("/");
  };

  const handleCancel = () => router.push("/");

  return (
    <Container>
      <Typography className="w-full mr-auto text-3xl my-4" weight="600">
        Novo Produto
      </Typography>
      <Centered className="gap-y-4" direction="col">
        <InputWrapper label="Categoria">
          <Input
            placeholder="Enter product category"
            value={category}
            setValue={setCategory}
          />
        </InputWrapper>
        <InputWrapper label="Nome">
          <Input
            placeholder="Enter product name"
            value={name}
            setValue={setName}
          />
        </InputWrapper>
        <InputWrapper label="Preço">
          <Input
            placeholder="Enter product price"
            value={price}
            setValue={setPrice}
          />
        </InputWrapper>
        <InputWrapper label="Descrição">
          <Textarea
            placeholder="Enter product description"
            value={description}
            setValue={setDescription}
          />
        </InputWrapper>
        <InputWrapper label="URL da imagem">
          <Input
            placeholder="Enter product image URL"
            value={imageURL}
            setValue={setImageURL}
          />
        </InputWrapper>
        <Centered className="gap-x-2" justify="start">
          <Button
            label="Cancel"
            secondary
            onClick={handleCancel}
            textClassname="uppercase font-semibold"
          />
          <Button
            label="Add Product"
            primary
            onClick={handleAddProduct}
            textClassname="uppercase font-semibold"
          />
        </Centered>
      </Centered>
    </Container>
  );
};

export default NewProductPage;
