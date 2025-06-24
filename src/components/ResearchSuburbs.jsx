import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const suburbs = [
  {
    name: "Wakad",
    price: "₹7,500/sq.ft",
    rentalYield: "4.2%",
    lifestyle: "Great for tech professionals, good schools nearby",
    coords: [18.5993, 73.7631],
  },
  {
    name: "Kharadi",
    price: "₹8,200/sq.ft",
    rentalYield: "4.6%",
    lifestyle: "IT hub, good connectivity, malls and offices",
    coords: [18.5516, 73.9352],
  },
  {
    name: "Baner",
    price: "₹9,000/sq.ft",
    rentalYield: "4.0%",
    lifestyle: "Premium area, cafes and lifestyle spots",
    coords: [18.559, 73.7865],
  },
  {
    name: "Hinjewadi",
    price: "₹6,800/sq.ft",
    rentalYield: "4.8%",
    lifestyle: "Ideal for IT employees, upcoming metro access",
    coords: [18.5976, 73.7061],
  },
];

const priceTrendData = {
  labels: ["2021", "2022", "2023", "2024", "2025"],
  datasets: [
    {
      label: "Avg. Price (₹/sq.ft)",
      data: [6000, 6800, 7200, 7800, 8500],
      fill: false,
      borderColor: "#3b82f6",
      tension: 0.2,
    },
  ],
};

const ResearchSuburbs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSuburbs = suburbs.filter((suburb) =>
    suburb.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 mt-20">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-1/4 bg-white p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Budget (in ₹)</label>
          <input type="range" min="4000" max="12000" className="w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Connectivity</label>
          <select className="w-full p-2 border rounded">
            <option>All</option>
            <option>Metro</option>
            <option>Bus</option>
            <option>Near IT hubs</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Safety</label>
          <select className="w-full p-2 border rounded">
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-6 space-y-6">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search Suburb"
            className="w-full p-3 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Suburb Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSuburbs.map((suburb, index) => (
            <div key={index} className="p-4 border bg-white rounded shadow">
              <h3 className="text-lg font-bold">{suburb.name}</h3>
              <p>Price: {suburb.price}</p>
              <p>Rental Yield: {suburb.rentalYield}</p>
              <p className="text-sm text-gray-600 mt-2">{suburb.lifestyle}</p>
            </div>
          ))}
        </div>

        {/* Map Display */}
        <div className="h-64 w-full">
          <MapContainer center={[18.5204, 73.8567]} zoom={11} className="h-full w-full rounded">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            />
            {filteredSuburbs.map((suburb, idx) => (
              <Marker key={idx} position={suburb.coords}>
                <Popup>{suburb.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Price Trends */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-4">Price Trend</h3>
          <Line data={priceTrendData} />
        </div>

        {/* Future Developments */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Future Developments</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Upcoming metro extension through Hinjewadi</li>
            <li>New IT park development in Kharadi</li>
            <li>Baner road widening project</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ResearchSuburbs;
