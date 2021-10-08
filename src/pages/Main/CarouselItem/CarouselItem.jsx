import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CarouselItem.scss';

class CarouselItem extends Component {
  render() {
    const { item } = this.props;
    const { url, title, category, content } = item;
    return (
      <li>
        <Link to="#">
          <img src={url} alt={title} />
          <div className={`${category}-content`}>
            <h3>{title}</h3>
            <strong>{content}</strong>
            <button
              type="button"
              className={`button--${item.category ? 'details' : ''}`}
            >
              {item.category === 'collection' ? '구매하기' : '자세히 보기'}
            </button>
          </div>
        </Link>
      </li>
    );
  }
}

export default CarouselItem;
