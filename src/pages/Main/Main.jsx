import React from 'react';
import Cover from './Cover/Cover';
import Products from './Products/Products';
import Banner from './Banner/Banner';
import Collaboration from './Collaboration/Collaboration';
import Colletions from './Colletions/Colletions';
import Insides from './Insides/Insides';

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
