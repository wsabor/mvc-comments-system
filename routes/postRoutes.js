const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/", postController.getAllPosts);
router.get("/post/new", postController.getPostForm);
router.post("/post", postController.createPost);
router.get("/post/:id", postController.getPostById);

module.exports = router;
