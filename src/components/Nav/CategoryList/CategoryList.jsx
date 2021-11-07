import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORY_DATA } from './data/CATEGORY_DATA';
import Button from '../../Button/Button';
import search from './images/search.svg';
import location from './images/location.svg';
import user from './images/user.svg';
import './CategoryList.scss';

function CategoryList({ onMouseOver }) {

  const handleMouseOver = event => {
    onMouseOver(event.target.innerText);
  };

  return (
    <div className="category">
      <div className="category__wrapper">
        <ul className="category__wrapper-list" onMouseOver={handleMouseOver}>
          {CATEGORY_DATA.map(category =>
            <li className="category__wrapper-list__item" key={category.id}>
              <Link to="#">
                <span className="category__list-item__text">{category.name}</span>
              </Link>
            </li>
          )}
        </ul>
        <Button className="button__search">
          <img src={search} alt="search" />
        </Button>
      </div>

      <div className="button__group">
        <Button className="button__loaction">
          <img src={location} alt="loaction" />
        </Button>
        <Button className="button__user">
          <img src={user} alt="user" />
        </Button>
      </div>
    </div>
  )
}
export default CategoryList;