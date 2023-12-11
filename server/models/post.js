// post.js (models/post.js)

const con = require("./db_connect");

// Create a new post
async function createPost(post) {
  let sql = `
    INSERT INTO Post (post_content, user_id)
    VALUES("${post.post_content}", ${post.user_id})
  `;

  const result = await con.query(sql);
  return result.insertId;
}

// Read all posts
async function getAllPosts() {
  let sql = `SELECT * FROM Post`;
  return await con.query(sql);
}

// Read a specific post by postId
async function getPostById(postId) {
  let sql = `SELECT * FROM Post WHERE post_id = ${post_id}`;
  return await con.query(sql);
}

// Update a post
async function updatePost(post) {
  let sql = `
    UPDATE Post
    SET post_content = "${post.post_content}"
    WHERE post_id = ${post.post_id}
  `;

  await con.query(sql);
}

// Delete a post
async function deletePost(postId) {
  let sql = `DELETE FROM Post WHERE post_id = ${postId}`;
  await con.query(sql)
}

module.exports = { createPost, getAllPosts, getPostById, updatePost, deletePost };
