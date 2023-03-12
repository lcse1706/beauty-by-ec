import React, { useState } from 'react';

import classes from './MyGallery.module.css';

export const Gallery = props => {
  const [modalUrl, setModalUrl] = useState('');

  const handleModal = e => {
    setModalUrl(e.currentTarget.src);

    console.log(modalUrl);

    document.querySelector('.modal').classList.add(`${classes.open}`);

    // grab the image source !!!

    // // populate the modal with ne info
    // modalInner.innerHTML = `
    //    <img width='600' height='600' src="${imgSrc.replace(
    //      '200',
    //      '600'
    //    )}" alt="${name}"/>
    //    <p>${desc}</p>
    //   `;
    //show the modal
    // modalOuter.classList.add('open');
  };

  const closeModal = () => {
    document.querySelector('.modal').classList.remove(`${classes.open}`);
  };

  return (
    <>
      {props.images.map(image => (
        <img
          src={image.url}
          alt={image.alt}
          style={image.style}
          key={image.alt}
          onClick={handleModal}
        />
      ))}

      <div className={`${classes['modal-outer']} modal`} onClick={closeModal}>
        <div className={classes['modal-inner']}>
          <img src={modalUrl} />
        </div>
      </div>
    </>
  );
};

export default Gallery;
