function postUpdate(event) {
    event.preventDefault();

     var content = document.getElementById('post_content').value;
    
     // Create user object
     var post = {
         content : content
     };
console.log(post);
}
document.getElementById('contentForm').addEventListener('submit', postUpdate);
