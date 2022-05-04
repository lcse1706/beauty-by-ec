import React from 'react';
import Logo from '../layout/Logo';
import { ImagerDisplay, imagerShow, ImagerImg } from '../imager/index.js';

export const Home = () => {
  return (
    <div className='home '>
      <Logo />
      <h1 className='pageTitle large'>
        Fransförlangning & ÖgonBryn & Naglar
        <br />
        Skönhetssalong i Vagnharäd, Trosa kommun.
        <br />
        <br />
      </h1>

      <div className='home-photo'>
        <ImagerDisplay z-index='2000' />
        <div className='salon'>
          <ImagerImg
            // width='100px'
            src={require('../layout/salonIn.jpg')}
            alt='Naglar Certifikat'
          />
        </div>
      </div>
    </div>
  );
};
