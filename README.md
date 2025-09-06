# 📝 Projeto Task - Frontend + Backend Dockerizado

Este projeto é uma aplicação fullstack composta por:

- ✅ **Backend**: API REST construída com **NestJS**
- 🎨 **Frontend**: Interface com **React + TypeScript**
- 🧪 **Testes**: Utilizando **Jest** e **React Testing Library**
- 🐳 **Docker**: Containers separados para frontend e backend, orquestrados com **Docker Compose**

---

## 📁 Estrutura do Projeto

```
project/
├── task-backend/         # Backend NestJS
│   ├── src/
│   ├── package.json
│   └── Dockerfile
│
├── task-frontend/        # Frontend React
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── Dockerfile
│   └── .env.production
│
└── docker-compose.yml    # Orquestração dos containers
```

---

## ✅ Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) **v20 ou superior**
- [Docker](https://www.docker.com/) **v24 ou superior**
- [Docker Compose](https://docs.docker.com/compose/) **v2 ou superior**

---

## 🚀 Como rodar o projeto com Docker

1. Na raiz do projeto, execute:

```bash
docker-compose up --build
```

Isso irá:

- Construir e subir os containers do backend e frontend
- Instalar as dependências automaticamente nos containers

---

## 🧪 Executar Testes

1. Acesse a pasta do frontend:

```bash
cd task-frontend
```

2. Instale as dependências (caso ainda não tenha feito):

```bash
npm install
```

3. Execute os testes:

```bash
npm test
```

1. Acesse a pasta do Backend:

```bash
cd task-backend
```

2. Instale as dependências (caso ainda não tenha feito):

```bash
npm install
```

3. Execute os testes:

```bash
npm run test
```

---

## 📌 Observações

- O backend estará disponível por padrão em: `http://localhost:3000`
- O frontend estará disponível em: `http://localhost:5173` (ou a porta configurada no Docker)

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

