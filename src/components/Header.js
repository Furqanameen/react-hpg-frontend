import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import "../styles/Header.css"

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State for toggling the nav
  const [activeDropdown, setActiveDropdown] = useState(null); // State for toggling dropdowns

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle the nav state
  };

  const handleDropdownToggle = (dropdown) => {
    // Toggle dropdown on click (only for mobile view)
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const closeDropdown = () => {
    // Close the dropdown when a link is clicked
    setActiveDropdown(null);
  };

  const clickedMenu = () =>{
    setActiveDropdown(null);
    setIsNavOpen(false)
    console.log(isNavOpen)
    console.log("clicked button::")
  }

  return (
    <header className="">
      <div className="bg-gray-900 container mx-auto p-4 flex flex-col md:flex-row justify-between items-center">

        {/* Logo and Title Section */}
        <div className="relative">
          <div className='curve-top-left'></div>
          <div className='custom-class bd-red-1000'>
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src={`${process.env.PUBLIC_URL}/hpg-logo.png`} 
                alt="HPG Logo" 
                className="h-16 md:h-24 mr-4 z-10" // Ensure logo is above the curve
              />
            </div>
          </div>
        </div> {/* End of Logo and Title Section */}

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
        </div> {/* End of Contact Information */}

        {/* Book Now Button */}
        <div className="mt-4 md:mt-0">
          <button
            onClick={() => alert("Booking functionality not yet implemented.")}
            className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 text-sm md:text-lg"
          >
            Book Now
          </button>
        </div> {/* End of Book Now Button */}

      </div> {/* End of Main Header Section */}

      {/* Navigation Bar */}
      <nav className="bg-red-600 text-white container mx-auto">
        <div className="flex items-center justify-end"> {/* Changed justify-between to justify-end */}
          {/* Toggle Button for Mobile */}
          <button
            onClick={toggleNav}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none ml-auto"
            aria-controls="navbar"
            aria-expanded={isNavOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          {/* Navigation Links */}
          <div className={`${isNavOpen ? 'block' : 'hidden'} md:block w-full`} id="navbar">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-red-600 md:space-x-6 md:flex-row md:mt-0 md:border-0 md:bg-red-600 justify-end"> {/* Added justify-end */}
              <li><Link onClick={() => clickedMenu()} to="/" className="block py-2 px-3 text-white hover:bg-red-500 md:hover:bg-transparent md:p-0">Home</Link></li>

              {/* Services Dropdown */}
              <li className="relative group">
                <span onClick={() => handleDropdownToggle('services')} className="block py-2 px-3 text-white hover:bg-red-500 cursor-pointer">Services</span>
                <div className={`absolute bg-white text-black p-2 mt-2 rounded shadow-lg z-10 ${activeDropdown === 'services' ? 'block' : 'hidden'}`} onClick={closeDropdown}>
                  <Link to="/services/oilChange" className="block p-2 hover:bg-gray-200">Oil Change</Link>
                  <Link to="/services/tireRotation" className="block p-2 hover:bg-gray-200">Tire Rotation</Link>
                </div>
              </li> {/* End of Services Dropdown */}

              {/* Specializes Dropdown */}
              <li className="relative group">
                <span onClick={() => handleDropdownToggle('specializes')} className="block py-2 px-3 text-white hover:bg-red-500 cursor-pointer">Specializes</span>
                <div className={`absolute bg-white text-black p-2 mt-2 rounded shadow-lg z-10 ${activeDropdown === 'specializes' ? 'block' : 'hidden'}`} onClick={closeDropdown}>
                  <Link to="/specializes/engineRepair" className="block p-2 hover:bg-gray-200">Engine Repair</Link>
                  <Link to="/specializes/bodyWork" className="block p-2 hover:bg-gray-200">Body Work</Link>
                </div>
              </li> {/* End of Specializes Dropdown */}

              <li><Link onClick={() => clickedMenu()} to="/about" className="block py-2 px-3 text-white hover:bg-red-500 md:hover:bg-transparent md:p-0">About Us</Link></li>
              <li><Link onClick={() => clickedMenu()} to="/testimonials" className="block py-2 px-3 text-white hover:bg-red-500 md:hover:bg-transparent md:p-0">Testimonials</Link></li>
              <li><Link onClick={() => clickedMenu()} to="/blogs" className="block py-2 px-3 text-white hover:bg-red-500 md:hover:bg-transparent md:p-0">Blogs</Link></li>
              <li><Link onClick={() => clickedMenu()} to="/appointments" className="block py-2 px-3 text-white hover:bg-red-500 md:hover:bg-transparent md:p-0">Appointments</Link></li>
              <li><Link onClick={() => clickedMenu()} to="/contact" className="block py-2 px-3 text-white hover:bg-red-500 md:hover:bg-transparent md:p-0">Contact Info</Link></li>
              <li><Link onClick={() => clickedMenu()} to="/login" className="block py-2 px-3 text-white hover:bg-red-500 md:hover:bg-transparent md:p-0">Login</Link></li>
            </ul>
          </div>
        </div> {/* End of Navigation Container */}
      </nav> {/* End of Navigation Bar */}
    </header>
  );
};

export default Header;
