import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'


function App() {
 

  return (
    <>
  
  <Header/>

  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/aboutus" element={<AboutUs />} />

  </Routes>

  <Footer/>
    </>
  )
}

export default App
