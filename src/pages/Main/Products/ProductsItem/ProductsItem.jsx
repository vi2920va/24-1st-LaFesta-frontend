import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsItem.scss';

function ProductsItem({ item }) {
  const { url, title } = item;
  return (
    <li className="products-item" key={item.id}>
      <Link to="#">
        <div className="products-item__image">
          <img src={url} alt={title} />
        </div>
        <div className="products-content">
          <h3 className="products-item__title">{title}</h3>
        </div>
      </Link>
    </li>
  );
}
export default ProductsItem;
