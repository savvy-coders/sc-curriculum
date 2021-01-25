const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  time: String,
  driver: String
});

const Delivery = mongoose.model("Delivery", deliverySchema);

module.exports = {
  model: Delivery,
  schema: deliverySchema
};
