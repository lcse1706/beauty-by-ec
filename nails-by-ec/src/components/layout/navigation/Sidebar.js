import React from 'react';
import classes from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={`${classes.sidebar} lead`}>
      <ul>
        <li>
          <a
            href='https://www.facebook.com/BeautyByEvaC'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-facebook'></i>
          </a>
        </li>
        <li>
          <a href='http://m.me/BeautyByEvaC' target='_blank' rel='noreferrer'>
            <i className='fab fa-facebook-messenger'></i>
          </a>
        </li>
        <li>
          <a href=' http://wa.me/46727615018' target='_blank'>
            <i className='fab fa-whatsapp-square'></i>
          </a>
        </li>
        <li>
          <a href='tel:727615018' target='_blank' rel='noreferrer'>
            <i className='fas fa-phone-square'></i>
          </a>
        </li>
        <li>
          <a href='mailto:ewa@beautybyec.se'>
            <i className='fas fa-envelope-square'></i>
          </a>
        </li>
      </ul>
    </aside>
  );
};

Sidebar.defaultProps = {
  icon: 'fab fa-facebook',
};

export default Sidebar;
