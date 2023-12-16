import { fetchData, getCurrentUser } from './main.js'

// user class
class Post {
  constructor(postContent, userId) {
    this.postContent = postContent;
    this.userId = userId;
  }
}

// login functionality
let postForm = document.getElementById("contentForm");
if (postForm) postForm.addEventListener('submit', savePost);
// if(postForm) postForm.addEventListener('submit', getAllUserPosts);
let user1 = getCurrentUser();
console.log('userid ' + user1.userID)

function savePost(e) {
  e.preventDefault();

  let userID = user1.userID;  // <-- Ensure consistent casing here
  console.log("getting current userID", user1.userID);
  let postContent = document.getElementById("postContent").value;
  let post = new Post(postContent, userID);

  console.log(post)
  // let noteContent = note.note_Content;
  // let userID= user1.user_ID
  // let data1 = {userID,noteContent}


  fetchData("/posts/createPost", post, "POST")
    .then((note) => {
      // window.location.href = "posts.html"
      // getAllUserPosts()
     // const li = document.createElement("li").innerHTML = post.postContent;
     // document.getElementById("list").appendChild(li)
     const li = document.createElement("li");
    li.innerHTML = post.postContent;
    document.getElementById("list").appendChild(li);
    })
    .catch((err) => {
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
    })
}

async function getAllUserPosts() {
  let userId = user1.userID;

  let options = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }
  await fetch(`http://localhost:3000/posts/getUserPosts/${userId}`, options).then(res => res.json()).then(data => {
    console.log('data: ', data);
    if(data.length>0){
      data.map(listItem=>{
        let li = document.createElement("li")
        li.innerHTML = listItem.postContent
        document.getElementById("list").appendChild(li);
      })
    }

  })
}


document.addEventListener("DOMContentLoaded",()=>{
  getAllUserPosts();
})
/*
async function getAllNotes() {
  const sql = `SELECT * FROM notes;`;
  let notes = await con.query(sql);
  console.log(notes)
}

let all_notes = document.getElementById("btn-notes");
if(all_notes) all_notes.addEventListener('submit', get_all_notes);

function get_all_notes(e) {
  e.preventDefault();
  fetchData("/notes/", data1, "GET")
  .then((data1) => {
    window.location.replace = "note.html"
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}
*/