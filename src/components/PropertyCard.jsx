{/*import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={property.imageUrl} alt={property.name} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{property.name}</h2>
        <p className="text-gray-700 mb-2">{property.location}</p>
        <div className="mb-2">
          {property.units.map((unit, index) => (
            <div key={index} className="text-gray-600">
              <span className="font-medium">{unit.type}</span> - {unit.carpetArea} - <span className="text-blue-500">{unit.price}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => navigate(`/property/${property.id}`, { state: { property } })}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
*/}

import React from "react";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={property.imageUrl} alt={property.name} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{property.name}</h2>
        <p className="text-gray-700 mb-2">{property.location}</p>
        <div className="mb-2">
          {property.units.map((unit, index) => (
            <div key={index} className="text-gray-600">
              <span className="font-medium">{unit.type}</span> - {unit.carpetArea} - <span className="text-blue-500">{unit.price}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => navigate(`/property/${property.id}`, { state: { property } })}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;

