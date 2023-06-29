# Capacitação Backend pedido da Comp JR

<div align="center">
  <p>
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/GuiDev115/backend_nodejs?color=39C2D8&logoColor=39C2D8&style=for-the-badge">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/GuiDev115/backend_nodejs?color=39C2D8&logoColor=39C2D8&style=for-the-badge">
  </p>
</div>

## Sobre o Projeto

Desafio desenvolvido para a capacitação de backend da CompJunior. CRUD para um aplicativo simples. Introdução rápida de Node.js e suas tecnologias.

Horário do curso: 16h totalizado

## Especificações mínimas

-   [x] O projeto deve ter no mínimo 1 schema e 1 controller;
-   [x] Deve conter no mínimo 1 CRUD completo;
-   [x] Documentação no Swagger;
-   [x] Deve ser possível testar todas as requisições;

## Para ir além

-   [x] Criar usuário, com e-mail e senha e realizar login;
-   [ ] Mandar imagem com foto do usuário na mesma rota em que ele é criado;
-   [x] Ter uma rota que só pode ser acessado com token de autenticação;
-   [x] Ter um usuário administrador que terá permissões diferentes de um usuário comum;
-   [x] Função de recuperar senha;
-   [x] Fazer com que o usuário receba um email automático;

## 🗃Estrutura dos diretórios

```
├── assets
├── src
│   ├── app
│   │    ├── controllers
│   │    ├── middlewares
│   │    └── schemas
│   ├── config
│   ├── database
│   ├── modules
│   ├── resources
│   │    └── mail
│   │        └── auth
│   ├── utils
│   ├── index.js
│   ├── routes.js
│   ├── swagger.js
│   └── uploads
│       └── img
```

### Pré requisito para a execução (Linux)

Instale Node.js

~$ sudo apt update
~$ sudo apt install nodejs

```bash
# Clone este repositório
$ git clone https://github.com/GuiDev115/backend_nodejs.git

# Com o terminal aberto acesse a pasta do projeto
~$ cd backend_nodejs

# Instale as dependências
~$ npm install
~$ npm insall @types/swagger-ui-express
~$ npm install swagger-ui-express


# Execute a aplicação
~$ npm run serve

# Rodando em http://localhost:3000
```

## 📝 Acessando documentação

```bash
# Acesse
http://localhost:3000/api-docs
```

## Tecnologias Usadas

-   Node
-   MongoDB
-   Mongoose
-   Express
-   Nodemon
-   Bcryptjs
-   Crypto
-   Swagger
-   Nodemailer
-   Slugify
-   Multer
-   Jsonwebtoken

  <a href="https://nodejs.org/en/"><img align="center" alt="NodeJS" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" /></a>
  <a href="https://www.mongodb.com/"><img  align="center" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoD"></a>


