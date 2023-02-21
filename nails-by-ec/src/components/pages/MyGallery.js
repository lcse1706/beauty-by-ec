import React from 'react';

import classes from './MyGallery.module.css';

export const Gallery = props => {
  return (
    <div className={classes.gallery}>
      {props.images.map(image => (
        <img src={image.url} alt={image.alt} style={image.style} />
      ))}
    </div>
  );
};

export default Gallery;
