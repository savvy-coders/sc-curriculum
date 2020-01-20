# JavaScript and the Browser

One of the main reasons why every web developer must know JavaScript is because it is the only programming language built in to _every_ browser. For this course, we use Chrome, but by and large, all of the browsers are 'on the same page' with regards to modern ES2015+ syntax that we mentioned previously.

## Linking JS and HTML

We'll spend some time deep diving into HTML later on in our course, but for now, lets use boilerplate HTML and link a JS file to it.

The ./ is not wholly necessary for now, but will become important when we build out our Single Page Application (SPA).

---
### Activity (Everyone): Create and link HTML and JS files

1. Create a new folder called '`WebPractice`' with two files inside it: `index.html` & `scripts.js`
2. Open `index.html` in VS Code. Type `!`, then `Tab` to populate the file with boilerplate HTML 
3. Update the text content of the   `title` tag
4. Right before the _closing_ body tag (`</body>`), **begin** typing "script". Notice the emmet.io shortcut suggestions under your cursor.
5. Select `script:src` from the dropdown menu, and `<script src=""></script>` will appear.
6. Type `./scripts.js` inside the quotation marks to link the JS file to the HTML.
7. Now we have a very basic HTML file that 'loads' our JS.

> **NOTE**: emmet.io shortcuts will make much more sense when we cover some 'advanced' CSS selectors

> **TIP**: The `./` before our JS file is not wholly necessary for now, but will become important when we build out our Single Page Application (SPA).

---
Let's learn a bit more about how the web works and then emulate that process on our computers.

## Request-Response Cycle

From a high-level, when we enter a _website URL_ into our _browser_, we are making a **request** from our browser for a specific website/page.

The URL that we enter into our browser is sent through to our **I**nternet **S**ervice **P**rovider (**ISP**) and there is an attempt to translate the URL 'words' (e.g. cnn.com) into an **I**nternet **P**rotocol (**IP**) address usually using a 'phone book' of sorts via **D**omain **N**ame **S**ervers (**DNS**s). This _IP address_ is essentially a 'phone number' of sorts - a unique identifier for computers and other devices connected to the internet. 

The IP address that we are requesting for a web page should correspond to a _server_. In fact, one could navigate the web using nothing but IP addresses; of course, the web would not be as popular if everyone had to memorize IP addresses for all of their favorite sites!

A **server** is just a specially configured computer that is set up to _listen_ for data requests - such as a request that might come from a browser for a particular web page. As long as our request is valid (the page exists, we don't have to be authorized or logged in, etc.), this server will gather up the resources needed (HTML, CSS, JS, media, etc.) and send that back as a **response** that our browser knows how to "read"/_parse_ and we see the resulting page!

### browser-sync

While we are developing our projects on our local machines we'll want to simulate this process as much as possible. For this, we use [**browser-sync**](https://www.npmjs.com/package/browser-sync), an npm package.

Remember our package manager? Recall that it relies on the file '`package.json`' for most of what it does. Take another look at that file and notice one of our "devDependencies" is: `"browser-sync"`.
This just means that our project will use browser-sync for _development_ purposes (as opposed to 'production' or 'distribution' where we are 'launching' our work on the live web for the general public). 

Also, notice this line: 
```JSON
"serve": "browser-sync start --server --files '*.html, *.css, *.js'"
``` 
We have introduced a "`serve`" script that npm will use.
When we enter "`npm run serve`" in our terminal from our project directory, a special part of npm - the executor - will fire up browser-sync and start a '**local server**.' This server is set up to receive requests just like a 'real' web hosting server might do. The difference: it's all just **emulated** on our local machines, so _isn't_ publicly accessible on the internet.

Browser-sync will 'watch' the files in our directory - HTML, CSS, and our JS files - and anytime any of those change, it will _automatically_ update our page without us having to 'refresh.'

---
### Activity (Everyone): launch local server with browser-sync
1. In your terminal, and inside the `WebPractice` directory, launch a local server with `npm run serve`.
2. Chrome should launch with your local site automatically. 
3. You should see something like this in your browser's navigation bar: `localhost: 3000`. 
4. Since we didn't actually enter any HTML inside of those `<body>` tags on our '`index.html`' page, we will only see a blank screen in the browser. 
5. In VS Code, type your name inside the `body` tag, and check your browser for the result.

Here '**localhost**' is the 'website' we are visiting. This happens to correspond to a 'local IP' of `127.0.0.1`. After this, we see: '**:3000**'. The '`:`' serves as a delimiter, separating the 'web site URL' from the _port_. A server's (here just a 'local server) **port** is akin to a 'channel' that is especially configured to receive, in this case, web requests. You might think of this as your phone having a phone number (IP address), but different 'modes' or 'channels' by which one can call you or just text you. The same IP address for a server will have some different ports for handling different types of requests such as for receiving emails (MX), or requesting raw files (FTP protocol), etc.

We just be making **HyperText Transfer Protocol Requests** (HTTP) requests - the type of requests that we make from a browser to request and render web pages.

---

## Chrome DevTools

We can use Dev Tools to play around with JS in our browser. Open those tools up with either "`Ctrl + Shift + I`" on Windows or "`Cmd + Option + I`" on Mac. 

> **TIP**: Click the 3 dots you see there towards the top right and you can customize your DevTools settings. You can change which side DevTools is docked to. You could also select 'settings' and change the theme to 'dark' if you prefer.

### Console Tab

Most importantly, look for the tab that says '**Console**'. Click on that to get to the DevTools console. 

> **TIP**: You may safely ignore any warnings, errors or other messages you see there. In fact, you can clear that console with ('`CTRL+L`'). 

This tab gives us full access to a JS 'playground' of sorts, known as a _**R**ead-**E**valuate-**P**rint-**L**oop_ (**REPL**). For now, just know that a REPL _reads_ our code as we type, continually _evaluates_ it, _prints_ whatever response it deems appropriate, and then _loops_ back around awaiting further input.

Try typing some simple JS code in here, such as, console.log('Hello, World!'). What happens?
Why do we see undefined? Well, we'll talk more about this when we get into functions. 

The undefined means that after console.log() has been invoked (a fancy word for saying that we ran or executed a function), REPL doesn't have anything better to tell us about what just happened. More specifically,log() just returns undefined. Again, we'll be going over functions soon enough.

---
### Activity (Students): explore the DevTools REPL
1. Enter `console.log('Hello, World!')` in the DevTools "Console" tab. 
2. Three lines appear after submitting the `log`: The first says `Hello World`, the second begins with a character like `<` and says `undefined`, the third line begins with a character like `>` prompting for another input from the user.
3. The `console.log` function 'logs'/_writes_ its contents (`Hello World`) in the console, but doesn't _return_ anything (`undefined`).
4. Now type `5 + 5` in the Console, but don't hit enter yet.
5. Notice that before even entering the line, the REPL has evaluated the expression and previews the return (`10`).
6. Still without hitting enter, add another ` + 5` to the end of the line. The return preview updates to `15`.
7. Hit enter: the REPL returns `15` and "loops" back to listen for more user input.
8. For the next section, enter `console.log(window)` and click the triangle next to `Window {...` to expand it.
---

## Global Window Object

`window` is not a string. Nor is it a variable that we declared. Instead it is the **global object** within the _browser_. It 'wraps up' all of the built-in JS functionality that we have access to within the browser. 

As a convenience, we are not required to type "`window.`" in front of everything, even though we are _always_ accessing keys within `window` - i.e. We can just write `console.log()` , we don't need to write `window.console.log()`.
Some other useful window methods to try are: `alert('hello!')` or `location()`. Check these out in DevTools and discuss any questions with your TA.

Go back and have a look at '`package.json`'. Remember, that JSON stands for **JavaScript Object Notation** - a simple 'universal' text (_not JS_) format that _resembles_ JS Objects! Take a closer look and note some of the characteristics of this format.

* Notice the opening and closing `{ }`? 
* Notice that all of the items to the left of the `:` are wrapped in `" "` - what data type would that make them in JS?
* Notice that each 'pair' of values is separated by a `,`.

All of these things are synonymous with **JavaScript Objects**! JS Objects are scoped with `{ }`, and consist of collections of **key-value pairs**. All of the **keys** must be strings. The **values** can be of any data type such as the primitives we have seen before. They can also be other _data collection_ types such as Objects or Arrays.

So, how do we access the keys inside of an Object? Well, we've already been doing that: When we wrote "`console.log()`" - we said:
* Find something in memory called "console".
* It's an Object, use _dot notation_ to access a key - "log" - inside of that Object
* "log" is a _method_ (pretty much the same thing as a _function_, but it's 'attached' to a specific Object), so _invoke_ it with `()`.

---
### Activity (Everyone): exploring the `window` object
1. Scroll through the expanded `window` object and examine some of the many keys available.
2. Some keys that may interest you are `document`, `screen`, `location`, `alert`, `console`, and `Math`. Try to find them in the global window object, or just `console.log()` the term to examine.

---
