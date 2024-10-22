// components/ServicesSection.js
import React from 'react';
import '../styles/ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-xl font-bold">Oil Change</h3>
            <p>High-quality oil changes to keep your engine running smoothly.</p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-xl font-bold">Brake Repair</h3>
            <p>Ensure your safety with expert brake repair and maintenance.</p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-xl font-bold">Tire Rotation</h3>
            <p>Extend the life of your tires with professional rotation services.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;