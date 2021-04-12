// Below we can see an example of initializing a variable (total) without the use of
// let or const. Using let or const would scope the variable to the nearest block which,
// in this case, would be this file, but since we do not use let or const the variable
// is added to the global object.
// This works the same way variables would be added to the window object in the browser
total = 42;

// notice that we DO have a console! But, unlike the browser, this console is not mapped to window.console
console.log(global);
