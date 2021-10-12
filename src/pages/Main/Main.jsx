import React from 'react';
import MainBanner from './MainBanner/MainBanner';
import MainProducts from '../MainProducts/MainProducts';
import './Main.scss';

function Main() {

  return (
    <main>
      <MainBanner />
      <MainProducts />
    </main>
  );
}

export default Main;
