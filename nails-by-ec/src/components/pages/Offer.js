import React from 'react';
import { ImagerDisplay, imagerShow, ImagerImg } from '../imager/index.js';

export const Offer = () => {
  return (
    <div className='text-container'>
      <h1>Naglar</h1>
      <p>
        Jag håller just nu på att göra naglar hemma i Vagnhärad medan jag letar
        efter ett ställe att tillhandahålla mina tjänster. Om du har några
        förslag, vänligen skicka det via e-post.
      </p>
      <br />
      <ul className='offer'>
        <li>
          <h3>Manikyr</h3> - <span className='price'>150 kr</span>
        </li>
        <li>
          <h3>Gellack</h3> - <span className='price'>390 kr</span>
        </li>
        <li>
          <h3>Gellack - borttagning</h3> - <span className='price'>150 kr</span>
        </li>
        {/* <li>
          <h3>Gellack</h3> -
          <span className='price'> 400 kr</span>
        </li> */}
        <li>
          <h3>Nagelförlängning (gelénaglar) Nytt Set</h3> -
          <span className='price'>490 kr</span>
        </li>
        <li>
          <h3>Nagelförlängning (Påfyllning)</h3> -
          <span className='price'> 440 kr</span>
        </li>
        <li>
          <h3>Borttagning gelénaglar</h3> -{' '}
          <span className='price'>200 kr</span>
        </li>
        <br />
        {/* <li>
          Det är möjligt att köra till kund inom Trasa - Vagnhärad - Västerljung
          mot en avgift - <span className='price'>100 kr</span>.
        </li> */}
      </ul>
      {/* <br /> */}
      <h1>Fransar</h1>

      <ul className='offer'>
        <li>
          <h3>Nytt Set Singelfransar</h3> -{' '}
          <span className='price'>400 kr</span>
        </li>
        <li>
          <h3>Nytt Set Volymfransar</h3> - <span className='price'>470 kr</span>
        </li>
        <br />
        <p>(Jag använder bara syntetiska fransar.)</p>
      </ul>
      <br />
      <h1>Lojalitetsprogram</h1>

      <p className='loyal'>
        Om du samlar 6 st stämplar - du får 50% rabat till den sjunde
        behandlingen !
      </p>
      <div className='photo-container'>
        <ImagerDisplay z-index='2000' />
        <div className='card'>
          <ImagerImg
            src={require('../layout/card_front.jpg')}
            alt='Visitkort NailsByEC Framsidan'
          />
        </div>
        <div className='card'>
          <ImagerImg
            src={require('../layout/card_back.jpg')}
            alt='Visitkort NailsByEC Baksidan'
          />
        </div>
      </div>
    </div>
  );
};
