import { useState, useEffect } from "react";

import { init } from "@/app/mocks/init";
import { Product } from "@/app/types/Product";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      if (process.env.NODE_ENV === "development") {
        await init();
      }

      try {
        const res = await fetch("/api/produtos");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        // @ts-expect-error:next-line
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}
