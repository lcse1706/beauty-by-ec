import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import classes from './Navbar.module.css';

const Navbar = () => {
  const hideNav = () => {
    console.log('it works');
    document.querySelector('.navbar').classList.remove('showNav');
  };
  return (
    <nav className={`${classes.navbar} large`}>
      <img src={logo} alt='Logo Nails By EC' />
      <ul className={classes.list}>
        <li>
          <NavLink
            onClick={hideNav}
            to=''
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Hem
          </NavLink>
        </li>
        <li>
          <NavLink onClick={hideNav} to='gallery'>
            Galleri
          </NavLink>
        </li>
        <li>
          <NavLink onClick={hideNav} to='offer'>
            Erbjudande
          </NavLink>
        </li>
        <li>
          <NavLink onClick={hideNav} to='about'>
            Om Mig
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
