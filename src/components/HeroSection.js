// components/HeroSection.js
import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="bg-blue-500 text-white text-center py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Welcome to HPG Auto Repair</h2>
        <p className="text-xl">Expert Auto Repair Services in Your Area</p>
        <button className="mt-6 px-6 py-3 bg-gray-800 rounded hover:bg-gray-700">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default HeroSection;