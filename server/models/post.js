// post.js (models/post.js)

const con = require("./db_connect");

async function createTable() {
  let sql = `
  CREATE TABLE IF NOT EXISTS Post(
    postId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userID INT NOT NULL,
    postContent TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`

      await con.query(sql)
}

createTable()

// Create a new post
async function createPost(post) {
  let sql = `
    INSERT INTO Post (postContent, userId)
    VALUES("${post.postContent}", ${post.userId})
  `;
console.log(sql);
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
  let sql = `SELECT * FROM Post WHERE postId = ${postId}`;
  console.log(sql)
  return await con.query(sql);
}

// Update a post
async function updatePost(post) {
  let sql = `
    UPDATE Post
    SET postContent = "${post.postContent}"
    WHERE postId = ${post.postId}
  `;

  await con.query(sql);
}

// Delete a post
async function deletePost(postId) {
  let sql = `DELETE FROM Post WHERE postId = ${postId}`;
  await con.query(sql)
}

async function getUserPosts(userID) {
  console.log('hhh')
  let sql = `SELECT * FROM Post WHERE userID = ${userID}`;
  console.log(sql);
  return await con.query(sql)
}

module.exports = { createPost, getAllPosts, getPostById, updatePost, deletePost ,getUserPosts};
