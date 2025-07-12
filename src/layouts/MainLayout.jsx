import React from 'react';
import Navbar from '../components/home/Navbar';
import Footer from '../Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout; 