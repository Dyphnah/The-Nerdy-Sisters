
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import WorkWithUs from './WorkWithUs.jsx';
import Blog from './Blog.jsx';
import Consulting from './Consulting.jsx';
import Portfolio from './Portfolio.jsx';
import Footer from './Footer.jsx';
import NotFound from './NotFound.jsx';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/consult" element={<Consulting />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;




