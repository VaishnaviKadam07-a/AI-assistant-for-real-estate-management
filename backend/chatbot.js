const express = require("express");
const { OpenAI } = require("openai");
require("dotenv").config();

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Chatbot API Route
router.post("/", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const aiResponse = await openai.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],
    });

    res.json({ reply: aiResponse.choices[0].message.content });
  } catch (error) {
    console.error("Chatbot API Error:", error);
    res.json({ reply: "I'm having trouble answering that right now." });
  }
});

module.exports = router;
