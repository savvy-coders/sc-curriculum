# Data Collections: Arrays & Objects

## Primitives & Collections
Primitive data types like we covered in the last module are meant to represent a single piece of discrete data. It can be a large piece (think of War and Peace as a single String), but it's still just one item.

Complex or Composite data types represent Collections of data. The Complex data types of JavaScript are Array and Object. We'll dig much deeper into both of these data types later, but for now, let's learn how to construct them using Literal Notation.

### Arrays & Objects
As all things in JS (besides primitives), Arrays are another type of 'built-in' Object. We've also built a few of our Objects AKA Object Literals and explored the concept of 'collections' of key/value pairs. Well, Arrays and Object Literals share many similarities.

---
## Arrays
Arrays are ordered lists of data. The data can be of any type, including String, Number, Boolean, undefined, or even variables and functions. 
An *Array* is just a special type of *Object* in JS.

### Indexing
Arrays are also zero-indexed, which means that the first piece of data in the collection has a position of 0 (instead of 1).

Array keys are always NUMBERS and are automatically created for us by JS.
We MUST use only BRACKET NOTATION with NUMBERS (no quotation marks).

### Length
*Arrays* are a special type of *Object* or *composite data type.* Therefore, we can use `.` to access some *properties* and *methods.* One of the most useful *properties* of *Arrays* is `length`.
We've worked with for and while previously to create loops. Let's combine this knowledge with what we just learned about Arrays.

### for...of
By now, you're familiar with `while` and `for` and can presumably *iterate* over any given *Array* with either of those. Let's consider another *iterator pattern* - fancy way of saying a 'way to loop over stuff' - `for...of`. If you understand the `for` *loop,* you'll appreciate the cleaner *syntax* offered up by `for...of`.

### functions: arguments, rest operator

---
## Objects
Objects are collections of data just like Arrays, but we can access data by name instead of sequence. All names are themselves arbitrary Strings that you're free to make up as you see fit.

>With JS Objects, 
we don't HAVE TO put quotation marks around our keys because no matter what JS will expect those to be STRINGS.
With JSON (which is not JS), we MUST always put those quotation marks around each and every key

Notice the opening and closing `{}`? Notice that **all** of the items to the left of the `:` are wrapped in `""` - what data type would that make them in JS? Notice that each 'pair' of values is separated by a `,`. 

All of these things are synonymous with JavaScript Objects! JS Objects are *scoped* with `{`s, and consist of collections of *key-value* pairs. All of the keys **must be *strings.*** The *values* can be of any data type such as the *primitives* we have seen before. They can also be other *collection types* such as O*bjects* or *Arrays* (denoted with `[]`).  

Everything in JavaScript is an *Object*...except for *primitives.*

### Accessing Properties
Notice that, just like Arrays, we can access parts of Object by the things with which that part is associated... in this case, the String we used to name our data. We can store data in Objects and access them by name using either bracket notation or a shortcut called dot notation.

So, how do we access the keys inside of an *Object?* Well, we've already been doing that: `.`. When we did `console.log()` - we said:

1. Find something in memory called `console`.
2. It's an *Object,* so use *dot notation* to access a *key* inside of that *Object*; `console.log`
3. `log` is a *method* (pretty much the same thing as a *function,* but it's 'attached' to a specific _Object), so *invoke* it with `()`.

So, with bracket notation, what's the difference with using quotation marks or not? Well, recall that quotation marks make some text behave as a string, whereas the absence of quotation marks means that JS is expecting to find a variable of that name.

### Global Objects
Hopefully you recognize that we've already been working with built-in Objects, including window and console. Typing window.location was accessing the location property of the window Object provided by the browser. console.log() invokes the log function contained in a console Object provided by the browser. window and console are part of the BOM, or Browser Object Model (notice the 'Object' part of that). It's the collection of all of the data and built-in functions provided by the browser, that we can access at any time.

> Chrome DevTools

`window` is **not** a *string.* Nor is it a *variable* that we declared. Instead it is the **global object** within the browser. It 'wraps up' all of the built in JS functionality that we have access to within the browser.

`window` is the **global object** inside of the JS Engine within the browser. It wraps all of the 'built in' JS functionality. As a convenience, we are not required to type `window.` in front of everything, even though we are always accessing keys within `window`. For that reason, we can just do `console.log()` , et al.

### Methods
When we scope a function inside of an object literal, we call this a method.

## Mutation
> Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive values. - MDN
> `const` DOES NOT mean 'constant.' It just means that we cannot **reassign** a new *value* to a `const` *variable.*