import React from 'react';

const Sidebar = () => {
  return (
    <aside className='sidebar lead'>
      <ul>
        <li>
          <a href='https://www.facebook.com/' target='_blank'>
            <i className='fab fa-facebook'></i>
          </a>
        </li>
        <li>
          <a href=' http://m.me/EwaCzarniecka' target='_blank'>
            <i className='fab fa-facebook-messenger'></i>
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com/' target='_blank'>
            <i className='fas fa-phone-square'></i>
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com/' target='_blank'>
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
