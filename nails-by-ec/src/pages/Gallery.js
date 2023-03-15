import React from 'react';
import classes from './Gallery.module.css';
import MyGallery from '../components/gallery/MyGallery';

const imgs = [
  {
    src: require('../components/imgs/1.jpg'),
    alt: 'Naglar 1, Nails 1',
  },
  {
    src: require('../components/imgs/2.jpg'),
    alt: 'Naglar 2, Nails 2',
  },
  {
    src: require('../components/imgs/4.jpg'),
    alt: 'Naglar 4, Nails 4',
  },
  {
    src: require('../components/imgs/5.jpg'),
    alt: 'Naglar 5, Nails 5',
  },
  {
    src: require('../components/imgs/6.jpg'),
    alt: 'Naglar 6, Nails 6',
  },
  {
    src: require('../components/imgs/7.jpg'),
    alt: 'Naglar 7, Nails 7',
  },
  {
    src: require('../components/imgs/8.jpg'),
    alt: 'Naglar 8, Nails 8',
  },
  // {
  //   src: require('../components/imgs/9.jpg'),
  //   alt: 'Naglar 9, Nails 9',
  //   style: { width: PICTURE_WIDTH },
  // },
  {
    src: require('../components/imgs/10.jpg'),
    alt: 'Naglar 10, Nails 10',
  },
];

export const Gallery = () => {
  return (
    <div className={`${classes.gallery} shadowed-container`}>
      <MyGallery images={imgs} />
    </div>
  );
};
