# 📝 Tasks API - NestJS + Docker

Este projeto é uma API simples de TODO List feita com **NestJS**, **TypeScript** e armazenamento em memória.  
O projeto está totalmente dockerizado, facilitando a execução em qualquer ambiente.

---

## 📦 Requisitos

- [Docker](https://www.docker.com/) instalado  
- [Docker Compose](https://docs.docker.com/compose/) (opcional, mas recomendado)  
- WSL2 configurado (no caso de Windows)

---

## 🚀 Executando com Docker

### 1. Clonar o repositório
```bash
git clone https://github.com/Alairtonfl/task.git
cd task-backend
```

### 2. Build da imagem
```bash
docker build -t tasks-nestjs .
```

### 2. Rodar o container
```bash
docker run -p 3000:3000 tasks-nestjs
```




