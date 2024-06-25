import React, { ReactNode } from 'react';
import { Footer } from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import NavBar from './Navbar';


interface LayoutProps {
  children: ReactNode; // Define children prop
  isLoggedIn: boolean;
  handleLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, isLoggedIn, handleLogout }) => {
  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
