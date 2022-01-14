import React from 'react';

import { ImagerDisplay, imagerShow, ImagerImg } from '../imager/index.js';

export const Gallery = () => {
  return (
    <div className='gallery text-container'>
      <ImagerDisplay z-index='2000' />
      <div className='picture'>
        <ImagerImg width='100px' src={require('../imgs/1.jpg')} alt='Zdjecie' />
      </div>
      <div className='picture'>
        <ImagerImg width='100px' src={require('../imgs/2.jpg')} alt='Zdjecie' />
      </div>
      {/* <div className='picture'>
        <ImagerImg width='100px' src={require('../imgs/3.jpg')} alt='Zdjecie' />
      </div>
      <div className='picture'>
        <ImagerImg width='100px' src={require('../imgs/4.jpg')} alt='Zdjecie' />
      </div>
      <div className='picture'>
        <ImagerImg width='100px' src={require('../imgs/5.jpg')} alt='Zdjecie' />
      </div>
      <div className='picture'>
        <ImagerImg width='100px' src={require('../imgs/6.jpg')} alt='Zdjecie' />
      </div> */}
      <div className='picture'>
        <ImagerImg width='100px' src={require('../imgs/7.jpg')} alt='Zdjecie' />
      </div>
      <div className='picture'>
        <ImagerImg width='100px' src={require('../imgs/8.jpg')} alt='Zdjecie' />
      </div>
      <div className='picture'>
        <ImagerImg width='100px' src={require('../imgs/9.jpg')} alt='Zdjecie' />
      </div>
      <div className='picture'>
        <ImagerImg
          width='100px'
          src={require('../imgs/10.jpg')}
          alt='Zdjecie'
        />
      </div>
    </div>
  );
};
