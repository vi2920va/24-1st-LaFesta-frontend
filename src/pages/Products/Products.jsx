import React from 'react';
import ListItem from './ListItem/ListItem';
import './Products.scss';

function Products({ list, count, style, ...props }) {
  const handleNextClick = () => {
    const { nextFunc } = props;
    if (count && list.length) {
      nextFunc(count, style);
    }
  };

  const hadlePrevClick = () => {
    const { prevFunc } = props;
    if (!list < list.length && count > 1) {
      prevFunc(count);
    }
  };
  return (
    <section className="main-products">
      <div className="main-products__slide-wrapper">
        <h3 className="main-products__title">당신만의 라페스타</h3>
        <ol className="main-products__slide-count">
          <li>
            <button
              type="button"
              className="button--prev"
              onClick={hadlePrevClick}
              disabled={count === 1}
            >
              <i className="fas fa-chevron-left" />
            </button>
          </li>
          <li className="start--count">
            <span>{count}</span>
          </li>
          <li className="center">
            <span>/</span>
          </li>
          <li className="end--count">
            <span>{list.length}</span>
          </li>
          <li>
            <button
              type="button"
              className="button--next"
              onClick={handleNextClick}
              disabled={count === list.length}
            >
              <i className="fas fa-chevron-right" />
            </button>
          </li>
        </ol>
      </div>
      <div
        className="main-products__image-slide"
        style={{marginLeft: style }}
      >
        {list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Products;
