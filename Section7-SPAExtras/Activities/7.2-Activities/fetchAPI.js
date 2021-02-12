// ! this code will only work in the browser
console.log("fetchAPI JS file");
fetch("https://jsonplaceholder.typicode.com/users/", {
  headers: {
    "Access-Control-Allow-Origin": window.location.origin
  }
})
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(json => console.log(json));

fetch("https://jsonplaceholder.typicode.com/posts/")
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(json => console.log(json));
