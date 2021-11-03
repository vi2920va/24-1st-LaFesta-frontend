import React, { useState } from 'react';
import { CATEGORY_DATA } from './CategoryList/data/CATEGORY_DATA';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList/CategoryList';
import ShowMenuList from './ShowMenuList/ShowMenuList';
import logo from './images/logo.png';

import './Nav.scss';
import Button from '../Button/Button';
import SideBar from './SideBar/SideBar';

function Nav() {
  const [toggleMenu, setToggleMeun] = useState('');
  const [isClicked, setClicked] = useState(false);
  const toggledMenu = CATEGORY_DATA.find(item => item.name === toggleMenu);

  const handleMouseLeave = (value) => {
    setToggleMeun(value);
  };

  const handleMouseOver = text => {
    setToggleMeun(text);
  };

  return (
    <>
      <nav className="nav" >
        <div className="nav__logo">
          <Link className="nav__logo-link" to="#">
            <h1 className="nav__logo-link__title">LAFESTA</h1>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <CategoryList onMouseOver={handleMouseOver} />
        <SideBar />
      </nav>
      {toggledMenu && <ShowMenuList toggledMenu={toggledMenu} onMouseLeave={handleMouseLeave} />}
    </>
  );
}

export default Nav;
