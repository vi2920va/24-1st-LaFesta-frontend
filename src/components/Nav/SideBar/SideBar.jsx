import React from 'react';
import cart from './images/cart.svg';
import sidebar from './images/sidebar.svg';
import Button from '../../Button/Button';
import './SideBar.scss';

function SideBar() {
  return (
    <div className="sidebar">
      <Button className="button__cart">
        <img src={cart} alt="cart" />
      </Button>
      <Button className="button__menu">
        <img src={sidebar} alt="menu" />
      </Button>
    </div>
  );
}
export default SideBar;