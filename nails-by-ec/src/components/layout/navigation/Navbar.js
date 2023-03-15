import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.svg';
import classes from './Navbar.module.css';

const Navbar = () => {
  const hideNav = () => {
    document.querySelector('.navbar').classList.remove('showNav');
  };
  return (
    <nav className={`${classes.navbar} large navbar`}>
      <img style={{ cursor: 'default' }} src={logo} alt='Logo Nails By EC' />
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
          <NavLink
            onClick={hideNav}
            to='gallery'
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Galleri
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={hideNav}
            to='offer'
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Erbjudande
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={hideNav}
            to='about'
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Om Mig
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
