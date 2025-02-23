const sequelize = require("../config/database");
const Post = require("./post");
const Comment = require("./comment");

// Definição das associações
Post.hasMany(Comment, { foreignKey: "postId", onDelete: "CASCADE" });
Comment.belongsTo(Post, { foreignKey: "postId" });

module.exports = { Post, Comment, sequelize };
