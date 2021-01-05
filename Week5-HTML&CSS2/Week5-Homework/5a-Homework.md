# Week 5a Homework: JS Practice

## JS Array Methods Practice

Using the [placeholder User data](https://jsonplaceholder.typicode.com/users):

- create and print a list of phone numbers
- create and print a list of website and email pairs (pair them in a string, array, or object)

<br>

Using the [placeholder To-Do data](https://jsonplaceholder.typicode.com/todos):

- create a list of user 9's to-dos
- then find the number of user 9's incomplete tasks

<br>

Using the [placeholder Post data](https://jsonplaceholder.typicode.com/posts):

- create a list of user 5's posts
- then, create a list of title and body pairs

<br>

### Bonus Challenge

Using the [placeholder To-Do data](https://jsonplaceholder.typicode.com/todos):

- create an object that summarizes the incomplete tasks of users 3, 7, & 8
  - ex:
  ```javascript
  {
    user3: {
      totalTasks: x,
      totalIncomplete: y,
      incompleteTasks: [title1, title2, title3, ...]
    },
    user7: ...
  }
  ```

<br>

---

<br>

## JS Classes & Constructors Practice

In a .js file, create a few classes. Create one "general category" class, then two more specific classes which extend from the first class.

For example: Perhaps you are creating a webstore that sells video games and game consoles.

- You could create a general `Item` class to hold properties that any and every item for sale shares in common, like `id`, `name`, or `price`.
- Then, extend `Item` with a class for `GameConsoles` and a class for `VideoGames` and include properties specific to each _category_ of item.
