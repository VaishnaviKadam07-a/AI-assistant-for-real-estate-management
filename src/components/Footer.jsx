import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 md:px-20 lg:px-32 flex flex-wrap justify-between">
        
        {/* Company Info */}
        <div className="mb-6 md:w-1/3">
          <img src={assets.favicon} alt="Logo" className="w-12 h-12 mb-3" />
          <p className="text-gray-400">Building dreams, one home at a time.</p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:w-1/3">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#Header" className="hover:text-gray-300">Home</a></li>
            <li><a href="#About" className="hover:text-gray-300">About</a></li>
            <li><a href="#Projects" className="hover:text-gray-300">Projects</a></li>
            <li><a href="#Testimonials" className="hover:text-gray-300">Testimonials</a></li>
            <li><a href="#Contact" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="mb-6 md:w-1/3">
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="mt-2">📍 123 Dream Street, Pune, India</p>
          <p>📞 +123 456 7890</p>
          <p>✉ info@realestate.com</p>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © 2025 Real Estate. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
