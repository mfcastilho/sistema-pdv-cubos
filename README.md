# Sistema PVD - Backend API

## Descrição

Bem-vindo(a) ao Sistema PVD (Ponto de Venda) - Backend API! Este projeto consiste em uma API desenvolvida para um sistema de PDV (Frente de Caixa) como parte do Desafio do Módulo 5 da Cubos Academy. A API oferece funcionalidades para gerenciar categorias, clientes, pedidos, produtos e usuários.

- Observação: Este projeto representa algumas melhorias em relação ao desafio original.

### Melhorias: 

- Uso de TypeScript ao invés de JavaScript
- Uso do de ORM (Prisma) no lugar de Query Builder (Knex)
- Uso de UUID ao invés de identificadores numéricos
- Uso de EJS ao invés de HTML
- Uso do SendGrid ao invés do Mailtrap


## Arquitetura em Camadas

O projeto adota uma arquitetura em camadas para proporcionar uma estrutura organizada e modular. Cada camada desempenha um papel específico, promovendo a escalabilidade e a manutenção do código. As camadas incluem:

- **Camada de Configuração (Config):** Responsável por gerenciar a configuração da aplicação, incluindo variáveis de ambiente.
- **Camada de Controladores (Controllers):** Responsável por lidar com a lógica de negócios das requisições, interagindo com os serviços e manipulando os dados.
- **Camada de DTO (Data Transfer Objects):** Define objetos que são transferidos entre as camadas, proporcionando uma comunicação mais eficiente.
- **Camada de Entidades (Entities):** Representa os modelos de dados que refletem as entidades do mundo real.
- **Camada de Middlewares (Middlewares):** Inclui middlewares que são executados durante o processamento das requisições, como autenticação e validações.
- **Camada de Repositórios (Repositories):** Gerencia o acesso ao banco de dados, realizando operações específicas utilizando o Prisma.
- **Camada de Rotas (Routes):** Mapeia as rotas da API e direciona as requisições para os controladores adequados.
- **Camada de Esquemas (Schemas):** Define os esquemas de validação utilizando a biblioteca Joi.
- **Camada de Servidor (Server):** Configura o servidor Express e inicia a aplicação.
- **Camada de Serviços (Services):** Abstrai a lógica de negócios, interagindo diretamente com as entidades e realizando operações específicas.
- **Camada de Utilitários (Utils):** Inclui funções utilitárias que podem ser reutilizadas em várias partes da aplicação.

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- Prisma
- PostgreSQL
- JWT (JSON Web Token)
- Bcrypt (Para criptografia de senhas)
- Backblaze (Serviço de armazenamento em nuvem utilizado para hospedar as imagens dos produtos)
- AWS SDK (Para integração com o Backblaze)
- EJS (Para criar templates HTML dinâmicos)
- UUID (Para geração de identificadores únicos)
- Multer (Middleware para manipulação de formulários e upload de arquivos)
- SendGrid API (Para o envio de emails)
- Joi (Para validação de dados)

## Configuração do Ambiente

Antes de começar, certifique-se de seguir estas instruções para configurar o ambiente:

1. Instale o Node.js: [Node.js](https://nodejs.org/)
2. Instale o TypeScript globalmente: `npm install -g typescript`
3. Clone este repositório: `git clone https://seu-repositorio.git`
4. Instale as dependências: `npm install`
5. Crie o banco de dados antes de rodar as migrations e seeders.
6. Configure as informações do seu banco de dados no arquivo `.env`.
7. Execute as migrations e seeders: `npx prisma migrate dev` e `npx prisma db seed`

## Como Usar

### Instalação

Clone este repositório e instale as dependências do projeto:

```bash
git clone https://github.com/mfcastilho/sistema-pdv-cubos.git
cd sistema-pdv-cubos
npm install
```

## Execução

Para iniciar o servidor da API em modo de Desenvolvimento, execute o seguinte comando:

```bash
npm run dev
```

## Documentação

<details>
  <summary>Aqui</summary>
  
   # Documentação da API - Sistema PVD

  ## Introdução

  Bem-vindo à documentação oficial da API do Sistema PVD (Ponto de Venda). Este sistema oferece uma API RESTful para gerenciar categorias, clientes, pedidos, produtos e usuários. Utilizando tecnologias como Node.js, Express, TypeScript,   Prisma e outras.

  ## Base URL

  A URL base para todas as requisições é:

  `http://localhost:5000`

  ## Autenticação

  A autenticação é realizada através de JSON Web Tokens (JWT). Para obter um token, é necessário realizar o login utilizando as credenciais de um usuário cadastrado.

  ### Efetuar Login (POST /login)

  **Request:**
  ```json
  {
    "email": "usuario@teste.com",
    "password": "senha123"
  }
  ```

  **Response (Success):**
  ```json
  {
    "user": {
      "id": "seu id",
      "name": "seu nome",
      "email": "seuemail@email.com",
      "createdAt": "2023-11-03T03:52:54.186Z",
      "updatedAt": "2023-11-03T03:52:54.186Z"
    },
    "token": "seu token"
  }
```

**Response (Error):**
  ```json
  {
    "error": "E-mail ou senha incorretos."
  }
  ```

Para autenticar as demais requisições, inclua o token JWT no cabeçalho da seguinte forma:

```http
Authorization: Bearer seu_token_jwt
```

## Endpoints Disponíveis

### Listar Categorias (GET /categoria)

Esta rota retorna a lista de todas as categorias cadastradas.

### Cadastrar Usuário (POST /usuario)

Permite cadastrar um novo usuário no sistema.

#### Request:
```json
{
  "name": "Nome do Usuário",
  "email": "usuario@teste.com",
  "password": "senha123"
}
```

### Efetuar Login (POST /login)

Realiza o login de um usuário cadastrado no sistema.

#### Request:
```json
{
  "email": "usuario@teste.com",
  "password": "senha123"
}
```
### Detalhar Perfil do Usuário Logado (GET /usuario)

Retorna os dados do perfil do usuário logado.

### Editar Perfil do Usuário Logado (PUT /usuario)

Permite editar as informações do perfil do usuário logado.

#### Request:
```json
{
  "name": "Novo Nome",
  "email": "novousuario@teste.com",
  "password": "novasenha123"
}
```

### Cadastrar Produto (POST /produto)

Permite o usuário logado cadastrar um novo produto no sistema.

#### Request:
```json
{
  "description": "Nome do Produto",
  "stockQuantity": 100,
  "value": 15000,
  "categoryId": 2,
  "productImage": "https://s3.us-east-005.backblazeb2.com/desafio-final.jpg"
}
```
### Editar Dados do Produto (PUT /produto/:id)

Permite o usuário logado a atualizar as informações de um produto cadastrado.

#### Request:
```json
{
  "description": "Novo Nome do Produto",
  "stockQuantity": 50,
  "value": 18000,
  "categoryId": 3,
  "productImage": "https://s3.us-east-005.backblazeb2.com/novaimagem.jpg"
}
```

### Listar Produtos (GET /produto)

Retorna a lista de todos os produtos cadastrados, com a opção de filtrar por categoria.

#### Response:
```json
[
  {
    "id": "ID do Produto",
    "description": "Nome do Produto 1",
    "stockQuantity": 20,
    "value": 2500,
    "categoryId": 1,
    "productImage": "https://s3.us-east-005.backblazeb2.com/produto1.jpg"
  },
  {
    "id": "ID do Produto",
    "description": "Nome do Produto 2",
    "stockQuantity": 15,
    "value": 3500,
    "categoryId": 2,
    "productImage": "https://s3.us-east-005.backblazeb2.com/produto2.jpg"
  }
]
```

### Detalhar Produto (GET /produto/:id)

Retorna os detalhes de um produto específico.

#### Response:
```json
{
  "id": "ID do Produto",
  "description": "Nome do Produto",
  "stockQuantity": 100,
  "value": 15000,
  "categoryId": 2,
  "productImage": "https://s3.us-east-005.backblazeb2.com/desafio-final.jpg"
}
```
### Cadastrar Pedido (POST /pedido)

Permite cadastrar um novo pedido no sistema.

#### Request:
```json
{
  "clientId": 1,
  "observation": "Em caso de ausência recomendo deixar com algum vizinho",
  "orderProducts": [
    {
      "productId": 1,
      "productQuantity": 10
    },
    {
      "productId": 2,
      "productQuantity": 20
    }
  ]
}
```

### Listar Pedidos (GET /pedido)

Retorna a lista de todos os pedidos cadastrados, com a opção de filtrar por cliente.

#### Response:
```json
[
  {
    "pedido": {
      "id": 1,
      "clientId": "ID do cliente",
      "totalValue": 230010,
      "observation": null
    },
    "OrderProducts": [
      {
        "id": 1,
        "productQuantity": 1,
        "productValue": 10,
        "orderId": 1,
        "productId": 1
      },
      {
        "id": 2,
        "productQuantity": 2,
        "productValue": 230000,
        "orderId": 1,
        "productId": 2
      }
    ]
  }
]
```
## Aplicar Validação na Exclusão de Produto (DELETE /produto/:id)

Evita a exclusão de um produto vinculado a algum pedido.

## Aprimorar Cadastro/Atualização de Produto

Aprimora o cadastro e a atualização de produto para permitir vincular uma imagem a um produto.

## Aprimorar Exclusão de Produto

Aprimora a exclusão de produto para remover a imagem vinculada a ele no servidor de armazenamento.

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- Prisma
- JWT (JSON Web Tokens)
- Bcrypt
- SendGrid (AWS SDK)
- Multer
- Arquitetura em Camadas
- Variáveis de Ambiente
- AWS SDK (SendGrid)
- EJS (para e-mails dinâmicos)
- UUID (para identificadores únicos)
- Joi (para validações)

## Configuração do Ambiente

Antes de começar, certifique-se de seguir estas instruções para configurar o ambiente:

1. Instale o Node.js: [Node.js](https://nodejs.org/)
2. Instale o TypeScript globalmente: `npm install -g typescript`
3. Clone este repositório: `git clone https://seu-repositorio.git`
4. Instale as dependências: `npm install`
5. Execute as migrations e seeders: `npx prisma migrate dev` e `npx prisma db seed`

## Arquitetura em Camadas

O projeto segue uma arquitetura em camadas para garantir a separação de responsabilidades e a manutenibilidade do código. As camadas são:

- **Camada de Configuração (Config)**
- **Camada de Controladores (Controllers)**
- **Camada de DTO (Data Transfer Objects)**
- **Camada de Entidades (Entities)**
- **Camada de Middlewares (Middlewares)**
- **Camada de Repositórios (Repositories)**
- **Camada de Rotas (Routes)**
- **Camada de Esquemas (Schemas)**
- **Camada de Servidor (Server)**
- **Camada de Serviços (Services)**
- **Camada de Utilitários (Utils)**

## Variáveis de Ambiente

O projeto utiliza variáveis de ambiente para configurar informações sensíveis e ajustes do ambiente. Certifique-se de configurar corretamente as variáveis de ambiente antes de executar a aplicação.

| Variável de Ambiente        | Descrição                                           |
| --------------------------- | --------------------------------------------------- |
| PORT                        | Porta em que o servidor irá escutar                |
| DATABASE_URL                | URL de conexão com o banco de dados                 |
| JWT_SECRET                  | Chave secreta para geração de JWT                   |
| SENDGRID_API_KEY            | Chave de API do SendGrid para envio de e-mails      |
| AWS_ACCESS_KEY_ID           | ID da chave de acesso da AWS (SendGrid)             |
| AWS_SECRET_ACCESS_KEY       | Chave secreta de acesso da AWS (SendGrid)           |


## Conclusão

Esta documentação fornece uma visão geral dos principais recursos e endpoints da API do Sistema PVD. Para obter detalhes mais específicos sobre cada endpoint ou funcionalidade, consulte as seções correspondentes. Se precisar de assistência adicional ou informações específicas, não hesite em entrar em contato.

Agradecemos por escolher o Sistema PVD e esperamos que sua experiência seja satisfatória.

Atenciosamente, Equipe de Desenvolvimento PVD

  
</details>
  

 ## Desenvolvedor

- Mario Frederico Castilho - Desenvolvedor BackEnd - <a href="https://github.com/mfcastilho" target="_blank">Perfil GitHub</a>



## Agradecimentos

Gostaria de agradecer aos meus professores Lucas Carvalho, Guido Cerqueira pelo apoio e aprendizado e a Cubos Academy por todo o suporte.
   



###### tags: `back-end` `módulo 5` `nodeJS` `PostgreSQL` `API REST` `desafio`
