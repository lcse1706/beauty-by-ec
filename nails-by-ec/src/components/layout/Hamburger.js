import React from 'react';
import classes from './Hamburger.module.css';

const Hamburger = () => {
  const handleMenu = () => {
    // console.log('it works');
    document.querySelector('.navbar').classList.toggle('showNav');
  };

  return (
    <div>
      <button onClick={handleMenu} className={classes.hamburger}>
        <i className='fa fa-bars fa-2x'></i>
      </button>
    </div>
  );
};

export default Hamburger;
