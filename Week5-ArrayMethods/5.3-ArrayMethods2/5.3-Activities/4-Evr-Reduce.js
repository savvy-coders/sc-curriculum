function arrayOfNumbers(end = 100) {
  const nums = [];
  for (let i = 1; i <= end; i++) {
    nums.push(i);
  }
  return nums;
}

// using reduce, sum the numbers from 1 to 200
// hint: use the arrayOfNumbers() function to generate an array


// https://jsonplaceholder.typicode.com/todos
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => console.log(json))

// create an object that counts the number of complete and incomplete tasks


// create an object that summarizes the tasks for each user: task count, totals for complete and incomplete tasks

