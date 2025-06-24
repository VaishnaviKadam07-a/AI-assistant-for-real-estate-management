require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const OpenAI = require("openai");

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(helmet());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Models
const Property = require("./models/Property");
const MarketTrend = require("./models/MarketTrend");

// OpenAI Configuration
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Recharts API (Bonus)
app.get("/api/market-trends", async (req, res) => {
  try {
    const trends = await MarketTrend.find({});
    res.json(trends);
  } catch (error) {
    console.error("❌ Failed to fetch market trends:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 🧠 Fetch properties
const getProperties = async (location, budget, amenities = []) => {
  const query = {};
  if (location) query.location = new RegExp(location, "i");
  if (budget) query.price = { $lte: parseInt(budget) };
  if (amenities.length > 0) query.amenities = { $all: amenities };

  const properties = await Property.find(query);

  return properties.length
    ? properties.map((p) =>
        `🏠 *${p.name}*\n📍 ${p.location}\n💰 ₹${p.price.toLocaleString()}\n🛠 Amenities: ${p.amenities.join(", ")}`
      ).join("\n\n")
    : "😕 No properties found for your criteria.";
};

// 🧠 Fetch market trends
const getMarketTrends = async (location) => {
  const trend = await MarketTrend.findOne({ city: new RegExp(location, "i") });

  return trend
    ? `📊 *Market Trend in ${trend.city}*\n- Avg. Price: ₹${trend.average_price.toLocaleString()}\n- Price Change: ${trend.price_change}%\n- Demand Score: ${trend.market_demand}/10\n- Last Updated: ${new Date(trend.last_updated).toLocaleDateString()}`
    : "😕 No market trend data found for that city.";
};

// 🤖 Chatbot API
app.post("/chat", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  try {
    const lower = message.toLowerCase();
    let botReply = "I'm not sure how to help with that. Could you rephrase?";

    // ✅ Extract location
    const locationMatch = message.match(/in ([a-zA-Z\s]+)/i);
    const location = locationMatch?.[1]?.trim();

    // ✅ Extract budget
    const budgetMatch = message.match(/(?:under|below|less than)\s?₹?(\d+)/i);
    const budget = budgetMatch?.[1];

    // ✅ Extract amenities
    const amenities = [];
    if (lower.includes("parking")) amenities.push("parking");
    if (lower.includes("swimming pool")) amenities.push("swimming pool");
    if (lower.includes("gym")) amenities.push("gym");

    // 🏘️ Property search
    if (lower.includes("property") || lower.includes("flat") || lower.includes("apartment")) {
      botReply = await getProperties(location, budget, amenities);

    // 📈 Market trend
    } else if (lower.includes("market trend") || lower.includes("price trend")) {
      botReply = location ? await getMarketTrends(location) : "📍 Please specify a city for market trends.";

    // 🧠 GPT fallback
    } else {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful real estate assistant." },
          { role: "user", content: message },
        ],
      });

      botReply = response.choices?.[0]?.message?.content || "I couldn't generate a response.";
    }

    res.json({ reply: botReply });

  } catch (error) {
    console.error("❌ Chatbot API Error:", error);
    res.status(500).json({ error: "Failed to get response from AI" });
  }
});

// Root Route
app.get("/", (req, res) => {
  res.send("🚀 Real Estate Chatbot API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
