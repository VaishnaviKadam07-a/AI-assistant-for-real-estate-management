import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from "recharts";

const MarketTrends = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/market-trends")
      .then((res) => res.json())
      .then((data) => {
        console.log("📈 Received market trends:", data);
        setPrices(data);
      })
      .catch((err) => {
        console.error("❌ Error fetching market trends:", err);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Pune Real Estate Market Trends</h2>

      {/* Table */}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">City</th>
              <th className="px-4 py-2 text-left">Avg. Price (₹)</th>
              <th className="px-4 py-2 text-left">Price Change (%)</th>
              <th className="px-4 py-2 text-left">Demand Level</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((property, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{property.city}</td>
                <td className="px-4 py-2 font-semibold">
                  ₹{property.average_price?.toLocaleString()}
                </td>
                <td className="px-4 py-2 text-green-600">{property.price_change_percent}%</td>
                <td className="px-4 py-2">{property.demand_index}/100</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bar Chart */}
      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={prices}>
            <XAxis dataKey="city" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="average_price" fill="#4CAF50" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MarketTrends;
