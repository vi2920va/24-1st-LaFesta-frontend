import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORY_DATA } from './data/CATEGORY_DATA';
import { FiUser, FiSearch, FiMapPin } from 'react-icons/fi';
import Button from '../../Button/Button';
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
          <FiSearch />
        </Button>
      </div>

      <div className="button__group">
        <Button className="button__loaction">
          <FiMapPin />
        </Button>
        <Button className="button__user">
          <FiUser />
        </Button>
      </div>
    </div>
  )
}
export default CategoryList;