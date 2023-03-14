import React from 'react';
import MyGallery from '../components/gallery/MyGallery';

import classes from './About.module.css';

const PICTURE_WIDTH = '500px';

const imgs = [
  {
    src: require('../components/layout/img/nailsCertificate.jpg'),
    alt: 'Naglar Certifikat',
    style: { width: PICTURE_WIDTH },
  },
  {
    src: require('../components/layout/img/lashesCertificate.jpg'),
    alt: 'Fransar Certifikat',
    style: { width: PICTURE_WIDTH },
  },
];

export const About = () => {
  return (
    <div className='shadowed-container'>
      <h1>Om Mig</h1>
      <p>
        Jag heter Ewa Czarniecka. Jag är certifierad manikyr och
        ögonfransstylist. Jag har alltid varit intresserad av att arbeta i en
        skönhetssalong, så jag är glad att jag kan uppfylla mig själv i det här
        yrket. I mitt arbete lägger jag stor vikt vid tillförlitlighet och
        precision. Jag är försiktigt och noggrann. Jag bryr mig om komfort och
        hygien på jobbet. Jag kommer att få var och en av er att gå nöjda. Jag
        använder professionell utrustning och arbetar med produkter av högsta
        kvalitet, tack vare vilka stiliseringarna är mycket hållbara. Jag
        desinficerar och steriliserar alla verktyg noggrant.
      </p>
      <br />
      <h1>Mina Certifikat</h1>
      <div className='pic-container'>
        <MyGallery images={imgs} />
      </div>
    </div>
  );
};
