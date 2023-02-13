import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Bookbtn from './Bookbtn';
import Hamburger from './Hamburger';

const RootLayout = () => {
  return (
    <>
      <Hamburger />
      <Bookbtn />
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default RootLayout;
