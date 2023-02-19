import Hamburger from './navigation/Hamburger.js';
import BookBtn from './navigation/BookBtn';
import Navbar from './navigation/Navbar';
import Sidebar from './navigation/Sidebar';

const NavLayout = () => {
  return (
    <>
      <Hamburger />
      <BookBtn />
      <Navbar />
      <Sidebar />
    </>
  );
};

export default NavLayout;
