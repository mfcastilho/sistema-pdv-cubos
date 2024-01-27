# Sistema PVD - Backend API

Bem-vindo(a) ao Sistema PVD (Ponto de Venda) - Backend API! Este projeto consiste em uma API desenvolvida para um sistema de PDV (Frente de Caixa) como parte do Desafio do Módulo 5 da Cubos Academy. A API oferece funcionalidades para gerenciar categorias, clientes, pedidos, produtos e usuários.

Observação: Este projeto representa uma melhoria em relação ao desafio original, pois substituiu o uso de Knex e JavaScript por Prisma e TypeScript.

## Descrição

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
- JWT (JSON Web Token)
- Bcrypt (para criptografia de senhas)
- AWS SDK (para integração com o SendGrid)
- EJS (para criar templates HTML dinâmicos)
- UUID (para geração de identificadores únicos)
- Joi (para validação de dados)

## Configuração do Ambiente

Antes de começar, certifique-se de seguir estas instruções para configurar o ambiente:

1. Instale o Node.js: [Node.js](https://nodejs.org/)
2. Instale o TypeScript globalmente: `npm install -g typescript`
3. Clone este repositório: `git clone https://seu-repositorio.git`
4. Instale as dependências: `npm install`
5. Execute as migrations e seeders: `npx prisma migrate dev` e `npx prisma db seed`


###### tags: `back-end` `módulo 5` `nodeJS` `PostgreSQL` `API REST` `desafio`
