import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Collaboration from '../Collaboration/Collaboration';
import Collections from '../Collections/Collections';
import './Main.scss';
import Insides from '../Insides/Insides';

function Main() {
  const [productList, setProductList] = useState([]);
  const [itemLeft, setItemLeft] = useState(0);
  const [startCount, setStartCount] = useState(1);
  const [collectionList, setCollectionList] = useState([]);
  const [insideList, setInsideList] = useState([]);

  const handleNextClick = () => {
    setStartCount(setStartCount + 1);
    setItemLeft(itemLeft - 552);
  };

  const hadlePrevClick = () => {
    setStartCount(setStartCount - 1);
    setItemLeft(itemLeft + 552);
  };

  useEffect(() => {
    fetch('/data/mockData.json')
      .then((res) => res.json())
      .then((data) => {
        setProductList(data.products);
        setCollectionList(data.collections);
        setInsideList(data.insides);
      });
  }, []);

  return (
    <main>
      <Banner />
      <Products
        list={productList}
        count={startCount}
        style={itemLeft}
        nextFunc={handleNextClick}
        prevFunc={hadlePrevClick}
      />
      <Collaboration/>
      <Collections list={collectionList} />
      <Insides list={insideList} count={startCount} style={itemLeft} />
    </main>
  );
}

export default Main;
