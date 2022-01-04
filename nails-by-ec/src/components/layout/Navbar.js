import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar large'>
      <div>
        <img
          src={logo}
          alt='Logo Nails By EC'
          style={{ margin: 'auto', display: 'block', width: 250 }}
        />
      </div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/'>Gallery</Link>
        </li>
        <li>
          <Link to='/'>Offer</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <div>
        <a className='booktime'>Boka Tid !</a>
        {/* <div>
          mail.<a href='mailto: ewa@nailsbyec.se'>ewa@nailsbyec.com</a>
        </div>
        <div>tel. 072 761 50 18</div> */}
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Nails By EC',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
