import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Bookbtn from './components/layout/Bookbtn';
import Hamburger from './components/layout/Hamburger';
// import Logo from './components/layout/Logo';

import { Home } from './components/pages/Home';
import { Gallery } from './components/pages/Gallery';
import { Offer } from './components/pages/Offer';
import { About } from './components/pages/About';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Hamburger />
        <Bookbtn />
        <Navbar />
        <Sidebar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/offer' element={<Offer />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
