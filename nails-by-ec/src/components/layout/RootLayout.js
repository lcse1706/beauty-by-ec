import { Outlet } from 'react-router-dom';
import NavLayout from './NavLayout';

const RootLayout = () => {
  return (
    <>
      <NavLayout />
      <Outlet />
    </>
  );
};

export default RootLayout;
