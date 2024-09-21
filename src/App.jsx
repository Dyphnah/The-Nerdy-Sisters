
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import WorkWithUs from './WorkWithUs.jsx';
import Blog from './Blog.jsx';
import Consult from './Consult.jsx';
import Footer from './Footer.jsx';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/consult" element={<Consult />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;




