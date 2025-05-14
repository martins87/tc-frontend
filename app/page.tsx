"use client";

import Container from "./components/ui/Container";
import ProductsList from "./components/ProductsList";
import Typography from "./components/ui/Typography";

export default function Home() {
  return (
    <Container>
      <Typography className="w-full mr-auto text-3xl my-4" weight="600">
        Products
      </Typography>
      <ProductsList />
    </Container>
  );
}
