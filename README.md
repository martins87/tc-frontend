# Aplicação web para gerenciamento de produtos

Aplicação web desenvolvida para visualização, listagem e adição de produtos. Para teste foram usados produtos Apple, como iPhone, Apple Watch, Airpods, etc. listados em https://www.apple.com/br/store

## Funcionalidades

- Listagem de produtos com imagem, nome, preço, categoria e descrição.
- Página para adição de produto.
- Pesquisa de produtos por nome.
- Filtro para ordenação de produtos por preço, ascendente ou descendente.
- Layout responsivo para diferentes tamanhos de tela.

## Tecnologias utilizadas

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Mock Service Worker](https://mswjs.io/), para consumo de API fictícia.
- [Zustand](https://zustand-demo.pmnd.rs/), para gerenciamento de estado global.

## API fictícia

Para simular o consumo de uma API, foi utilizada a biblioteca MSW (Mock Service Worker). O endpoint `/api/produtos` foi criado, retornando uma lista de produtos que são exibidos inicialmente. A escolha dessa biblioteca deu-se pelo fato da flexibilidade de definir inicialmente produtos de nossa escolha, além da facilidade de manuseio.

## Rodando localmente

Para executar o projeto em ambiente local:

```bash
git clone https://github.com/martins87/tc-frontend.git
cd tc-frontend
npm install
npm run dev
```
