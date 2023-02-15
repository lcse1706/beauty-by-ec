import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import BookBtn from './BookBtn';
import Hamburger from './Hamburger';

const RootLayout = () => {
  return (
    <>
      <Hamburger />
      <BookBtn />
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default RootLayout;
