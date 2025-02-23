const { Post, Comment } = require("../models");

exports.getAllPosts = async (req, res) => {
  const posts = await Post.findAll({ include: Comment });
  res.render("index", { posts });
};

exports.getPostForm = (req, res) => {
  res.render("new_post");
};

exports.createPost = async (req, res) => {
  await Post.create({
    title: req.body.title,
    content: req.body.content,
  });
  res.redirect("/");
};

exports.getPostById = async (req, res) => {
  const post = await Post.findByPk(req.params.id, { include: Comment });
  res.render("post", { post });
};
