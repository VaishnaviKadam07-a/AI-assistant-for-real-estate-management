import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const teamMembers = [
  { name: "Vaishnavi Kadam", role: "", image:assets.VK },
  { name: "Srushti Mahadik", role: "", image: "https://via.placeholder.com/150" },
  { name: "Prajakta Pawar", role: "", image: assets.PP },
  { name: "Janhvi Zarekar", role: "", image: "https://via.placeholder.com/150"},
];

const coreValues = [
  { title: "Transparency", description: "We ensure clear and honest communication in all our dealings." },
  { title: "Innovation", description: "We leverage AI and data science to provide the best insights." },
  { title: "Customer First", description: "Our priority is to help you find the perfect property." },
];

const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
      >
        <h1 className=" mt-20 text-5xl font-bold">About Us</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Your trusted real estate platform powered by AI and market insights.
        </p>
      </motion.section>

      {/* Core Values Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-xl font-bold">{value.title}</h3>
              <p className="mt-2 text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-white p-6 rounded-lg shadow-lg text-center overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-indigo-600"
                whileHover={{ scale: 1.1 }}
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-16 text-center bg-blue-600 text-white"
      >
        <h2 className="text-4xl font-semibold">Join Us on This Journey</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Ready to explore the best properties with AI-powered insights?
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          Contact Us
        </motion.button>
      </motion.section>
    </div>
  );
};

export default AboutUs;
