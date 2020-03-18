// ! this code will only work in the browser
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(json => console.log(json));