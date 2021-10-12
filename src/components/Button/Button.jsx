import React, { useState } from 'react';
import "./Button.scss";

function Button({ className, name, onClick }) {

  const [clicked, setClicked] = useState(false);

  const handleBtnClick = () => {
    if(onClick){
      setClicked(true);
      onClick(clicked);
    }
  };

  return (
    <button type="button" className={className} onClick={handleBtnClick}>
      {name}
    </button>
  );
}
export default Button;
