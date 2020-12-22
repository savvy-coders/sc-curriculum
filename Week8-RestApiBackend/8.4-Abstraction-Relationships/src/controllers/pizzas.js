const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const Customer = require("../models/customer");
const Pizza = require("../models/pizza");

// Create method/route
// Demonstrate route handler middleware
router.post(
  "/",
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
    const newPizza = new Pizza.model(req.body);
    // The save method comes from Mongoose
    newPizza.save((error, data) => {
      // sendStatus sends 200 by default
      return error ? res.sendStatus(500).json(error) : res.json(data);
    });
  }
);

router.get("/", (req, res) => {
  Pizza.model.find({}, (error, data) => {
    return error ? res.sendStatus(500).json(error) : res.json(data);
  });
});

/*
  I originally named the param :pizzaId but then changed it to :id
  This allows it to be more universal for reproduction or abstraction
*/
router.get("/:id", (req, res) => {
  // Request parameters (params) are defined in the route, queryParams are provided after the url behind a ? and & in key=value pairs
  Pizza.model.findById(req.params.id, (error, data) => {
    return error ? res.sendStatus(500).json(error) : res.json(data);
  });
});

router.put("/:id", (req, res) => {
  const data = req.body;
  Pizza.model.findByIdAndUpdate(
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

router.delete("/:id", (req, res) => {
  Pizza.model.findByIdAndDelete(req.params.id, {}, (error, data) => {
    if (error) {
      return res.sendStatus(500).json(error);
    }
    return res.json(data);
  });
});

module.exports = router;
