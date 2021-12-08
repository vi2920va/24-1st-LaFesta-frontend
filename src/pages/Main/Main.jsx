import React from 'react';
import Cover from './components/Cover/Cover';
import Products from './components/Products/Products';
import Banner from './components/Banner/Banner';
import Collaboration from './components/Collaboration/Collaboration';
import Colletions from './components//Colletions/Colletions';
import Insides from './components//Insides/Insides';

function Main() {
  return (
    <main>
      <Cover />
      <Products />
      <Banner />
      <Collaboration />
      <Colletions />
      <Insides />
    </main>
  );
}

export default Main;
