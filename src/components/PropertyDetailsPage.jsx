import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PropertyDetailsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const property = state?.property;

  // Dummy amenities
  const amenities = [
    "Swimming Pool",
    "Gymnasium",
    "24x7 Security",
    "Power Backup",
    "Children's Play Area",
    "Clubhouse",
    "Landscape Garden",
    "Rainwater Harvesting",
    "Elevators",
    "Intercom Facility"
  ];

  if (!property) {
    return (
      <div className="p-6 text-center text-red-500 mt-20">
        Property not found. Please go back and try again.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <button onClick={() => navigate(-1)} className="text-blue-600 mb-4 hover:underline">
        ← Back
      </button>

      <img
        src={property.imageUrl}
        alt={property.name}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
      <p className="text-gray-600 text-lg mb-4">{property.location}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {property.units.map((unit, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-4 bg-gray-50 shadow-sm"
          >
            <p><strong>Type:</strong> {unit.type}</p>
            <p><strong>Area:</strong> {unit.carpetArea}</p>
            <p><strong>Price:</strong> <span className="text-blue-600">{unit.price}</span></p>
          </div>
        ))}
      </div>

      {/* Amenities Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Amenities</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 list-disc pl-5 text-gray-700">
          {amenities.map((amenity, idx) => (
            <li key={idx}>{amenity}</li>
          ))}
        </ul>
      </div>

      <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
        Contact Agent
      </button>
    </div>
  );
};

export default PropertyDetailsPage;
