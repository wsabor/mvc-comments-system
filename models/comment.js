const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Comment = sequelize.define(
  "Comment",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

// Importação do modelo Post após a definição de Comment
const Post = require("./post");

// Definição da associação depois que ambos os modelos foram inicializados
Comment.belongsTo(Post, { foreignKey: "postId", onDelete: "CASCADE" });

module.exports = Comment;
