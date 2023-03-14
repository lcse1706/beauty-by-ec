import React, { useState } from 'react';

import classes from './MyGallery.module.css';

export const Gallery = props => {
  const [modalInfo, setModalInfo] = useState({});

  const handleModal = e => {
    setModalInfo({
      src: e.currentTarget.src,
      alt: e.currentTarget.alt,
    });

    console.log(modalInfo);

    document.querySelector('.modal').classList.add(`${classes.open}`);
  };

  const closeModal = () => {
    document.querySelector('.modal').classList.remove(`${classes.open}`);
  };

  return (
    <>
      {props.images.map(image => (
        <img
          src={image.src}
          alt={image.alt}
          style={image.style}
          key={image.alt}
          onClick={handleModal}
        />
      ))}

      <div className={`${classes['modal-outer']} modal`} onClick={closeModal}>
        <div className={classes['modal-inner']}>
          <img src={modalInfo.src} alt={modalInfo.alt} />
        </div>
      </div>
    </>
  );
};

export default Gallery;
