export async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if (response.ok) {
        return await response.json();
      } else {
        if (response.status === 401) {
          throw new Error('Unauthorized: Please log in.');
        } else if (response.status === 404) {
          throw new Error('Not Found: The requested resource was not found.');
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      }
  }

  export function setCurrentUser(user){
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  export function getCurrentUser(){
    return JSON.parse(localStorage.getItem('user'));
  }