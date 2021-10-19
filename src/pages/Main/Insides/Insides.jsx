import React, { useState, useEffect } from 'react';
import Slide from '../../../components/Slide/Slide';
import InsideItem from './InsideItem/InsideItem';
import './Insides.scss';

const largePercent = 217;
const mediumPercent = 40;
const smallPercent = 8;

function Insides() {
  const viewSize = window.innerWidth;
  const [slideSize, setSlideSize] = useState(0);
  const [insideList, setInsideList] = useState([]);

  const handleSlide = (type, count) => {
    if (type === 'next') {
      setSlideSize(largePercent * count * -10);
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
      .then(data => setInsideList(data.insides));
  }, []);

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
          <InsideItem key={item.id} item={item} />
        ))}
      </ul>
    </Slide>
  );
}

export default Insides;
