import React from 'react';
import Footer from './Footer';
import Header from './Header';
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
