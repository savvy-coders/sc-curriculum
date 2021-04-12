const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const delivery = require("./delivery");
const notes = require("./note");

// Demonstrate linking vs embedding
const orderSchema = new mongoose.Schema({
  pizzas: [{ type: Schema.Types.ObjectId, ref: "Pizza" }],
  customer: { type: Schema.Types.ObjectId, ref: "Customer" },
  delivery: delivery.schema,
  notes: [notes.schema]
});

const Order = mongoose.model("Order", orderSchema);

module.exports = {
  model: Order,
  schema: orderSchema
};
