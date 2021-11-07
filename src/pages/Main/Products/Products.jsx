import React, { useEffect, useState, useRef } from 'react';
import Slide from '../../../components/Slide/Slide';
import ProductsItem from './ProductsItem/ProductsItem';
import './Products.scss';

function Products() {

  const slideRef = useRef();
  const [count, setCount] = useState(1);
  const [slideSize, setSlideSize] = useState(0);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/mockData.json')
      .then(res => res.json())
      .then(data => setProductList(data.products));
  }, []);

  
  useEffect(() => {
    const onWindowSize = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', onWindowSize);

    return () => {
      window.addEventListener('remove', onWindowSize);
    };
  }, []); 

  useEffect(() => {
    if(slideRef.current){
      setSlideSize((slideRef.current.children[0].offsetWidth + 1) * (count - 1) * -1);
    }
  }, [count, innerWidth]);


  const handleSlide = (type, slideCount) => {
    if (type === "next") {
      setCount(slideCount + 1);
    } else {
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
          className="products__image-list"
          ref={slideRef}
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

