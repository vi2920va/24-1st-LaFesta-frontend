import React, { useState, useEffect } from 'react';
import cart from './images/cart.svg';
import sidebar from './images/sidebar.svg';
import Button from '../../Button/Button';
import Portal from '../../Modal/Portal';
import MenuModal from '../../Modal/MenuModal';
import './SideBar.scss';

function SideBar({ menu }) {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [active, setActive] = useState(false);

  const handleOpenMenu = () => {
    setActive(true);
  }

  const handleCloseMenu = () => {
    setActive(false);
  }

  useEffect(() => {
    const onWindowSize = () => {
      setInnerWidth(window.innerWidth)
    };
    window.addEventListener('resize', onWindowSize);

    return () => {
      window.addEventListener('remove', onWindowSize);
    }

  }, [])

  useEffect(() => {
    if (active && innerWidth >= 1190) {
      setActive(false);
    }
  }, [active, innerWidth])

  return (
    <>
      <div className="sidebar">
        <Button className="button__cart">
          <i className="fas fa-shopping-cart" />
        </Button>
        <Button className="button__menu" onClick={handleOpenMenu}>
          <i className="fas fa-bars" />
        </Button>
      </div>
      <Portal>
        <MenuModal active={active} onClose={handleCloseMenu} menu={menu} />
      </Portal>
    </>
  );
}
export default SideBar;