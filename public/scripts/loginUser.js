// Rest of your script...
import { fetchData, setCurrentUser } from './main.js'

// user class
class User {
  constructor(userName, password, firstName, lastName) {
    this.userName = userName;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getUsername() {
    return this.userName;
  }
}

// login functionality
let loginForm = document.getElementById("loginForm");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  let userName = document.getElementById("username").value;
  let password = document.getElementById("pwd").value;


  console.log("Username:", userName);
  console.log("Password:", password); 

  let user = new User(userName, password);

  console.log(user);
  fetchData("/users/login", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "posts.html"
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}