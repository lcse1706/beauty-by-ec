import React from 'react';
import Logo from '../components/layout/Logo';
import {
  ImagerDisplay,
  imagerShow,
  ImagerImg,
} from '../components/imager/index.js';
import classes from './Home.module.css';
import MyGallery from '../components/gallery/MyGallery';

const imgs = [
  {
    url: require('../components/layout/img/salonUt.jpg'),
    alt: 'Salong Utte',
    style: { width: '400px' },
  },
  {
    url: require('../components/layout/img/salonIn.jpg'),
    alt: 'Salong Inne',
    style: { width: '300px' },
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
        <br />
        <br />
      </h1>

      <MyGallery images={imgs} />
    </div>
  );
};
