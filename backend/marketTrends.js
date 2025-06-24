const express = require("express");
const router = express.Router();
const MarketTrend = require("../models/MarketTrend");

// GET all market trends
router.get("/", async (req, res) => {
  try {
    const trends = await MarketTrend.find();
    console.log("📊 Market Trends Fetched:", trends);
    res.json(trends);
  } catch (error) {
    console.error("❌ Error fetching market trends:", error);
    res.status(500).json({ error: "Failed to fetch market trends" });
  }
});

module.exports = router;
