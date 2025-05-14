"use client";

import { useEffect, useState } from "react";

import { init } from "./mocks/init";
import Container from "./components/ui/Container";

export default function Home() {
  const [productName, setProductName] = useState("");

  useEffect(() => {
    async function load() {
      if (process.env.NODE_ENV === "development") {
        await init();
      }

      const response = await fetch("/api/produtos");
      const data = await response.json();
      console.log(data);
      setProductName(data[0].nome);
    }

    load();
  }, []);

  return (
    <Container>
      <p>{productName}</p>
    </Container>
  );
}
