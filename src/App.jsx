import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import Navbar from "./components/Navbar";  
import Header from "./components/Header";  
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import BestDeals from "./components/BestDeals";
import FeaturedListing from "./components/FeaturedListing";
import Testimonials from "./components/Testimonials";
import Project from "./components/Project"; 
import MarketTrends from "./components/MarketTrends";
import Contact from "./components/Contact"
import AboutUs from "./components/AboutUs";
import ValuationForm from "./components/ValuationForm";
import ResearchSuburbs from "./components/ResearchSuburbs";
import PropertyDetailsPage from "./components/PropertyDetailsPage";



function App() {
  return (
    
    <Router>
    
      <Navbar />  

      <Routes>
      
        <Route 
          path="/" 
          element={
            <>
             
              <Header />  
              <HowItWorks />
              <BestDeals />
              <FeaturedListing />
              <Testimonials />
              <Chatbot />
            </>
          } 
        />
        <Route path="/projects" element={<Project />} />
        <Route path="/header" element={<Header/>}/>
        <Route path="/testimonials" element ={<Testimonials/>}/>
        <Route path="/markettrends" element ={<MarketTrends/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/About" element={<AboutUs/>}/>
        <Route path="/instant-valuation" element={<ValuationForm />} />
        <Route path="/research" element={<ResearchSuburbs/>}/>
        <Route path="/property/:id" element={<PropertyDetailsPage/>}/>
       </Routes>

      <Footer />
    </Router>
  );
}

export default App;
