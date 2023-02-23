import React from 'react';

import classes from './MyGallery.module.css';

export const Gallery = props => {
  return (
    <>
      {props.images.map(image => (
        <img src={image.url} alt={image.alt} style={image.style} />
      ))}

      <div className={`${classes['modal-outer']} ${classes.open}`}>
        <div className={classes['modal-inner']}></div>
      </div>
    </>
  );
};

export default Gallery;
