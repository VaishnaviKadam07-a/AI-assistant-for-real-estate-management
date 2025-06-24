import React from 'react';
import { assets } from '../assets/assets';

const Testimonials = () => {
  return (
    <section className="container mx-auto text-center py-16 px-6">
      <h2 className="mt-24 text-4xl font-bold text-gray-800 mb-8">What Our Clients Say</h2>
      <div className="flex justify-between gap-12">
        {/* First Testimonial */}
        <div className="testimonial-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-center mb-6">
            <img 
              src={assets.customer1}
              alt="Priya Jagtap" 
              className="w-20 h-20 rounded-full object-cover mr-4" 
            />
            <div>
              <h4 className="font-semibold text-gray-700">Priya Jagtap</h4>
              <p className="text-gray-500">Customer</p>
            </div>
          </div>
          <p className="text-gray-600 mb-4">"This website helped me find my dream home!"</p>
        </div>
        
        {/* Second Testimonial */}
        <div className="testimonial-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-center mb-6">
            <img 
              src={assets.customer2} 
              alt="Abhinav Sharma" 
              className="w-20 h-20 rounded-full object-cover mr-4" 
            />
            <div>
              <h4 className="font-semibold text-gray-700">Abhinav Sharma</h4>
              <p className="text-gray-500">Customer</p>
            </div>
          </div>
          <p className="text-gray-600 mb-4">"A seamless property search experience."</p>
        </div>

        {/* Third Testimonial */}
        <div className="testimonial-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-center mb-6">
            <img 
              src={assets.customer3} 
              alt="Ruturaj Gaikwad" 
              className="w-20 h-20 rounded-full object-cover mr-4" 
            />
            <div>
              <h4 className="font-semibold text-gray-700">Ruturaj Gaikwad</h4>
              <p className="text-gray-500">Customer</p>
            </div>
          </div>
          <p className="text-gray-600 mb-4">"Fantastic service, highly recommend!"</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
