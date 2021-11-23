import React from 'react';
import { Link } from 'react-router-dom';
import './ShowMenuList.scss';

function ShowMenuList({ toggledMenu, onMouseLeave }) {

  const handleMouseLeave = () => {
    onMouseLeave('');
  };

  return (
    <div className={`show__menu ${toggledMenu ? 'is__opened' : ''}`} onMouseLeave={handleMouseLeave}>
      <ul className="show__menu-list">
        {toggledMenu.subMenu.map((menu, idx) => (
          <li key={idx} className="show__menu-list__item">
            <h3 className="show__menu-list__item-title">{menu.name}</h3>
            
            <ul className="sub__menu" key={idx}>
              {menu.categories.map((item, idx) => (
                <Link to="/productList">
                  <li className="sub__menu-item" key={idx}>{item.name}</li>
                </Link>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShowMenuList;