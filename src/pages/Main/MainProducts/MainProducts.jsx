import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import ProductsItem from './ProductsItem/ProductsItem';
import './Products.scss';

function MainProducts() {
  const [startCount, setStartCount] = useState(1);
  const [productList, setProductList] = useState([]);

  const handleNextClick = () => {
    if (startCount && productList.length) {
    }
  };

  const hadlePrevClick = () => {
    if (!productList < productList.length && startCount > 1) {
    }
  };
  useEffect(() => {
    fetch('/data/mockData.json')
      .then((res) => res.json())
      .then((data) => {
        setProductList(data.products);
      });
  }, []);

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
              disabled={startCount === 1}
            >
              <i className="fas fa-chevron-left" />
            </button>
          </li>
          <li className="start-count">
            <span>{startCount}</span>
          </li>
          <li className="center">
            <span>/</span>
          </li>
          <li className="end-count">
            <span>{productList.length}</span>
          </li>
          <li>
            <button
              type="button"
              className="button--next"
              onClick={handleNextClick}
              disabled={startCount === productList.length}
            >
              <i className="fas fa-chevron-right" />
            </button>
          </li>
        </ol>
      </div>
      <ul
        className="main-products__image-slide"
        style={{ transform: `translateX(${style}px)` }}
      >
        {list.map((item) => (
          <ProductsItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default MainProducts;
