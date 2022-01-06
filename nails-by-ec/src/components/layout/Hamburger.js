import React from 'react';

const Hamburger = () => {
  const handleMenu = () => {
    // console.log('it works');
    document.querySelector('.navbar').classList.toggle('showNav');
  };

  return (
    <div>
      <button onClick={handleMenu} className='hamburger'>
        <i className='fa fa-bars fa-2x'></i>
      </button>
    </div>
  );
};

export default Hamburger;
