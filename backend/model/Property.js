const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number,
  description: String,
  amenities: [String],
});

module.exports = mongoose.model("Property", PropertySchema);
