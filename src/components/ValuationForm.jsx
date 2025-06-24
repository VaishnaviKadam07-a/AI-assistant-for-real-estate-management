import React, { useState } from 'react';
import axios from 'axios';

const ValuationForm = () => {
  const [formData, setFormData] = useState({
    area: '',
    bedrooms: '',
    bathrooms: '',
    location_score: '',
    age_of_property: ''
  });

  const [predictedPrice, setPredictedPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post('http://127.0.0.1:5000/predict', {
        area: Number(formData.area),
        bedrooms: Number(formData.bedrooms),
        bathrooms: Number(formData.bathrooms),
        location_score: Number(formData.location_score),
        age_of_property: Number(formData.age_of_property)
      });

      setPredictedPrice(res.data.estimated_price_lakhs);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="mt-20 text-2xl font-bold mb-4 text-center text-gray-800">Instant Property Valuation</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="number" name="area" placeholder="Area (sq ft)" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="bedrooms" placeholder="Bedrooms" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="bathrooms" placeholder="Bathrooms" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="location_score" placeholder="Location Score (1-10)" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="age_of_property" placeholder="Age of Property (years)" onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Get Valuation</button>
      </form>

      {loading && <p className="text-blue-500 mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {predictedPrice !== null && (
        <h3 className="text-green-600 text-xl mt-4 text-center">
          Estimated Price: ₹{predictedPrice} Lakhs
        </h3>
      )}
    </div>
  );
};

export default ValuationForm;
