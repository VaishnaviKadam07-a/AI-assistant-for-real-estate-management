import React from 'react';
import { assets } from '../assets/assets';
import {Link } from 'react-router-dom'

const HowItWorks = () => {
  return (
    <section className="container mx-auto text-center py-16 px-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">How It Works?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Research Suburbs Card */}
        <Link to="/research">
        <div className=" bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform">
          <span className="text-sky-500 text-5xl mb-4">
            <i className="ri-search-line"></i>
          </span>
          <img src={assets.search} alt='' className='w-10 h-8 mb-4' />
          <h4 className="text-xl font-semibold text-gray-700 mb-2">Research Suburbs</h4>
          <p className="text-gray-600">Find the best location that aligns with your needs.</p>
        </div>
        </Link>
        {/* Instant Valuation Card */}
        <Link to="/instant-valuation" className="w-full sm:w-auto">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform cursor-pointer">
            <span className="text-sky-500 text-5xl mb-4">
              <i className="ri-hand-coin-fill"></i>
            </span>
            <img src={assets.value} alt='' className='w-10 h-8 mb-4' />
            <h4 className="text-xl font-semibold text-gray-700 mb-2">Instant Valuation</h4>
            <p className="text-gray-600 text-center">Get quick property valuations using technology.</p>
          </div>
        </Link>

        {/* Track Property Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform">
          <span className="text-sky-500 text-5xl mb-4">
            <i className="ri-building-fill"></i>
          </span>
          <img src={assets.track} alt='' className='w-10 h-8 mb-4' />
          <h4 className="text-xl font-semibold text-gray-700 mb-2">Track Property</h4>
          <p className="text-gray-600">Monitor properties using real-time tracking tools.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
