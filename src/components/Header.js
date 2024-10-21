import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link to="/">HPG Auto Repair</Link>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/testimonials" className="hover:underline">Testimonials</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
