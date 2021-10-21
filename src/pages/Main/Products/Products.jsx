import React, { useEffect, useState, useCallback } from 'react';
import Slide from '../../../components/Slide/Slide';
import ProductsItem from './ProductsItem/ProductsItem';
import './Products.scss';

function Products() {
  const [count, setCount] = useState(1);
  const [slideSize, setSlideSize] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  const [largePercent, setLargePercent] = useState(28);
  const [mediumPercent, setMediumPercent] = useState(40);
  const [smallPercent, setSmallPercent] = useState(8);
  const [productList, setProductList] = useState([]);


  useEffect(() => {
    fetch('/data/mockData.json')
      .then(res => res.json())
      .then(data => setProductList(data.products));
  }, []);

  const onWindowSize = useCallback(() => {
    setInnerWidth(window.innerWidth);
  }, [count]);

  useEffect(() => {
    window.addEventListener('resize', onWindowSize);

    return () => {
      window.addEventListener('remove', onWindowSize);
    };
  }, []);


  useEffect(() => {
  if (count < productList.length &&  innerWidth <= 1190) {
    setSlideSize(mediumPercent * count * -1);
  }
  if(count < productList.length && innerWidth <= 768){
    setSlideSize(smallPercent * count * -1);
  }
  }, [innerWidth, count]);


const handleSlide = (type, slideCount) => {

  if (type === "next") {
    setSlideSize(window.innerWidth >= 1190 ? largePercent * count * -1 : mediumPercent * count * -1 );
    setCount(slideCount);
  } else {
    setSlideSize(window.innerWidth >= 1190 ? slideSize + largePercent : slideSize + mediumPercent);
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
        className="products__image-list"
        style={{ transform: `translateX(${slideSize}vw)` }}
      >
        {productList.map(item => <ProductsItem key={item.id} item={item} />
        )}
      </ul>
    </Slide>
  </>
);
}

export default Products;

