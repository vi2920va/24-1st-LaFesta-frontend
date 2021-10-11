import React from 'react';
import { Link } from 'react-router-dom';
import './ListItem.scss';

function ListItem({ item }) {
  const { url, title } = item;
  return (
    <div className="products-item">
      <Link to="#" className="products-item__link">
        <div className="products-item__image">
          <img src={url} alt={title} />
        </div>
        <div className="products-content">
          <h3 className="products-item__title">{title}</h3>
        </div>
      </Link>
    </div>
  );
}
export default ListItem;
