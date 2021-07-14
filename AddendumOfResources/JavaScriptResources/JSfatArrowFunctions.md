# JavaScript Arrow Functions – using the ES6 Syntax

Arrow functions are a more concise way to write JavaScript function expressions.

There are important syntax differences between arrow functions and other functions:

- First, arrow functions use the arrow `=>` instead of the `function` keyword.
- And second, arrow functions don’t have their own binding to the `this` keyword.

## Different Arrow function forms

There are other differences when writing arrow functions, but the main points of note are regarding the use of **parentheses**, and **curly brackets**...

- Some Arrow Functions have parentheses around the parameters, while others don’t.
- Some use curly brackets and the return keyword, others don’t.
- One form spans multiple lines, while others consist of a single line.

Interestingly, when we invoke the functions below with the same argument, we get the same result, even though they look different...

```javascript
const addTwo = (a) => {
  const newValue = a + 2;
  return newValue;
};

const addTwo = (num) => {
  return num + 2;
};

const addTwo = (num) => num + 2;

// All these functions output the same result when logged
console.log(addTwo(2));
// 4
```

## Parentheses

Some arrow functions have parentheses around the parameters and others don't.

**The number of parameters an arrow function has determines whether or not
we need to include parentheses**

1. An arrow function with zero parameters requires parentheses.

```javascript
const hello = () => "hello";
console.log(hello());
```

2. Arrow functions with one parameter do not need parentheses; parentheses are optional.

```javascript
const addTwo = (num) => num + 2;
// So we can remove parentheses from the above example and it still works.
// const addTwo = num => num + 2;

console.log(addTwo(2));
// 4
```

3. Arrow functions with multiple parameters require parentheses.

```javascript
const addNums = (num1, num2) => num1 + num2;
console.log(addNums(1, 2));
```

### **Rest Parameters and Destructuring**

Arrow functions also support rest parameters and destructuring.
Both these features require parentheses.

This is an example of an arrow function with a rest parameter.

```javascript
const nums = (first, ...rest) => rest;
console.log(nums(1, 2, 3, 4));
// [2, 3, 4]
```

And here’s a function that uses destructuring.

```javascript
const location = {
  country: "Greece",
  city: "Athens",
};
const travel = ({ city }) => city;
console.log(travel(location));
// Athens
```

> **To summarize Parameters:**
>
> If there’s only 1 parameter — and you’re **not** using rest parameters or destructuring — then parentheses are optional. Otherwise, be sure to include them.

<br>

## The Function Body

An arrow function body can either have a **“concise body”** or **“block body”**. The body type influences the syntax.

1. First, the **“concise body”** syntax.

```javascript
const addTwo = (a) => a + 2;
```

For one-line arrow functions (like the example above), the value is implicitly returned; no need to use the return keyword or curly brackets.

<br>

2. Next, the “block body” syntax.

```javascript
const addTwo = (a) => {
  const total = a + 2;
  return total;
};
```

For multi-line Arrow functions (like the example above), both wrap the body block in curly brackets, and use the return keyword.

<br>

> **To summarize the Function Body:**
>
> - For one-line Arrow functions `return` or curly brackets aren't needed.
> - For block-body multi-line Arrow functions use **both** curly brackets and `return`.

<br>

## Objects and Arrow Functions

There’s one more syntax nuance to know about: - When you want to return an object literal expression, wrap the function body in parentheses...

```javascript
const f = () => ({
  city: "Boston",
});

console.log(f().city);
```

Without the parentheses, we get an error.

[Read and learn more about the Arrow Function syntax at MDN.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

<br>

---

<br>

### **Summary: -**

In this article we learned about JavaScript ES6 Arrow Function syntax...

- For only 1 parameter — with **no** rest parameters nor destructuring — parentheses are optional.
- For no parameters, more than one parameter, the rest parameter, or destructuring, parentheses are required.
- For one-line Arrow functions `return` or curly brackets aren't needed.
- For multi-line Arrow functions, **both** curly brackets and `return` are required.
- When returning an object literal expression, wrap the function body in parentheses.
