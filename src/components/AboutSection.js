// components/AboutSection.js
import React from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <p className="text-lg">
          HPG Auto Repair has been serving the community for over 20 years with expert
          auto repair services and customer care. Our team of certified mechanics
          is dedicated to ensuring your vehicle is safe and running smoothly.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;