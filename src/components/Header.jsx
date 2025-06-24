import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import MarketTrends from "./MarketTrends";
import { assets } from "../assets/assets";


const Header = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    setBgLoaded(true);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center w-full bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${assets.header_img})`,
      }}
      id="Header"
    >
      <Navbar />

      <div className="container text-center mx-auto py-10 px-6 md:px-20 lg:px-32 relative z-10">
        <h2 className="mt-24 text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold leading-tight max-w-3xl mx-auto text-white">
          Explore homes that <br /> fit your dreams
        </h2>

       
        <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
          <Link to="/Project" className="border px-8 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
            Projects
          </Link>
          <Link to="/Contact" className=" border px-8 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
            Contact Us
          </Link>
        </div>
      </div>

      {/*<MarketTrends />*/}
    </div>
  );
};

export default Header;
