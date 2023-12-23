// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import GallerySection from './components/Gallery';
import Home from './components/Home'; // Import the new components
import About from './components/About';
import Contact from './components/Contact';
import Donation from './components/Donation';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GallerySection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donation" element={<Donation />} />
        </Routes>
       
      </div>
      <Footer />

    </Router>


    
  );
};

export default App;
