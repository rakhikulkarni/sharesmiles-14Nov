const express = require("express");
const Post = require("../models/post");
const router = express.Router();

router.get('/getAllPosts', (req, res) => {
  try {
    const posts = Post.getPosts();
    res.send(posts);
  } catch(err) {
    res.status(401).send({message: err.message});
  }
});

module.exports = router;
