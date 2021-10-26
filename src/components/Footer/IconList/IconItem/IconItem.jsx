import React, { useState } from 'react';
import Button from '../../../Button/Button';
import Modal from '../../../Modal/Modal';
import Portal from '../../../Modal/Portal';

function IconItem({ icon }) {
  const { name, image, title } = icon;
  const [active, setActive] = useState(false);

  const handleOpenModal = () => {
    setActive(true);
  };

  const handleCloseModal = ()=>{
    setActive(false);
  }

  return (
    <>
      <li className="icon__item">
        <Button className={`button__${name}`} onClick={handleOpenModal}>
          <img src={image} alt={name} />
          <span>{title}</span>
        </Button>
      </li>
      {
        active &&
        <Portal>
          <Modal active={active} data={icon} onClose={handleCloseModal} />
        </Portal>
      }
    </>
  );
}

export default IconItem;