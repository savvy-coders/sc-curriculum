/*
  Possible resources
    https://university.mongodb.com/
    M001: MongoDB Basics : https://university.mongodb.com/courses/M001/about
    M220JS: MongoDB for Javascript Developers : https://university.mongodb.com/courses/M220JS/about
*/

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/pizza-place", {
  // Configuration options to remove deprecation warnings, just include them to remove clutter
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
const db = mongoose.connection;

// Import the orders routes from the routes folder, this abstracts it to make it easier to maintain
const pizzas = require("./controllers/pizzas");
const orders = require("./controllers/orders");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let db_status = "MongoDB connection not successful";

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => (db_status = "Successful opened connection to Mongo!"));

// Documentation: https://mongoosejs.com/docs/guides.html

// How you should really do it, abstract the resources into different files
//   This improves maintainability
app.use("/pizzas", pizzas);
app.use("/orders", orders);

// Initialize the server
app.listen(port, () => console.log(`Example app listening of port ${port}`));
