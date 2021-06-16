# Homework and Goals

## Goal: _Mastery of these Skills_

- HTML forms and form handling with and without Formspree
- CSS responsive styling, media queries, and positioning with flexbox
- Be able to explain Object-Oriented Programming (OOP) principles
- Create JS Objects with `function` Constructors, create JS classes, and extending prototypes

<br>

## Goal: _Capstone work_

- Add a form to your capstone and activate it through Formspree
- Optimize capstone styling to be Mobile-First and Responsive by using Media Queries and Flexbox
- Find an API online from which you can consume data into your project (like the weather app, Google maps, or WebMD etc.) EG:- [Collection of Free Public APIs](https://github.com/public-apis/public-apis#public-apis--)
- Also add `normalize.css`, Google fonts, a collapsible Nav Bar Hamburger Icon w/ Font Awesome, and a Jumbotron/Hero header (if needed)

<br>

---

<br>

## Homework is due to your TA by next Monday before class

<br>

### JS Array Methods Practice

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
An example of the output you want is

[
  '1-770-736-8031 x56442',
  '010-692-6593 x09125',

[
  'hildegard.org, Sincere@april.biz',
  'anastasia.net, Shanna@melissa.tv',
  'ramiro.info, Nathan@yesenia.net',

[
  {
    userId: 9,
    id: 161,
    title: 'ex hic consequuntur earum omnis alias ut occaecati culpa',
    completed: true
  },
  {

[
  {
    userId: 5,
    id: 41,
    title: 'non est facere',
    body: 'molestias id nostrum\n' +
      'excepturi molestiae dolore omnis repellendus quaerat saepe\n' +
      'consectetur iste quaerat tenetur asperiores accusamus ex ut\n' +
      'nam quidem est ducimus sunt debitis saepe'
  },
  {

[
  {
    title: 'non est facere',
    body: 'molestias id nostrum\n' +
      'excepturi molestiae dolore omnis repellendus quaerat saepe\n' +
      'consectetur iste quaerat tenetur asperiores accusamus ex ut\n' +
      'nam quidem est ducimus sunt debitis saepe'
  },
  {



<br>

### JS Classes & Constructors Practice

In a .js file, create a few classes. Create one "general category" class, then two more specific classes which extend from the first class.

For example: Perhaps you are creating a web store that sells video games and game consoles.

- You could create a general `Item` class to hold properties that any and every item for sale shares in common, like `id`, `name`, or `price`.
- Then, extend `Item` with a class for `GameConsoles` and a class for `VideoGames` and include properties specific to each _category_ of item.

<br>

---

<br>

### CSS Media Queries Practice

Included in week 5 homework is the `index.html` file from a site about Andre the Giant.

In the `styles.css` file, fix the styling for the site, and create a media query that fixes the site to correctly display on the "iPhone 6/7/8" view in DevTools.

Focus on the following:

- The `#bio` `<ul>` at the top of the page
- `<img>` tags
- `<div>` tags
- links

> TIP: you may want to copy-paste some already existing css rules into your media query to make sure you are overwriting the necessary rules.

<br>

---

<br>

### Flexbox Froggy

Go to [flexboxfroggy.com](https://flexboxfroggy.com/) and complete at least half (12), if not all the activities.

Send a screenshot of your progress to your TA when you are finished.

Example screenshot:
![example flexbox froggy screenshot](https://github.com/JohanBester/sc-curriculum/blob/master/Week5-HTML&CSS2/Week5-Homework/flexboxFroggyScreenshot.png?raw=true)
