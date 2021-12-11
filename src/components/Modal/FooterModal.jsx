import React from 'react';
import Button from '../Button/Button';
import { FiX } from "react-icons/fi";
import './FooterModal.scss';

function FooterModal({ data, active, onClose }) {

  const { title, description = undefined, categories } = data;

  const handleClose = (click) => {
    if (onClose) {
      onClose(!click)

    }
  }

  return (
    <div className={`modal ${active && 'isActive'}`}>
      <div className="modal__wrapper">
        <div className="modal__wrapper-header">
          <h3 className="modal__wrapper-header__title">{title}</h3>
          <Button className="button__close" onClick={handleClose}>
            <FiX />
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