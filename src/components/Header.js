import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900">
      <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo and Title Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <img 
            src={`${process.env.PUBLIC_URL}/hpg-logo.png`} 
            alt="HPG Logo" 
            className="h-16 md:h-24 mr-4"
          />
          <h1 className="text-white text-lg md:text-3xl font-bold">
            HPG Auto Repair L.L.C
          </h1>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <a href="tel:+971521697565" className="text-white text-sm md:text-lg flex items-center">
            <span role="img" aria-label="phone">📞</span> +971 52 169 7565
          </a>
          <a href="tel:+971529773887" className="text-white text-sm md:text-lg flex items-center">
            <span role="img" aria-label="phone">📞</span> +971 52 977 3887
          </a>

          {/* Social Media Icons */}
          <div className="flex space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
        </div>

        {/* Book Now Button */}
        <div className="mt-4 md:mt-0">
          <button
            onClick={() => alert("Booking functionality not yet implemented.")}
            className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 text-sm md:text-lg"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-red-600 text-white mt-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
          <ul className="flex flex-wrap justify-center relative">
            <li><Link to="/" className="hover:underline p-3 md:p-4">Home</Link></li>

            {/* Services Dropdown */}
            <li className="relative group">
              <span className="hover:underline p-3 md:p-4 cursor-pointer">Services</span>
              <div className="absolute bg-white text-black p-2 mt-2 rounded shadow-lg z-10 hidden group-hover:block">
                <Link to="/services/oilChange" className="block p-2 hover:bg-gray-200">Oil Change</Link>
                <Link to="/services/tireRotation" className="block p-2 hover:bg-gray-200">Tire Rotation</Link>
                {/* Add more services here */}
              </div>
            </li>

            {/* Specializes Dropdown */}
            <li className="relative group">
              <span className="hover:underline p-3 md:p-4 cursor-pointer">Specializes</span>
              <div className="absolute bg-white text-black p-2 mt-2 rounded shadow-lg z-10 hidden group-hover:block">
                <Link to="/specializes/engineRepair" className="block p-2 hover:bg-gray-200">Engine Repair</Link>
                <Link to="/specializes/bodyWork" className="block p-2 hover:bg-gray-200">Body Work</Link>
                {/* Add more specializations here */}
              </div>
            </li>

            <li><Link to="/about" className="hover:underline p-3 md:p-4">About Us</Link></li>
            <li><Link to="/testimonials" className="hover:underline p-3 md:p-4">Testimonials</Link></li>
            <li><Link to="/blogs" className="hover:underline p-3 md:p-4">Blogs</Link></li>
            <li><Link to="/appointments" className="hover:underline p-3 md:p-4">Appointments</Link></li>
            <li><Link to="/contact" className="hover:underline p-3 md:p-4">Contact Info</Link></li>
            <li><Link to="/login" className="hover:underline p-3 md:p-4">Login</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
