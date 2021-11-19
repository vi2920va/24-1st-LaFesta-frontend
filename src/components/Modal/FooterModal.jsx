import React from 'react';
import Button from '../Button/Button';
import close from './images/close.svg';
import './FooterModal.scss';

function FooterModal({ data, active, onClose }) {

  const { title, description = undefined, categories } = data;

  const handleClose = (click) => {
    if (onClose) {
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
            {description &&
              description.map((text, idx) => <p key={idx}>{text}</p>)}

            {categories &&
              <ul className="modal__wrapper-list">
                {categories.map((text, idx) => <li key={idx}>{text}</li>)}
              </ul>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default FooterModal;