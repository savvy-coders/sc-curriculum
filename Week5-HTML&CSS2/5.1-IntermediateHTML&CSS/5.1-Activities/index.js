const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  console.log("The form was submitted!");

  console.log("event", event);
  const inputs = event.target.elements;
  // console.log("form's input elements: ", inputs);

  Array.from(inputs).forEach(input => {
    console.log(
      `This input is named ${input.name} and has a value of ${input.value}`
    );
  });
});
