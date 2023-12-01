function registerUser(event) {
    event.preventDefault();

     var firstname = document.getElementById('fname').value;
     var lastname = document.getElementById('lname').value;
     var email = document.getElementById('useremail').value;
     var password= document.getElementById('pwd').value;

     var user = {
         firstname: firstname,
         lastname: lastname,
         email: email,
         password: password
     };
console.log(user);
}
document.getElementById('registrationForm').addEventListener('submit', registerUser);
