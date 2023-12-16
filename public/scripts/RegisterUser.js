import { fetchData, setCurrentUser } from './main.js'

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

let regForm = document.getElementById("registrationForm");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();

  let userName = document.getElementById("username").value;
  let password = document.getElementById("pwd").value;
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let user = new User(userName, password, firstName, lastName);

  fetchData("/users/register", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "login.html";
  })
  .catch((err) =>{
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  })
}