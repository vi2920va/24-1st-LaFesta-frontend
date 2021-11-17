import React, { useState, useEffect, useRef } from 'react';
import Slide from '../../../components/Slide/Slide';
import InsideItem from './InsideItem/InsideItem';
import './Insides.scss';

function Insides() {
  const slideRef = useRef();
  const [count, setCount] = useState(1);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [slideSize, setSlideSize] = useState(0);
  const [insideList, setInsideList] = useState([]);

  useEffect(() => {
    fetch('/data/mockData.json')
      .then(res => res.json())
      .then(data => setInsideList(data.insides));
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
      setSlideSize(slideRef.current.children[0].offsetWidth * (count - 1) * -1);
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
        ref={slideRef}
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
