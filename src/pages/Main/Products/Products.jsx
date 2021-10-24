import React, { useEffect, useState, useCallback } from 'react';
import Slide from '../../../components/Slide/Slide';
import ProductsItem from './ProductsItem/ProductsItem';
import './Products.scss';

function Products() {
  const [count, setCount] = useState(1);
  const [slideSize, setSlideSize] = useState(0);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [largePercent, setLargePercent] = useState(482);
  const [mediumPercent, setMediumPercent] = useState(333);
  const [smallPercent, setSmallPercent] = useState(615);
  const [productList, setProductList] = useState([]);


  useEffect(() => {
    fetch('/data/mockData.json')
      .then(res => res.json())
      .then(data => setProductList(data.products));
  }, []);

  const onWindowSize = useCallback(() => {
    setInnerWidth(window.innerWidth);
  }, [innerWidth]);



  useEffect(() => {
    window.addEventListener('resize', onWindowSize);


    if (innerWidth >= 1190 && count > 1) {
      console.log('all', 'w :', innerWidth, 'c :', count);
      const size = Math.round((innerWidth / 3.3) * (count - 1) * -1);
      console.log(size);
    }

    return () => {
      window.addEventListener('remove', onWindowSize);
    };
  }, [innerWidth, count]);

  useEffect(() => {

  }, [innerWidth, count]);


  const handleSlide = (type, slideCount) => {

    if (type === "next") {

      setSlideSize(innerWidth >= 1190 ? largePercent * count * -1 : innerWidth <= 1190 && innerWidth >= 768 ? mediumPercent * count * -1 : smallPercent * count * -1);
      setCount(slideCount + 1);
    } else {
      setSlideSize(innerWidth >= 1190 ? slideSize + largePercent : innerWidth <= 1190 && innerWidth >= 768 ? slideSize + mediumPercent : slideSize + smallPercent);
      setCount(slideCount - 1);
    }
  };

  return (
    <>
      <Slide
        name="products"
        title="당신만의 라페스타"
        list={productList}
        onSlide={handleSlide}
      >
        <ul
          className="products__image-list" id="products__image-list"
          style={{ transform: `translateX(${slideSize}px)` }}
        >
          {productList.map(item => <ProductsItem key={item.id} item={item} />
          )}
        </ul>
      </Slide>
    </>
  );
}

export default Products;

