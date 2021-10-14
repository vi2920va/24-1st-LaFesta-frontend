import React, { useEffect, useState } from 'react';
import ProductsItem from './ProductsItem/ProductsItem';
import './MainProducts.scss';

function MainProducts() {
  let viewSize = window.innerWidth;
  const [slideSize, setSlideSize] = useState('');
  const [productList, setProductList] = useState([]);
  const [count, setCount] = useState(1);

  const handleNextClick = () => {
    if (count && productList.length) {
      setCount((prev) => prev + 1);
      setSlideSize(-0.27 * count * 100 - 0.8);
      if (viewSize < 1190) {
        setSlideSize(-0.4 * count * 100 - 0.8);
      } else if (viewSize < 768) {
        setSlideSize(-0.4 * count * 100 - 0.8);
      }
    }
  };

  const hadlePrevClick = () => {
    if (!productList < productList.length && count > 1) {
      console.log('prev');
      setCount((prev) => prev - 1);
      setSlideSize((size) => Number((size + 0.27 * 100).toFixed(1)));
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
              disabled={count === 1}
            >
              <i className="fas fa-chevron-left" />
            </button>
          </li>
          <li className="start-count">
            <span>{count}</span>
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
              disabled={count === productList.length}
            >
              <i className="fas fa-chevron-right" />
            </button>
          </li>
        </ol>
      </div>
      <div className="main-products__image-wrapper">
        <ul
          className="main-products__image-slide"
          style={{ transform: `translateX(${slideSize}vw)` }}
        >
          {productList.map((item) => (
            <ProductsItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MainProducts;
