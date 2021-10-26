import React from 'react';
import Button from '../Button/Button';
import close from './images/close.svg';
import './Modal.scss';

function Modal({ data, active, onClose }) {

  const { title, description } = data;

  const handleClose = (click) => {
    if(onClose){
      onClose(!click)

    }
  }

  return (
    <div className={`modal ${active && 'acive'}`}>
      <div className="modal__wrapper">
        <div className="modal__wrapper-header">
          <h3 className="modal__wrapper-header__title">{title}</h3>
          <Button className="button__close" onClick={handleClose}>
            <img src={close} alt="close btn" />
          </Button>
          <div className="modal__wrapper-content">
            {description.map((text, idx) => <p key={idx}>{text}</p>)}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal;