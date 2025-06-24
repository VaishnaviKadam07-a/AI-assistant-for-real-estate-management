import React from 'react';
import { assets } from '../assets/assets';

const BestDeals = () => {
  return (
    <section className="container mx-auto text-center py-16 px-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Best Real Estate Deals</h2>
      <p className="text-gray-600 text-lg mb-10">Find the best property deals with expert insights.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Property Card 1 */}
        <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
          <img src={assets.deals1} alt="Property" className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300">
            <h3 className="text-xl font-bold">Luxury Apartment</h3>
            <p className="text-lg mt-1">1 BHK starting from ₹ 6,20,000 </p>
            <button className="mt-3 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-all">View Details</button>
          </div>
        </div>

        {/* Property Card 2 */}
        <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
          <img src={assets.deals2} alt="Property" className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300">
            <h3 className="text-xl font-bold">Modern Apartment</h3>
            <p className="text-lg mt-1"> ₹5,20,000</p>
            <button className="mt-3 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-all">View Details</button>
          </div>
        </div>

        {/* Property Card 3 */}
        <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
          <img src={assets.deals3} alt="Property" className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300">
            <h3 className="text-xl font-bold">Afford Apartment</h3>
            <p className="text-lg mt-1">₹ 1,20,000</p>
            <button className="mt-3 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-all">View Details</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestDeals;
