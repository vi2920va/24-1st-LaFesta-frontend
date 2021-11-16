import React, { useState, useEffect } from 'react';
import Slide from '../../../components/Slide/Slide';
import InsideItem from './InsideItem/InsideItem';
import './Insides.scss';

// const largePercent = 217;
// const mediumPercent = 40;
// const smallPercent = 8;

function Insides() {
  const innerWidth = window.innerWidth;
  const [count, setCount] = useState(1);
  const [slideSize, setSlideSize] = useState(0);
  const [insideList, setInsideList] = useState([]);

  useEffect(() => {
    fetch('/data/mockData.json')
      .then(res => res.json())
      .then(data => setInsideList(data.insides));
  }, []);

  useEffect(() => {
    if (count > 1) {
    }

  }, [count, innerWidth]);

  const handleSlide = (type, slideCount) => {
    if (type === 'next') {
      setCount(slideCount + 1);
    } else {
      setCount(slideCount - 1);
    }
  };

  return (
    <Slide
      name="insides"
      title="LaFesta Inside"
      list={insideList}
      onSlide={handleSlide}
    >
      <ul
        className="insides__image-list"
        style={{ transform: `translateX(${slideSize}px)` }}
      >
        {insideList.map(item => (
          <InsideItem item={item} />
        ))}
      </ul>
    </Slide>
  );
}

export default Insides;
