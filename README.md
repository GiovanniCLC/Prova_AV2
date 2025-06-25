# CRUD de Produtos - Frontend React

Este projeto é uma aplicação frontend desenvolvida em React (com Vite) para gerenciar produtos, realizando operações de C.R.U.D (Criar, Ler, Atualizar, Excluir) através da API pública:  
`https://apipw.leoproti.com.br/produtos`

## Funcionalidades

- Visualização da lista de produtos
- Cadastro de novos produtos
- Edição de produtos existentes
- Exclusão de produtos
- Interface moderna com Material-UI (MUI)
- Navegação entre páginas com React Router

## Estrutura do Objeto Produto

```json
{
  "id": 0,
  "nome": "string",
  "preco": 0
}
```

## Tecnologias Utilizadas
- React
- Vite
- Material-UI (MUI)
- React Router DOM
- Axios

## Instalação

Instale as dependências principais (execute na pasta do projeto):

```bash
npm install
```

Se estiver começando do zero ou faltar alguma dependência, execute:

```bash
npm install react react-dom
npm install react-router-dom @mui/material @mui/icons-material @emotion/react @emotion/styled axios
npm install --save-dev vite @vitejs/plugin-react
```

## Como Rodar o Projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra `http://localhost:5173` no navegador.

## Estrutura de Pastas Sugerida

```
src/pages       — Páginas principais (Listar, Criar, Editar)
src/components  — Componentes reutilizáveis (Formulário, Tabela, etc.)
src/services    — Serviços para requisições HTTP (Axios)
src/routes      — Definição das rotas da aplicação
```

## Rotas da Aplicação

| Caminho       | Descrição                     |
| ------------- | -----------------------------|
| `/`           | Lista todos os produtos       |
| `/novo`       | Formulário para novo produto  |
| `/editar/:id` | Formulário para editar produto existente |

## Exemplos de Requisição para API

```js
// GET todos os produtos
axios.get("https://apipw.leoproti.com.br/produtos")

// POST novo produto
axios.post("https://apipw.leoproti.com.br/produtos", { nome: "Produto", preco: 10 })

#
