// components/Testimonials.js
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="bg-blue-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 shadow rounded">
            <p>"The service at HPG Auto Repair is top-notch. I wouldn't take my car anywhere else."</p>
            <h4 className="mt-4 font-bold">- John D.</h4>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <p>"Fast, friendly, and affordable. I highly recommend HPG Auto Repair!"</p>
            <h4 className="mt-4 font-bold">- Sarah W.</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;