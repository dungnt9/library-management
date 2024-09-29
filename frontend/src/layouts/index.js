import React from 'react';
import Footer from './DefaultLayout/Footer';
import Header from './DefaultLayout/Header';
import Navigator from './Navigator';

function DefaultLayout(props) {
  return (
    <div>
      <Header/>
      <Navigator/>
      {props.children}
      <Footer/>
    </div>
  );
}

export default DefaultLayout;
