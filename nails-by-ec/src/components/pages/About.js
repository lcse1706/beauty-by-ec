import React from 'react';
import { ImagerDisplay, imagerShow, ImagerImg } from '../imager/index.js';

export const About = () => {
  return (
    <div className='text-container'>
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
      <div className='photo-container'>
        <ImagerDisplay z-index='2000' />
        <div className='certificate'>
          <ImagerImg
            // width='100px'
            src={require('../layout/nailsCertificate.jpg')}
            alt='Naglar Certifikat'
          />
        </div>
        <div className='certificate big'>
          <ImagerImg
            // width='100px'
            src={require('../layout/lashesCertificate.jpg')}
            alt='Fransar Certifikat'
          />
        </div>
      </div>
    </div>
  );
};
