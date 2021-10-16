import React, { useEffect, useState } from 'react';
import Slide from '../../../components/Slide/Slide';
import ProductsItem from './ProductsItem/ProductsItem';
import './Products.scss';

const largePercent = 28;
const mediumPercent = 40;
const smallPercent = 8;

function MainProducts() {
  const viewSize = window.innerWidth;
  const [slideSize, setSlideSize] = useState(0);
  const [productList, setProductList] = useState([]);

  const handleSlide = (type, count) => {
    if (type === 'next') {
      setSlideSize(largePercent * count * -1);
      if (viewSize <= 1190) {
        setSlideSize(mediumPercent * count * -1);
      }
      if (viewSize <= 768) {
        setSlideSize(smallPercent * count * -10);
      }
    } else {
      setSlideSize(slideSize + largePercent);
      if (viewSize <= 1190) {
        setSlideSize(slideSize + mediumPercent);
      }
      if (viewSize <= 768) {
        setSlideSize(slideSize + smallPercent * 10);
      }
    }
  };

  useEffect(() => {
    fetch('/data/mockData.json')
      .then(res => res.json())
      .then(data => {
        setProductList(data.products);
      });
  }, []);

  return (
    <Slide
      className="products"
      title="당신만의 라페스타"
      list={productList}
      onSlide={handleSlide}
    >
      <ul
        className="products__image-list"
        style={{ transform: `translateX(${slideSize}vw)` }}
      >
        {productList.map(item => (
          <ProductsItem key={item.id} item={item} />
        ))}
      </ul>
    </Slide>
  );
}

export default MainProducts;
