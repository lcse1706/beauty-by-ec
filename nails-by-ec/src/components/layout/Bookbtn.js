import React from 'react';
import classes from './BookBtn.module.css';

const LogoWithBookbtn = () => {
  return (
    <div className='large'>
      <a
        href='https://www.bokadirekt.se/places/beauty-by-ec-47018'
        target='blink_'
        className={classes.booktime}
      >
        Boka Tid
      </a>
    </div>
  );
};

export default LogoWithBookbtn;
