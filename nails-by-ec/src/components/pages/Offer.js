import React, { Fragment } from 'react';
import card_front from '../layout/card_front.jpg';
import card_back from '../layout/card_back.jpg';

export const Offer = () => {
  return (
    <div className='text-container'>
      <h1>Erbjudande</h1>

      <p>
        Jag håller just nu på att göra mina naglar hemma i Vagnhärad medan jag
        letar efter ett ställe att tillhandahålla mina tjänster. Om du har några
        förslag, vänligen skicka det via e-post.
      </p>
      <br />
      <ul className='offer'>
        <li>
          Gellack - <span className='price'>350 SEK</span>
        </li>
        <li>
          Gellack + borttagning av gammalt material -{' '}
          <span className='price'>400 SEK</span>
        </li>
        <li>
          Nagelförlängning - <span className='price'>450 SEK</span>
        </li>
        <li>
          Nagelförlängning + borttagning av gammalt material -
          <span className='price'> 500 SEK</span>
        </li>
        <li>
          Det är möjligt att köra till kund inom Trasa - Vagnhärad - Västerljung
          mot en avgift - <span className='price'>100 SEK</span>.
        </li>
      </ul>
      <br />
      <h1>Lojalitetsprogram</h1>

      <p className='loyal'>
        Om du samlar 6 st stämplar - du får 50% rabat till den sjunde
        behandlingen !
      </p>
      <img
        className='card'
        src={card_front}
        alt='Visitkort NailsByEC Framsidan'
      />
      <img
        className='card'
        src={card_back}
        alt='Visitkort NailsByEC Baksidan'
      />
    </div>
  );
};
