// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
