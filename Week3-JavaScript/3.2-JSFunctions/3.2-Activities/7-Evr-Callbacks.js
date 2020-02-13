function greet(name) {
  return `Hello ${name}!`;
}

function welcome(name) {
  return `${name}, welcome!`;
}

function informAboutSale(name) {
  return `${name}, we're having a sale!`;
}

function getNameAndShowMessage(callback) {
  const name = prompt("Please Enter Your Name: ");
  alert(callback(name));
}