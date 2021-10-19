import React, { useState } from 'react';
import './Button.scss';

function Button({ name, className, disabled, onClick, children }) {
  const [clicked, setClicked] = useState(false);

  const handleBtnClick = () => {
    if (onClick) {
      setClicked(!clicked);
      onClick(clicked);
    }
  };

  return (
    <button
      type="button"
      className={className}
      onClick={handleBtnClick}
      disabled={disabled}
    >
      {name || children}
    </button>
  );
}
export default Button;
