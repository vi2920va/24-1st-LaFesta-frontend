import React, { useState } from 'react'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { FiX, FiChevronRight } from 'react-icons/fi';
import "./MenuModal.scss";

function MenuModal({ active, onClose, menu }) {
  const [showTitle, setShowTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const toggleMenu = menu.find(item => item.name === showTitle);
  const subMenu = toggleMenu && toggleMenu.subMenu.find(item => item.name === subTitle);


  const handleClose = (click) => {
    if (onClose) {
      onClose(!click);
    }
    setShowTitle('');
    setSubTitle('');
  }

  const handleMenuClick = (event) => {
    if (showTitle) {
      setSubTitle(event.target.innerText || event.target.name);
    } else {
      setShowTitle(event.target.innerText || event.target.name);
    }
  };

  const handlePrevMenu = () => {
    if (subTitle) {
      setSubTitle('');
    } else {
      setShowTitle('');
    }
  };

  return (
    <div className={`menu__modal ${active && 'is-active'}`}>
      <div className={`menu__modal-wrapper`}>
        <div className={`menu__modal-wrapper__header`}>
          {showTitle &&
            <Button className="button__arrow" onClick={handlePrevMenu}>
              <FiChevronRight />
            </Button>
          }
          <h3 className={`menu__modal-wrapper__title ${showTitle && 'show__title'}`}>
            <span className={showTitle && 'home__text'}>Home</span>
            <span className={subTitle && 'show__text'}>{showTitle !== '' ? `${showTitle}` : ''}</span>
            <span>{subTitle !== '' ? `${subTitle}` : ''}</span>
          </h3>
          <Button className="button__close" onClick={handleClose}>
            <FiX />
          </Button>
        </div>
        <ul className="menu__modal-list">
          {!showTitle && menu.map(data => (
            <li key={data.id} className="menu__modal-list__item" onClick={handleMenuClick} role="button" >
              <span>{data.name}</span>
              <FiChevronRight name={data.name} />
            </li>)
          )}
          {toggleMenu &&
            <ul className={subMenu && `menu__modal-list__close`}>
              {toggleMenu.subMenu.map((menu, idx) => (
                <li className='menu__modal-list__item' key={idx} onClick={handleMenuClick} role="button">
                  <span>{menu.name}</span>
                  <FiChevronRight name={menu.name} />
                </li>
              ))}
            </ul>
          }
          {subMenu &&
            <ul>
              {subMenu.categories.map((item, idx) => (
                <li className='menu__modal-list__item' key={idx} bole="a">
                  <span>{item.name}</span>
                </li>))}
            </ul>}
        </ul>
      </div>
      <div className={`menu__modal-footer`}>
        <ul>
          <li>
            <Link to="#">
              <i className="far fa-user" />
              <span>?????????</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fas fa-map-marker-alt" />
              <span>????????????</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fas fa-headset" />
              <span>????????????</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default MenuModal;