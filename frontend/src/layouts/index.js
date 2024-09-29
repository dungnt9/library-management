import React from 'react';
import Footer from './DefaultLayout/Footer';
import { useLocation } from 'react-router-dom';
import Header from './DefaultLayout/Header';
import Navigator from './Navigator';

function DefaultLayout(props) {
  const location = useLocation();
  const role = location.state?.role; // Lấy role từ state
  return (
    <div>
      <Header/>
      <Navigator role={role} />
      {props.children}
      <Footer/>
    </div>
  );
}

export default DefaultLayout;
