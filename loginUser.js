function loginUser(event) {
    event.preventDefault();
     var email = document.getElementById('emailid').value;
     var password= document.getElementById('pwd').value;
 
     var user = {
         email: email,
         password: password
     };
console.log(user);
}
document.getElementById('loginForm').addEventListener('submit', loginUser);
