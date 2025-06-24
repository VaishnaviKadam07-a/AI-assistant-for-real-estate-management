const mongoose = require("mongoose");

const MarketTrendSchema = new mongoose.Schema({
  city: String,
  average_price: Number,
  price_change: Number,
  market_demand: Number,
  last_updated: Date,
}, {
  collection: "market_trends",
});

const MarketTrend = mongoose.model("MarketTrend", MarketTrendSchema);

module.exports = MarketTrend;
