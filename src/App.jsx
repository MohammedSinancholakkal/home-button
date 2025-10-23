import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTop from './components/ScrollToTop';
import { Route, Routes } from 'react-router-dom';

function App() {
  // 🔍 Global search state (accessible across all pages)
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      {/* Ensures each route loads at top */}
      <ScrollToTop />

      {/* Header now receives search state */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contact />} />
        {/* Pass searchQuery to Services for live filtering */}
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products   searchQuery={searchQuery}/>} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>

      <Footer />

      {/* Scroll-to-top visible on every page */}
      <ScrollToTopButton />
    </>
  );
}

export default App;
