# Node Review

## What is Node?
**Node** is a JavaScript _runtime_ for running JS outside of the browser.

We've used Node to run JS files in our terminal with `node fileName`.

### Node REPL
Typing `node` into the terminal opens the **Node REPL** in your terminal. To exit the Node REPL, enter `.exit` in the terminal or press `Ctrl+D`.

We've used a REPL before in the Chrome DevTools Console tab. The DevTools REPL has more features like autosuggestions and a preview of the returned value.

***

## A New Way To Import/Export
When we learned about SPAs, we learned the ES6 syntax for importing and exporting modules. However, we saw this week that we need a different type of syntax (_CommonJS syntax_) to handle modules in Node.

The following table is found in lesson 10.1:

| Browsers (ES6 modules)                   | Node (CommonJS)                                               |
|------------------------------------------|---------------------------------------------------------------|
| `import DefaultThing from 'some-module'` | `const DefaultThing = require('some-module')`                 |
| `import { Thing } from 'some-module'`    | `const { DefaultThing } = require('some-module')`             |
| `export default DefaultThing`            | `module.exports = DefaultThing`                               |
| `export Thing`                           | `module.exports = { Thing }` or `module.exports.Thing = Thing`|

With ES6, we used the `import` and `export` keywords.

With CommonJS, `import` is effectively replaced with **`require()`**, and `export` statements are handled with **`module.exports`**.

***

### File Creation Activity (Lesson 10.1 Activity 2)
https://github.com/NAlexPear/SPA-example-with-Navigo-and-Axios/blob/master/scripts/fileCreation.js

The comments in the file do a good job explaining each step/line.

***

## Servers
Node _can_ be a REPL, run files, manipulate our file system, etc. but its most known for creating **servers**.

"Server" refers to both the software and hardware that serves _responses_ to client _requests_.

To respond to these requests the server needs 3 things:
 - Network interface (ports)
 - Communication protocol (HTTP)
 - Program listening on interface for requests (`http` Node module)

***

### Echo Server Activity (Lesson 10.2 Activity 1)
https://github.com/NAlexPear/SPA-example-with-Navigo-and-Axios/blob/master/server/echo.js
```javascript
// import built-in http module
const http = require("http");

// create echo server
const server = http.createServer((request, response) => {
  // set default headers and message
  const headers = { "Content-Type": "application/json" };
  let message = "Not Found";

  // if user makes POST request at home route
  if (request.url === "/" && request.method === "POST") {
    // reset message
    message = "";
    // as the request data comes in, construct message from request data
    request.on("data", (chunk) => (message += chunk));

    // when request is finished,
    request.on("end", () => {
      // construct/send response with status code, headers, and message
      response.writeHead(200, headers);
      response.write(JSON.stringify({ message }));
      // end our response
      response.end();
    });

    // if request is interrupted,
    request.on("error", () => {
      // set error message
      message = "Internal Server Error";
      // construct/send response with status code, headers, and message
      response.writeHead(500, headers);
      response.write(JSON.stringify({ message }));
      // end our response
      response.end();
    });
  } else {
    // if user makes any request other than POST at home route
    // or if user is not on home route and makes any kind of request

    // construct/send response with status code, headers, and message
    response.writeHead(404, headers);
    response.write(JSON.stringify({ message }));
    // end our response
    response.end();
  }
});

// have our server listen on port 8675, and log "listening" message
server.listen(8675);
console.log("listening on port 8675");
```

***

### Testing Our Node Servers with Curl and Nodemon
**Curl** allows us to check our routes/server in the terminal (instead of through the browser).
 - `curl someUrl` - basic GET request at the specified url
 - `curl -v someUrl` - verbose GET request at the specified url
 - `curl -v -X POST -d 'body content' someUrl`:
   - `-v` - verbose...
   - `-X POST` - except (instead of GET) make a POST(or other specified) request...
   - `-d 'body content'` - with this body content...
   - `someUrl` - at this url

Before **Nodemon**, to run our server and listen on a port, we entered `node myServerFile.js` in the terminal, but we had to manually restart our server after **every** change/edit we made. Ugh.

After installing Nodemon(`npm instal --save-dev nodemon`), we created a new script in our `package.json`:
```json
"watch:server": "nodemon --watch ./server -e js ./server/myServerFile.js"
// for our echo server, our file was echo.js
// for the RESTful API server, index.js is our file
```

Then, we can enter `npm run watch:server` into our terminal, and nodemon starts our server and (more importantly) **restarts** our server after changes to _any_ JS files in our `/server` folder.

***

### RESTful API Server Activity (Lesson 10.2 Activity 2)
https://github.com/NAlexPear/SPA-example-with-Navigo-and-Axios/blob/master/server/index.js

The good news with this activity is that Express will replace this complicated way of doing things.

It is valuable to understand what is going on "under the hood" before jumping into Express next week.
```javascript
// importing built-in http module
const http = require("http");

// HERE BE DATABASE CONFIGURATION
// importing modules for path, db, id, and FileSync
const path = require("path");
const lowdb = require("lowdb");
const lodashId = require("lodash-id");
const FileSync = require("lowdb/adapters/FileSync");
// create a fileSync adapter that is linked to a json file in this folder
const adapter = new FileSync(path.join(__dirname, "db.json"));
// connecting our db to the json file via the adapter
const db = lowdb(adapter);

// incorporating lodashId for auto ID in db
db._.mixin(lodashId);
// setting-up our db with a "collection"
db.defaults({ posts: [] }).write();
// HERE ENDS DATABASE CONFIGURATION

// HANDLERS object with functions for each kind of HTTP request
const HANDLERS = {
  GET(request, response) {
    // if GET request at /posts route
    if (request.url === "/posts") {
      // get posts from db
      const posts = db.get("posts").value();
      // send posts to ok helper function to write and send response
      ok(response, posts);
    } else {
      // if GET request at any route but "/posts"

      // CHECK FOR ID/SINGLE POST REQUEST
      // split route into parts
      const parts = request.url.split("/");

      // if route is exactly 2 "layers", i.e. "/someRoute/somethingElse"
      if (parts.length === 3) {
        // make last part the "id"
        const id = parts[2];
        // (attempt to) get post from the db by id
        const post = db.get("posts").getById(id).value();

        // if post exists,
        if (post) {
          // send post to ok helper function to write and send response
          ok(response, post);
        } else {
          // if post doesn't exist
          // use notFound helper function to send response
          notFound(response);
        }
      } else {
        // if route is not "/posts" or "/someRoute/something"
        // use notFound helper function to send response
        notFound(response);
      }
    }
  },
  POST(request, response) {
    // if POST request on any route
    // set empty placeholder for user data from POST request
    let contents = "";

    // as the request data comes in, construct message from request data
    request.on("data", (chunk) => (contents += chunk));

    // when request is finished,
    request.on("end", () => {
      // get posts "collection" from db and add new document
      const post = db.get("posts").insert({ body: contents }).write();
      // send post to ok helper function to write and send response
      ok(response, post);
    });

    // if request is interrupted, use internalServerError helper function to send error response
    request.on("error", () => internalServerError(response));
  },
  PATCH(request, response) {
    // if PATCH (update) request at any route

    // CHECK FOR ID/SINGLE POST ROUTE
    // split route into parts
    const parts = request.url.split("/");

    // if route is exactly 2 "layers", i.e. "/someRoute/somethingElse"
    if (parts.length === 3) {
      // make last part the "id"
      const id = parts[2];
      // set empty placeholder for user data from PATCH request
      let contents = "";

      // as the request data comes in, construct message from request data
      request.on("data", (chunk) => (contents += chunk));

      // when request is finished,
      request.on("end", () => {
        // (attempt to) update post from the db by id
        const post = db.get("posts").updateById(id, { body: contents }).write();

        // if post exists,
        if (post) {
          // send post to ok helper function to write and send response
          ok(response, post);
        } else {
          // if post doesn't exist
          // use notFound helper function to send response
          notFound(response);
        }
      });

      // if request is interrupted, use internalServerError helper function to send error response
      request.on("error", () => internalServerError(response));
    } else {
      // if PATCH request is at any route that is not 2 "layers", i.e. "/route" or "/some/long/route"

      // use notFound helper function to send response
      notFound(response);
    }
  },
  DELETE(request, response) {
    // if DELETE request at any route

    // CHECK FOR ID/SINGLE POST ROUTE
    // split route into parts
    const parts = request.url.split("/");

    // if route is exactly 2 "layers", i.e. "/someRoute/somethingElse"
    if (parts.length === 3) {
      // make last part the "id"
      const id = parts[2];

      // (attempt to) remove post by id
      const post = db.get("posts").removeById(id).write();

      // if removed post exists
      if (post) {
        // send post to ok helper function to write and send response
        ok(response, post);
      } else {
        // if post doesn't exist
        // use notFound helper function to send response
        notFound(response);
      }
    } else {
      // if DELETE request is at any route that is not 2 "layers", i.e. "/route" or "/some/long/route"

      // use notFound helper function to send response
      notFound(response);
    }
  },
};

// HELPER FUNCTIONS
// send error response
const internalServerError = (response) => {
  response.writeHead(500, { "Content-Type": "application/json" });
  response.write(JSON.stringify({ message: "Internal Server Error" }));
  response.end();
};

// send ok response with message/data
const ok = (response, payload) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.write(JSON.stringify(payload));
  response.end();
};

// send not found response
const notFound = (response) => {
  response.writeHead(404, { "Content-Type": "application/json" });
  response.write(JSON.stringify({ message: "Not Found" }));
  response.end();
};

// create RESTful API server
const server = http.createServer((request, response) => {
  // if route from request starts with "/posts", i.e. "/posts" or "/posts/something"
  if (request.url.startsWith("/posts")) {
    // use request method (to attempt) to access corresponding handler function
    const handler = HANDLERS[request.method];

    // if handler exists
    if (handler) {
      // handle the request and response
      handler(request, response);
    } else {
      // if handler doesn't exist (invalid request method)

      // use notFound helper function to send response
      notFound(response);
    }
  } else {
    // if route does not start with "/route", i.e. "/" or "/someOtherRoute/otherThing"

    // use notFound helper function to send response
    notFound(response);
  }
});

// have our server listen on port 8675, and log "listening" message
server.listen(8675);
console.log("listening on port 8675");
```
