import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import './CollectionsItem.scss';

function CollectionsItem({ item }) {
  const { title, content, url } = item;
  return (
    <li className="collections-item">
      <Link to="#">
        <div className="collections-item__image">
          <img src={url} alt={title} />
        </div>
        <div className="collections-item__content">
          <h3 className="collections-item__title">{title}</h3>
          <strong className="collections-item__text">{content}</strong>
          <Button name="자세히 보기" className="button--plus--white" />
        </div>
      </Link>
    </li>
  );
}

export default CollectionsItem;
