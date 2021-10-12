import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import './ListItem.scss';

function ListItem({ item }) {
  const { title, subtitle, content, url } = item;
  return (
    <li className="insides-item">
      <Link to="#">
        <div className="insides-item__image">
          <img src={url} alt={title} />
        </div>
        <div className="insides-item__content">
          <small className="insides-item__sub-title">{subtitle}</small>
          <h3 className="insides-item__title">{title}</h3>
          <strong className="insides-item__text">{content}</strong>
          <Button name="자세히 보기" className="button--plus--white" />
        </div>
      </Link>
    </li>
  );
}
export default ListItem;
