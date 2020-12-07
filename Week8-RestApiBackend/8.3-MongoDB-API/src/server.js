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
const ordersRoute = require("./routers/orders");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let db_status = "MongoDB connection not successful";

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => (db_status = "Successful opened connection to Mongo!"));

// Documentation: https://mongoosejs.com/docs/guides.html

// Define a mongoose schema aka model
const pizzaSchema = new mongoose.Schema({
  crust: String,
  cheese: String,
  sauce: String,
  toppings: [String],
  orderId: mongoose.ObjectId
});

// This adds all the mongoose methods to the pizzaInline
const PizzaInline = mongoose.model("PizzaInline", pizzaSchema);

/*
  Define routes that the server should respond to when requested
  https://expressjs.com/en/guide/routing.html

  Routes are typically plural nouns, never verbs.   Verbs are taken care of by the request type

  The following is a basic root route to determine the Server is functioning
 */
app.get("/", (req, res) => res.send(db_status));

// Create method/route
// Demonstrate route handler middleware
app.post(
  "/pizzas",
  // Handlers should do distinct things
  // If this handler fails then the next one will not execute
  (req, res, next) => {
    console.log(`Hey cook, there is a new direct pizza order:
      Crust: ${req.body.crust},
      Sauce: ${req.body.sauce},
      Cheese: ${req.body.cheese},
      Toppings: ${req.body.toppings.join(", ")}`);
    // It is important to call next() or the call will never finish
    next();
  },
  (req, res) => {
    const newPizza = new PizzaInline(req.body);
    // The save method comes from Mongoose
    newPizza.save((error, data) => {
      // sendStatus sends 200 by default
      return error ? res.sendStatus(500).json(error) : res.json(data);
    });
  }
);

app.get("/pizzas", (req, res) => {
  PizzaInline.find({}, (error, data) => {
    return error ? res.sendStatus(500).json(error) : res.json(data);
  });
});

/*
  I originally named the param :pizzaId but then changed it to :id
  This allows it to be more universal for reproduction or abstraction
*/
app.get("/pizzas/:id", (req, res) => {
  // Request parameters (params) are defined in the route, queryParams are provided after the url behind a ? and & in key=value pairs
  PizzaInline.findById(req.params.id, (error, data) => {
    return error ? res.sendStatus(500).json(error) : res.json(data);
  });
});

app.put("/pizzas/:id", (req, res) => {
  const data = req.body;
  PizzaInline.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        crust: data.crust,
        cheese: data.cheese,
        sauce: data.sauce,
        toppings: data.toppings
      }
    },
    (error, data) => {
      return error ? res.sendStatus(500).json(error) : res.json(data);
    }
  );
});

app.delete("/pizzas/:id", (req, res) => {
  PizzaInline.findByIdAndDelete(req.params.id, {}, (error, data) => {
    if (error) {
      return res.sendStatus(500).json(error);
    }
    return res.json(data);
  });
});

app.use("/orders", ordersRoute);

// Initialize the server
app.listen(port, () => console.log(`Example app listening of port ${port}`));
