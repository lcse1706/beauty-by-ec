import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Logo from './components/layout/Logo';

import { About } from './components/pages/About';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Sidebar />
          <Logo />
          <div className='container'>
            <Routes>
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
