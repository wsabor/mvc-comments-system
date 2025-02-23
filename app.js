require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/database");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", postRoutes);
app.use("/", commentRoutes);

// Sincronizar banco de dados e iniciar servidor
db.sync()
  .then(() => {
    app.listen(3000, () => console.log("Servidor rodando na porta 3000 🚀"));
  })
  .catch((err) => console.error("Erro ao conectar ao banco de dados:", err));
