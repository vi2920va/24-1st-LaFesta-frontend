import React, { useState } from 'react'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import close from './images/close.svg';
import rightBtn from './images/right-btn.png';
import arrowBtn from './images/arrow-btn.svg';
import headset from '../Footer/IconList/data/images/headset.svg';
import user from "./images/user.png";
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
              <img src={arrowBtn} alt="arrow btn" />
            </Button>
          }
          <h3 className={`menu__modal-wrapper__title ${showTitle && 'show__title'}`}>
            <span className={showTitle && 'home__text'}>Home</span>
            <span className={subTitle && 'show__text'}>{showTitle !== '' ? `${showTitle}` : ''}</span>
            <span>{subTitle !== '' ? `${subTitle}` : ''}</span>
          </h3>
          <Button className="button__close" onClick={handleClose}>
            <img src={close} alt="close btn" />
          </Button>
        </div>
        <ul className="menu__modal-list">
          {!showTitle && menu.map(data => (
            <li key={data.id} className="menu__modal-list__item" onClick={handleMenuClick} role="button" >
              <span>{data.name}</span>
              <img src={rightBtn} alt="right button" name={data.name} />
            </li>)
          )}
          {toggleMenu &&
            <ul className={subMenu && `menu__modal-list__close`}>
              {toggleMenu.subMenu.map((menu, idx) => (
                <li className='menu__modal-list__item' key={idx} onClick={handleMenuClick} role="button">
                  <span>{menu.name}</span>
                  <img src={rightBtn} alt="right button" name={menu.name} />
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
              <span>로그인</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fas fa-map-marker-alt" />
              <span>매장찾기</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fas fa-headset" />
              <span>고객센터</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default MenuModal;