import { rest } from "msw";

const products = [
  {
    id: 1,
    nome: "Produto 1",
    categoria: "Eletrônicos",
    preco: 299.99,
    descricao: "Descrição do Produto 1",
    imagem: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    nome: "Produto 2",
    categoria: "Livros",
    preco: 49.9,
    descricao: "Descrição do Produto 2",
    imagem: "https://via.placeholder.com/300",
  },
];

export const handlers = [
  rest.get("http://localhost:3000/api/produtos", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products));
  }),
];
