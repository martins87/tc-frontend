"use client";

import { useState } from "react";

import Centered from "@/app/components/ui/Centered";
import Container from "@/app/components/ui/Container";
import Input from "@/app/components/ui/Input";
import InputWrapper from "@/app/components/ui/InputWrapper";
import Typography from "@/app/components/ui/Typography";
import Textarea from "@/app/components/ui/Textarea";

const NewProductPage = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  return (
    <Container>
      <Typography className="w-full mr-auto text-3xl my-4" weight="600">
        New Product
      </Typography>
      <Centered className="gap-y-4" direction="col">
        <InputWrapper label="Category">
          <Input
            placeholder="Enter product category"
            value={category}
            setValue={setCategory}
          />
        </InputWrapper>
        <InputWrapper label="Name">
          <Input
            placeholder="Enter product name"
            value={name}
            setValue={setName}
          />
        </InputWrapper>
        <InputWrapper label="Price">
          <Input
            placeholder="Enter product price"
            value={price}
            setValue={setPrice}
          />
        </InputWrapper>
        <InputWrapper label="Description">
          <Textarea
            placeholder="Enter product description"
            value={description}
            setValue={setDescription}
          />
        </InputWrapper>
        <InputWrapper label="Image URL">
          <Input
            placeholder="Enter product image URL"
            value={imageURL}
            setValue={setImageURL}
          />
        </InputWrapper>
      </Centered>
    </Container>
  );
};

export default NewProductPage;
