# 📌 Sistema de Comentários em Postagens - MVC com Node.js, Express e MySQL

## 📋 Descrição

Este projeto é um sistema simples de **comentários em postagens**, seguindo o **padrão MVC (Model-View-Controller)** e utilizando **Node.js, Express, MySQL e Sequelize**. Ele permite criar postagens, visualizar postagens individuais e adicionar comentários a elas.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript no servidor
- **Express.js** - Framework para criação de APIs e rotas
- **Sequelize** - ORM para integração com o MySQL
- **MySQL** - Banco de dados relacional
- **EJS** - Template engine para renderizar páginas dinâmicas
- **dotenv** - Gerenciamento de variáveis de ambiente

## 📂 Estrutura do Projeto

```
/mvc-comments-system
├── controllers/
│   ├── postController.js
│   ├── commentController.js
├── models/
│   ├── index.js
│   ├── post.js
│   ├── comment.js
├── views/
│   ├── index.ejs
│   ├── new_post.ejs
│   ├── post.ejs
├── routes/
│   ├── postRoutes.js
│   ├── commentRoutes.js
├── config/
│   ├── database.js
├── public/
│   ├── css/
│   ├── js/
├── .env
├── app.js
├── package.json
├── README.md
```

## 📦 Instalação

### 1️⃣ Clone o repositório:

```bash
git clone https://github.com/seu-usuario/mvc-comments-system.git
cd mvc-comments-system
```

### 2️⃣ Instale as dependências:

```bash
npm install
```

### 3️⃣ Configure o banco de dados MySQL:

Crie o banco de dados e tabelas executando este script no MySQL:

```sql
CREATE DATABASE IF NOT EXISTS mvc_comments;
USE mvc_comments;

CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    postId INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (postId) REFERENCES posts(id) ON DELETE CASCADE
);
```

### 4️⃣ Crie o arquivo `.env` e configure as credenciais do banco:

```env
DB_NAME=mvc_comments
DB_USER=seuUsuario
DB_PASS=suaSenha
DB_HOST=localhost
DB_DIALECT=mysql
```

### 5️⃣ Inicie o servidor:

```bash
node app.js
```

## 🌍 Uso

### Acesse as seguintes rotas no navegador:

- `http://localhost:3000/` → Lista de postagens
- `http://localhost:3000/post/new` → Criar nova postagem
- `http://localhost:3000/post/:id` → Visualizar postagem e adicionar comentários

## 🔥 Recursos Implementados

✅ Criar postagens com título e conteúdo<br>
✅ Listar postagens<br>
✅ Visualizar postagens individuais<br>
✅ Adicionar comentários em postagens<br>
✅ Estruturação no padrão MVC<br>
✅ Uso de Sequelize para interação com MySQL<br>

## 📜 Licença

Este projeto é open-source e pode ser modificado conforme necessário.

Desenvolvido com ❤️ por Wagner Sabor 🚀
