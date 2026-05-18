import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import './App.css'
const App = () => {
  return (
  <>
   <Navbar/>
   {/* <Contact/> */}
  <Routes>  
    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>

  </>
  )
}

export default App