import React from 'react';
import { assets } from '../assets/assets';

const FeaturedListing = () => {
  return (
    <section className="container mx-auto text-center py-16 px-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Featured Listing Of The Week</h2>
      <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row items-center p-8">
        {/* Left Side Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h4 className="text-2xl font-semibold text-gray-700 mb-3">Product Spotlight of the Week</h4>
          <p className="text-gray-600 mb-5">Exclusive property listings for your needs.</p>
          <button className="bg-sky-500 text-white px-6 py-3 rounded-md hover:bg-sky-600 transition duration-300">
            Book Now
          </button>
        </div>

        {/* Right Side Image Placeholder */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img 
            src={assets.feature} 
            alt="Featured Listing" 
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturedListing;
