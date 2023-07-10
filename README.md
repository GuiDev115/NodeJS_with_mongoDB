# Capacitação Backend com NodeJs Pela CompJunior

<div align="center">
  <p>
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/GuiDev115/backend_nodejs?color=39C2D8&logoColor=39C2D8&style=for-the-badge">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/GuiDev115/backend_nodejs?color=39C2D8&logoColor=39C2D8&style=for-the-badge">
  </p>
</div>

## Instrodução do Projeto

Desafio desenvolvido para a capacitação de backend da Comp Jr. CRUD simples, e formulário para as requisições pedidas pelo desafio. Um projeto interessante pelo primeiro contato da tecnologia.

## Especificações mínimas

-   [x] O projeto deve ter no mínimo 1 schema e 1 controller;
-   [x] Deve conter no mínimo 1 CRUD completo;
-   [x] Documentação no Swagger;
-   [x] Deve ser possível testar todas as requisições;

## Para ir além (OPCIONAL)

-   [x] Criar usuário, com e-mail e senha e realizar login;
-   [X] Mandar imagem com foto do usuário na mesma rota em que ele é criado;
-   [x] Ter uma rota que só pode ser acessado com token de autenticação;
-   [x] Ter um usuário administrador que terá permissões diferentes de um usuário comum;
-   [x] Função de recuperar senha;
-   [x] Fazer com que o usuário receba um email automático;



## Estrutura de diretórios

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

### Pré requisito Para executar o Projeto (PASSO A PASSO PARA S.O DEBIAN)

```bash
Antes de começar, você vai precisar ter instalado em sua máquina o [Node.js](https://nodejs.org/).

~$ sudo apt update
~$ sudo apt install nodejs
```

```bash
# Clone este repositório
~$ git clone https://github.com/GuiDev115/backend_nodejs.git

# Acesse a pasta do projeto com o terminal
~$ cd backend_nodejs

# Instale as dependências pedidas (coloquei o projeto com as depedencias, mas sugiro excluir e fazer passo a passo abaixo)
~$ sudo npm install
~$ npm install swagger-ui-express
~$ npm install @types/swagger-ui-express


# Execute a aplicação
~$ npm run serve

# Servidor local: http://localhost:3000
```

## Documentação

```
http://localhost:3000/api-docs
```

## Tecnologias Utilizadas

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

## Site Usados para o funcionamento do Projeto:

```
- https://mailtrap.io/
- https://swagger.io/
```
