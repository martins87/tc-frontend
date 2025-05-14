import { create } from "zustand";
import { Product } from "../types/Product";
import { products as initialProducts } from "@/app/mocks/products";

type ProductsStore = {
  products: Product[];
  addProduct: (product: Product) => void;
  editProduct: (updatedProduct: Product) => void;
  removeProduct: (id: number) => void;
  setProducts: (products: Product[]) => void; // for setting list from API
};

export const useProductsStore = create<ProductsStore>((set) => ({
  products: initialProducts,

  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),

  editProduct: (updatedProduct) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      ),
    })),

  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),

  setProducts: (products) => set({ products }),
}));
