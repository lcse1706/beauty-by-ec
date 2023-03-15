import React from 'react';
import Logo from '../components/layout/Logo';

import classes from './Home.module.css';
import MyGallery from '../components/gallery/MyGallery';

const imgs = [
  {
    src: require('../components/layout/img/salonUt.jpg'),
    alt: 'Salong Utte',
  },
  {
    src: require('../components/layout/img/salonIn.jpg'),
    alt: 'Salong Inne',
  },
];

export const Home = () => {
  return (
    <div className={classes.home}>
      <Logo />

      <h1 className={`${classes.pageTitle} large`}>
        Skönhetssalong - Centrumvägen 17, Vagnhärad.
        <br />
        Fransförlangning & ÖgonBryn & Naglar
      </h1>
      <div className={classes.homePhoto}>
        <MyGallery images={imgs} />
      </div>
    </div>
  );
};
