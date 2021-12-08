import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORY_DATA } from './data/CATEGORY_DATA';
import Button from '../../Button/Button';
import location from './images/location.svg';
// import user from './images/user.svg';
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
          <i className="fas fa-search" />
        </Button>
      </div>

      <div className="button__group">
        <Button className="button__loaction">
          <i className="fas fa-map-marker-alt" />
        </Button>
        <Button className="button__user">
          <i className="far fa-user" />
        </Button>
      </div>
    </div>
  )
}
export default CategoryList;