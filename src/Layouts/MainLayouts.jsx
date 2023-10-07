import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const MainLayouts = () => {
  return (
    <div>
      <div className=' '>
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayouts;