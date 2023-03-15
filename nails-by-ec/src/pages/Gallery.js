import React from 'react';
import classes from './Gallery.module.css';
import MyGallery from '../components/gallery/MyGallery';

const imgs = [
  {
    src: require('../components/imgs/1.jpg'),
    alt: 'Salong Verk 1',
  },
  {
    src: require('../components/imgs/2.jpg'),
    alt: 'Salong Verk 2',
  },
  {
    src: require('../components/imgs/3.jpg'),
    alt: 'Salong Verk 3',
  },
  {
    src: require('../components/imgs/4.jpg'),
    alt: 'Salong Verk 4',
  },
  {
    src: require('../components/imgs/5.jpg'),
    alt: 'Salong Verk 5',
  },
  {
    src: require('../components/imgs/6.jpg'),
    alt: 'Salong Verk 6',
  },
  {
    src: require('../components/imgs/7.jpg'),
    alt: 'Salong Verk 7',
  },
  {
    src: require('../components/imgs/8.jpg'),
    alt: 'Salong Verk 8',
  },
  {
    src: require('../components/imgs/9.jpg'),
    alt: 'Salong Verk 9',
  },
  {
    src: require('../components/imgs/10.jpg'),
    alt: 'Salong Verk 10',
  },
  {
    src: require('../components/imgs/11.jpg'),
    alt: 'Salong Verk 11',
  },
];

export const Gallery = () => {
  return (
    <div className={`${classes.gallery} shadowed-container`}>
      <MyGallery images={imgs} />
    </div>
  );
};
