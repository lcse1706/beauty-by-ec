import { Outlet } from 'react-router-dom';
import NavLayout from './NavLayout';

const RootLayout = () => {
  return (
    <>
      <NavLayout />
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
