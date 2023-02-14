import React from 'react';
import Logo from '../layout/Logo';
import { ImagerDisplay, imagerShow, ImagerImg } from '../imager/index.js';
import classes from './Home.module.css';

export const Home = () => {
  return (
    <div className={classes.home}>
      <Logo />

      <h1 className={`${classes.pageTitle} large`}>
        Skönhetssalong - Centrumvägen 17, Vagnhärad.
        <br />
        Fransförlangning & ÖgonBryn & Naglar
        <br />
        <br />
      </h1>

      <div className={classes.homePhoto}>
        <ImagerDisplay z-index='2000' />
        <div className={classes.salon}>
          <ImagerImg
            // width='100px'
            src={require('../layout/img/salonUt.jpg')}
            alt='Salong Utte'
          />
        </div>
        <div className={classes.salon}>
          <ImagerImg
            // width='100px'
            src={require('../layout/img/salonIn.jpg')}
            alt='Salong Inne'
          />
        </div>
      </div>
    </div>
  );
};
