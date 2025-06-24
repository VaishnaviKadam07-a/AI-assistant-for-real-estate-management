import React, { useState, useEffect, useRef } from 'react';
import { Link ,useNavigate} from 'react-router-dom';  
import { assets } from '../assets/assets';
import AuthForm from '../components/AuthForm';

const Navbar = () => {
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate(); 

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    // 1. Clear the authentication token from localStorage
    localStorage.removeItem('authToken');  // Or use sessionStorage if you're using it

    // 2. Redirect to the login page (or home)
    navigate('/header');  

    // 3. Hide the profile dropdown
    setShowProfileDropdown(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-[#1A237E] shadow-md z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32">

          {/* Logo */}
          <img src={assets.favicon} alt="Logo" className="w-12 h-12" />

          {/* Desktop Navigation */}
          <ul className="hidden md:flex flex-grow justify-center gap-7 text-white font-semibold">
            <Link to="/Header" className="cursor-pointer hover:text-gray-300 transition">Home</Link>
            <Link to="/About" className="cursor-pointer hover:text-gray-300 transition">About</Link>
            <Link to="/Projects" className="cursor-pointer hover:text-gray-300 transition">Projects</Link>
            <Link to="/MarketTrends" className="cursor-pointer hover:text-gray-300 transition">Trends</Link>
            <Link to="/Testimonials" className="cursor-pointer hover:text-gray-300 transition">Testimonials</Link>
           
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-6 relative">
            
            {/* Hamburger Menu (Mobile) */}
            <button 
              className="md:hidden text-white text-3xl focus:outline-none" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
              <div className="absolute top-16 right-0 bg-[#1A237E] w-48 shadow-lg rounded-md flex flex-col md:hidden">
                <a href="#Header" className="block px-4 py-2 text-white hover:bg-blue-800">Home</a>
                <a href="#About" className="block px-4 py-2 text-white hover:bg-blue-800">About</a>
                <Link to="/projects" className="block px-4 py-2 text-white hover:bg-blue-800">Projects</Link> {/* ✅ Fixed */}
                <a href="#Testimonials" className="block px-4 py-2 text-white hover:bg-blue-800">Testimonials</a>
              </div>
            )}

            {/* Login / Signup Button */}
            <button 
              className="bg-white text-[#1A237E] px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
              onClick={() => setShowAuthForm(true)}
            >
              Login / Sign up
            </button>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <img 
                src={assets.profile} 
                className="w-10 h-10 rounded-full cursor-pointer border border-gray-300"
                alt="Profile"
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              />
              
              {/* Profile Menu */}
              {showProfileDropdown && (
                <div className="absolute right-0 mt-12 w-48 bg-white shadow-md rounded-lg p-2">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">Profile</button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">Settings</button>
                  <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-200"
                    onClick={handleLogout} >Log out</button>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* AuthForm Modal */}
      {showAuthForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button 
              className="absolute top-3 right-4 text-gray-600 text-xl"
              onClick={() => setShowAuthForm(false)}
            >
              &times;
            </button>
            <AuthForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
