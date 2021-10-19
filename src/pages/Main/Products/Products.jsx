import React, { useEffect, useState, useCallback } from 'react';
import Slide from '../../../components/Slide/Slide';
import ProductsItem from './ProductsItem/ProductsItem';
import './Products.scss';

/**
 * 클릭 버튼을 눌렀을 때 이미지가 하나씩 이동하는 로직 구현중
 * - breakpoint : 전체 넓이, 1190px, 768px 각각의 브라우저 마다 이동하는 값이 다름
 * - 브라우저의 창 크기가 변경되었을 때 사진이 이동될 값을 유동적으로 계산하는
 * 
 * - Bug : 
 *  - 화면 사이즈가 바뀌었을 때 이미지 이동하는 값이 다르게 된다.
 *  - useEffect에서 innerWidth의 상태만으로 클릭 이벤트를 구현할 수 있을지 궁금합니다.
 *  - 브라우저 크기 변했을 때 reisze 이벤트를 쓰는게 맞는지 궁금합니다.
 * 
 */

function Products() {
  const [count, setCount] = useState(1);
  const [slideSize, setSlideSize] = useState(0);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [largePercent, setLargePercent] = useState(28);
  const [mediumPercent, setMediumPercent] = useState(40);
  const [smallPercent, setSmallPercent] = useState(8);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/mockData.json')
      .then(res => res.json())
      .then(data => setProductList(data.products));
  }, []);

  useEffect(() => {
    // window.addEventListener('resize', onWindowSize);

    // return () => {
    //   window.addEventListener('remove', onWindowSize);
    // };
  }, []);

  // const onWindowSize = useCallback(() => {
  //   console.log('resize count >>', count);
  //   console.log('width >>', window.innerWidth);

  //   setInnerWidth(window.innerWidth);
  // }, []);


  useEffect(() => {

    console.log('effect', innerWidth);

    if (innerWidth <= 1190) {
      console.log(count !== 1 ? (mediumPercent / count + 8) * -1 : 0)
      // setSlideSize(count !== 1 ? (mediumPercent / count + 8) * -1 : 0)
    }
    if (innerWidth <= 768) {

    }
    return () => {
      console.log('will unMount', innerWidth);
    }

  }, [innerWidth, count]);

  const handleSlide = (type, slideCount) => {
    if (type === "next") {
      setCount(slideCount + 1);
      setSlideSize(innerWidth >= 1190 ? largePercent * count * -1 : 0);
    } else {
      setCount(slideCount - 1);
      setSlideSize(size => innerWidth >= 1190 ? size + largePercent : 0);
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
