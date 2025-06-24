// components/Chatbot.jsx
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { MessageCircle } from "lucide-react"; // You can replace with any icon

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I’m your real estate assistant. Ask me anything about properties or trends.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setInput("");

    try {
      const res = await axios.post("http://localhost:5000/chat", { message: input });
      const botReply = { sender: "bot", text: res.data.reply };
      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      console.error("Chatbot error:", err);
      setMessages((prev) => [...prev, { sender: "bot", text: "⚠️ Failed to reach the assistant." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      {/* Floating Icon Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all z-50"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-2 bg-blue-600 text-white rounded-t-xl">
            <h2 className="text-lg font-semibold">🏡 Real Estate Chatbot</h2>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 text-xl">&times;</button>
          </div>

          {/* Chat Body */}
          <div className="h-96 overflow-y-auto space-y-3 p-2 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-md max-w-[80%] text-sm ${
                  msg.sender === "user"
                    ? "ml-auto bg-blue-200 text-right"
                    : "mr-auto bg-gray-200 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <div className="text-gray-500 text-sm">Typing...</div>}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="flex border-t p-2">
            <input
              type="text"
              className="flex-1 border rounded-l px-2 py-1 text-sm focus:outline-none"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-3 py-1 rounded-r hover:bg-blue-700 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
