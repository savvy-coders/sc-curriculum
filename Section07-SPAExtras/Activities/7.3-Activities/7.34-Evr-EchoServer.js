// import the http module
const http = require("http");

// create a server that handles requests and sends responses
const server = http.createServer((request, response) => {
  // set default header and msg
  const headers = { "Content-Type": "application/json" };
  let msg = "Not Found";

  // if the user is on the home route and makes a post request
  if (request.url === "/" && request.method === "POST") {
    // reset and construct message from request data
    console.log("processing request");
    msg = "";
    request.on("data", chunk => {
      console.log("chunk", chunk);
      msg += chunk;
      return msg;
    });
    console.log("message constructed", msg);

    // if request is done sending data,
    request.on("end", () => {
      // construct "ok" response that echos request message back
      response.writeHead(200, headers);
      response.write(JSON.stringify({ msg }));
      response.end();
    });

    // if request encounters an error,
    request.on("error", () => {
      // reset message
      msg = "Internal Server Error";
      // construct "error" response with error message
      response.writeHead(500, headers);
      response.write(JSON.stringify({ msg }));
      response.end();
    });
  } else {
    // ELSE if any route other than "/" or not a post request
    // construct "not found" response with default message
    response.writeHead(404, headers);
    response.write(JSON.stringify({ msg }));
    response.end();
  }
});

// have the server listen on a port
server.listen(4040);
// log a message saying the server is listening
console.log("listening on port 4040");
