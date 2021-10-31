import React, { useState, useEffect } from 'react';
import './Button.scss';

function Button({ name, className, disabled, onClick, children }) {
  const [clicked, setClicked] = useState(false);

  const handleBtnClick = () => {
    setClicked(!clicked);

    if (onClick) {
      onClick(!clicked);
    }

  };

  useEffect(() => {
    if (clicked) {
      setClicked(true);
    }
  }, [clicked]);

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
