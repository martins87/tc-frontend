import { rest } from "msw";

import { products } from "@/app/mocks/products";

export const handlers = [
  rest.get("http://localhost:3000/api/produtos", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products));
  }),

  rest.post("http://localhost:3000/api/produtos", async (req, res, ctx) => {
    const newProduct = await req.json();

    const createdProduct = {
      ...newProduct,
      id: products.length + 1,
    };

    products.push(createdProduct);

    return res(ctx.status(201), ctx.json(createdProduct));
  }),

  rest.put("http://localhost:3000/api/produtos/:id", async (req, res, ctx) => {
    const { id } = req.params;
    const updatedProduct = await req.json();
    const index = products.findIndex((p) => p.id === parseInt(id));

    if (index === -1) {
      return res(
        ctx.status(404),
        ctx.json({ message: "Produto não encontrado" })
      );
    }

    products[index] = {
      ...products[index],
      ...updatedProduct,
      id: products[index].id,
    };
    return res(ctx.status(200), ctx.json(products[index]));
  }),

  rest.delete("http://localhost:3000/api/produtos/:id", (req, res, ctx) => {
    const { id } = req.params;
    const index = products.findIndex((p) => p.id === parseInt(id));

    if (index === -1) {
      return res(
        ctx.status(404),
        ctx.json({ message: "Produto não encontrado" })
      );
    }

    products.splice(index, 1);
    return res(ctx.status(204));
  }),
];
