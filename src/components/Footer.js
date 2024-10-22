// components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 HPG Auto Repair. All rights reserved.</p>
        <p>Contact us: info@hpgautorepair.com</p>
      </div>
    </footer>
  );
};

export default Footer;