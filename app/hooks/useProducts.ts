import { useState, useEffect } from "react";

import { init } from "@/app/mocks/init";
import { useProductsStore } from "../store/products";

export function useProducts() {
  const { products, setProducts } = useProductsStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      if (process.env.NODE_ENV === "development") {
        await init();
      }

      if (products.length > 0) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("/api/produtos");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        // @ts-expect-error:next-line
        setError(err.message || "Unknown error");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [products.length, setProducts]);

  return { products, loading, error };
}
