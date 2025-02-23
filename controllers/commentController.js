const { Comment } = require("../models");

exports.createComment = async (req, res) => {
  await Comment.create({
    content: req.body.content,
    postId: req.params.id,
  });
  res.redirect(`/post/${req.params.id}`);
};
