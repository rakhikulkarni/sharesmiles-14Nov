// post.js (routes/post.js)

const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router
  // Get all posts
  .get('/getAllPosts', async (req, res) => {
    try {
      const posts = await Post.getAllPosts();
      res.send(posts);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  })

  // Get a specific post by postId
  .get('/getPost/:postId', async (req, res) => {
    const postId = req.params.postId;
    try {
      const post = await Post.getPostById(postId);
      res.send(post);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  })

  // Create a new post
  .post('/createPost', async (req, res) => {
    const newPost = req.body;
    try {
      const postId = await Post.createPost(newPost);
      res.send({ postId });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  })

  // Update a post
  .put('/updatePost', async (req, res) => {
    const updatedPost = req.body;
    try {
      await Post.updatePost(updatedPost);
      res.send({ success: 'Post updated successfully!' });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  })

  // Delete a post
  .delete('/deletePost', async (req, res) => {
    try {
      const postId = req.query.postId; // Retrieve postId from query parameters
      await Post.deletePost(postId);
      res.send({ message: 'Post deleted successfully' });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });

module.exports = router;
