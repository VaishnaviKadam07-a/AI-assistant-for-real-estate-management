const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();


const app = express();
app.use(cors());
app.use(express.json());

// Import authentication routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const errorHandler = require("./utils/errorHandler");
app.use(errorHandler); // Move to end

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Auth Server running on port ${PORT}`));
