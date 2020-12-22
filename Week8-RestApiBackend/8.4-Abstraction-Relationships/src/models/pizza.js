const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define a mongoose schema aka model
const pizzaSchema = new mongoose.Schema({
  crust: String,
  cheese: String,
  sauce: String,
  toppings: [String],
  order: { type: Schema.Types.ObjectId, ref: "Order" }
});

// This adds all the mongoose methods to the pizzaModel
const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = {
  model: Pizza,
  schema: pizzaSchema
};
