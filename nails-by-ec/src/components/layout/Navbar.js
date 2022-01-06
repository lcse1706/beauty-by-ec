import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
// import logo from './logo.png';

const Navbar = () => {
  const hideNav = () => {
    console.log('it works');
    document.querySelector('.navbar').classList.remove('showNav');
  };
  return (
    <nav className='navbar large'>
      <div>
        <img
          src={logo}
          alt='Logo Nails By EC'
          style={{ margin: 'auto', display: 'block' }}
        />
        <ul>
          <li>
            <Link onClick={hideNav} to='/home'>
              Hem
            </Link>
          </li>
          <li>
            <Link onClick={hideNav} to='/gallery'>
              Galleri
            </Link>
          </li>
          <li>
            <Link onClick={hideNav} to='/offer'>
              Erbjudande
            </Link>
          </li>
          <li>
            <Link onClick={hideNav} to='/about'>
              Om Mig
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
