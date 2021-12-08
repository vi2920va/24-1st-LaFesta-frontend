import React, { useEffect, useState, useRef } from 'react';
import Slide from '../../../../components/Slide/Slide';
import ProductsItem from './ProductsItem/ProductsItem';
import './Products.scss';

// 아이템에서 이미지의 넓이 또는 이미지의 높이가 큰 지 어떻게 비교할 것인가 ?
// 이미지 사이즈 크기를 부모에서 map를 돌릴 때 item에서 넘겨줄 것 인가?
// 아이템에서 이미지가 그려진 다음에 ref로 연결하여 offsetWidth, offsetHeight로 크기를 판단(X)

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
    if (slideRef.current) {
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

