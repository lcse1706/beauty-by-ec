import React from 'react';
import Logo from '../layout/Logo';

export const Home = () => {
  return (
    <div className='home'>
      <Logo />
      <h1 className='pageTitle large'>
        Skönhetssalong - Naglar & Fransar
        <br />
        Vagnharäd, Trosa kommun.
      </h1>

      <p>
        Jag jobbar just nu hemifrån. Jag letar efter ett ställe att hyra för en
        skönhetssalong. Om du har några förslag, vänligen kontakta mig.
      </p>
    </div>
  );
};
