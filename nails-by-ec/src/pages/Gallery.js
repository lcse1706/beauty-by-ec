import React from 'react';
import classes from './Gallery.module.css';

import {
  ImagerDisplay,
  imagerShow,
  ImagerImg,
} from '../components/imager/index.js';

export const Gallery = () => {
  return (
    <div className={`${classes.gallery} shadowed-container`}>
      <ImagerDisplay z-index='2000' />
      <div className={classes.picture}>
        <ImagerImg
          width='100px'
          src={require('../components/imgs/1.jpg')}
          alt='Naglar 1, Nails 1'
        />
      </div>
      <div className={classes.picture}>
        <ImagerImg
          width='100px'
          src={require('../components/imgs/2.jpg')}
          alt='Naglar 2, Nails 2'
        />
      </div>
      {/* <div className='picture'>
        <ImagerImg
          width='100px'
          src={require('../imgs/3.jpg')}
          alt='Naglar 3, Nails 3'
        />
      </div>
      <div className='picture'>
        <ImagerImg
          width='100px'
          src={require('../imgs/4.jpg')}
          alt='Naglar 4, Nails 4'
        />
      </div>
      <div className='picture'>
        <ImagerImg
          width='100px'
          src={require('../imgs/5.jpg')}
          alt='Naglar 5, Nails 5'
        />
      </div>
      <div className='picture'>
        <ImagerImg
          width='100px'
          src={require('../imgs/6.jpg')}
          alt='Fransar 1. Lashes 1'
        />
      </div>
      <div className='picture'>
        <ImagerImg
          width='100px'
          src={require('../imgs/7.jpg')}
          alt='Fransar 2. Lashes 2'
        />
      </div>
      <div className='picture'>
        <ImagerImg
          width='100px'
          src={require('../imgs/8.jpg')}
          alt='Fransar 3, Lashes 3'
        />
      </div> */}
      {/* <div className='picture'>
        <ImagerImg width='100px' src={require('../imgs/9.jpg')} alt='Zdjecie' />
      </div> */}
      {/* <div className='picture'>
        <ImagerImg
          width='100px'
          src={require('../imgs/10.jpg')}
          alt='Fransar 4, Lashes 4'
        />
      </div> */}
    </div>
  );
};
