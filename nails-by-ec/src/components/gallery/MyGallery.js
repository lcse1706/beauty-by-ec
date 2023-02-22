import React from 'react';

import classes from './MyGallery.module.css';

export const Gallery = props => {
  return (
    <>
      {props.images.map(image => (
        <img src={image.url} alt={image.alt} style={image.style} />
      ))}
    </>
  );
};

export default Gallery;
