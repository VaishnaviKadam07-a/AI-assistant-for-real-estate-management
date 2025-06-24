import React from 'react';
import PropertyCard from './PropertyCard';
import { assets } from '../assets/assets';

const properties = [
  {
    id: 1,
    name: 'Luxury Villa in Wakad',
    location: 'Pune West',
    units: [
      { type: 'Villa', carpetArea: '3000 sq.ft', price: '₹8,250 per sq.ft.' }
    ],
    imageUrl: assets.ap1 ,
  },
  {
    id: 2,
    name: 'Premium Apartment in Kharadi',
    location: 'Pune East',
    units: [
      { type: 'Apartment', carpetArea: '1200 sq.ft', price: '₹10,350 per sq.ft.' }
    ],
    imageUrl: assets.ap2 || require('../assets/ap2.jpg'),
  },
  {
    id: 3,
    name: 'Modern Apartment in Baner',
    location: 'Pune West',
    units: [
      { type: 'Apartment', carpetArea: '1350 sq.ft', price: '₹11,100 per sq.ft.' }
    ],
    imageUrl: assets.ap3 ,
  },
  {
    id: 4,
    name: 'Affordable Housing in Punawale',
    location: 'Pune West',
    units: [
      { type: 'Apartment', carpetArea: '1000 sq.ft', price: '₹6,700 per sq.ft.' }
    ],
    imageUrl: assets.ap4,
  },
  {
    id: 5,
    name: 'IT Hub Residency in Hinjewadi',
    location: 'Hinjewadi',
    units: [
      { type: 'Apartment', carpetArea: '1100 sq.ft', price: '₹7,750 per sq.ft.' }
    ],
    imageUrl: assets.ap5 ,
  },
  {
    id: 6,
    name: 'Upscale Home in Karve Nagar',
    location: 'Pune Central',
    units: [
      { type: 'Apartment', carpetArea: '1400 sq.ft', price: '₹11,900 per sq.ft.' }
    ],
    imageUrl: assets.ap6 ,
  },
  {
    id: 7,
    name: 'Ajeenkya Singapune',
    location: 'Pune City',
    units: [
      { type: 'Penthouse', carpetArea: '1800 sq.ft', price: '₹15,500 per sq.ft.' }
    ],
    imageUrl: assets.ap7 ,
  },
  {
    id: 8,
    name: 'Smart Home in Viman Nagar',
    location: 'Viman Nagar',
    units: [
      { type: 'Smart Home', carpetArea: '1250 sq.ft', price: '₹12,000 per sq.ft.' }
    ],
    imageUrl: assets.ap8 ,
  },
  {
    id: 9,
    name: 'Budget Apartment in Hadapsar',
    location: 'Hadapsar',
    units: [
      { type: 'Apartment', carpetArea: '850 sq.ft', price: '₹6,200 per sq.ft.' }
    ],
    imageUrl: assets.ap9 ,
  },
  {
    id: 10,
    name: 'Villa in Bavdhan',
    location: 'Bavdhan',
    units: [
      { type: 'Villa', carpetArea: '3200 sq.ft', price: '₹9,800 per sq.ft.' }
    ],
    imageUrl: assets.ap10 ,
  },
  {
    id: 11,
    name: 'Mantra Mirari Phase 2',
    location: 'Mundhwa',
    units: [
      { type: '3 BHK', carpetArea: '1372-1486 sq.ft', price: '₹2.05 Cr - ₹2.30 Cr' },
      { type: '4 BHK', carpetArea: '1606-1727 sq.ft', price: '₹2.50 Cr - ₹2.69 Cr' }
    ],
    imageUrl: assets.ap11 ,
  },
  {
    id: 12,
    name: 'Nyati Evoque',
    location: 'Kalyani Nagar',
    units: [
      { type: '3 BHK', carpetArea: '1519 sq.ft', price: '₹3.57 Cr' },
      { type: '4 BHK', carpetArea: '1780 sq.ft', price: '₹4.20 Cr' }
    ],
    imageUrl: assets.ap12 ,
  },
  {
    id: 13,
    name: 'Vascon Goodlife Codename Gharplus',
    location: 'Talegaon Dabhade',
    units: [
      { type: '1 BHK', carpetArea: '367 sq.ft', price: '₹22.49 L' },
      { type: '2 BHK', carpetArea: '473 sq.ft', price: '₹28.98 L' }
    ],
    imageUrl: assets.ap13 ,
  },
  {
    id: 14,
    name: 'NG Rathi Nandanvan',
    location: 'Vishrant Wadi',
    units: [
      { type: '2 BHK', carpetArea: '700-872 sq.ft', price: '₹84 L - ₹1.03 Cr' },
      { type: '3 BHK', carpetArea: '955-1111 sq.ft', price: '₹1.13 Cr - ₹1.30 Cr' }
    ],
    imageUrl: assets.ap14 ,
  },
  {
    id: 15,
    name: 'Sukhwani Skylines',
    location: 'Wakad',
    units: [
      { type: '2 BHK', carpetArea: '756 sq.ft', price: '₹85.98 L - ₹1.06 Cr' },
      { type: '3 BHK', carpetArea: '938 sq.ft', price: '₹1.32 Cr - ₹1.34 Cr' }
    ],
    imageUrl: assets.ap15 ,
  },
  {
    id: 16,
    name: 'Skyi Star City',
    location: 'Dhayari',
    units: [
      { type: '2 BHK', carpetArea: '607 sq.ft', price: '₹44 L' },
      { type: '3 BHK', carpetArea: '757 sq.ft', price: '₹58 L' }
    ],
    imageUrl: assets.ap16 ,
  },
  {
    id: 17,
    name: 'Tatvam V Uptown',
    location: 'Ravet',
    units: [
      { type: '2 BHK', carpetArea: '1129 sq.ft', price: '₹81.90 L' },
      { type: '2.5 BHK', carpetArea: '950 sq.ft', price: '₹81.90 L' },
      { type: '3 BHK', carpetArea: '1094 sq.ft', price: '₹91.90 L' }
    ],
    imageUrl: assets.ap17,
  }
];

const Project = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Available Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Project;
