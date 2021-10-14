import React from 'react';
import MainCover from './MainCover/MainCover';
import MainProducts from './MainProducts/MainProducts';
import MainCollaboration from './MainCollaboration/MainCollaboration';
import MainColletions from "./MainColletions/MainColletions";
import './Main.scss';

function Main() {

  return (
    <main>
      <MainCover/>
      <MainProducts />
      <MainCollaboration />
      <MainColletions />
    </main>
  );
}

export default Main;
