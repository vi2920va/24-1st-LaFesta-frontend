import React, { useState, useEffect } from 'react';
import ListItem from './InsideItem/InsideItem';
import './MainInsides.scss';

function MainInsides() {
  const [insideList, setInsideList] = useState([]);
  const [count, setCount] = useState(1);

  const handleNextClick = () => {
    console.log(window);
  };

  const hadlePrevClick = () => {};

  useEffect(() => {
    fetch('/data/mockData.json')
      .then((res) => res.json())
      .then((data) => setInsideList(data.insides));
  }, []);

  return (
    <section className="main-insides">
      <div className="main-insides__slide-wrapper">
        <h3 className="main-insides__title">Lacoste Inside</h3>
        <ol className="main-insides__slide-count">
          <li>
            <button
              type="button"
              className="butto--prev"
              onClick={handleNextClick}
              disabled={count === 1}
            >
              <i className="fas fa-chevron-left" />
            </button>
          </li>
          <li className="start-count">
            <span>{count}</span>
          </li>
          <li className="center">
            <span>/</span>
          </li>
          <li className="end-count">
            <span>{insideList.length}</span>
          </li>
          <li>
            <button
              type="button"
              className="button--next"
              onClick={hadlePrevClick}
              disabled={count === insideList.length}
            >
              <i className="fas fa-chevron-right" />
            </button>
          </li>
        </ol>
      </div>
      <ul
        className="inside-list"
        // style={{ transform: `translateX(${style}px)` }}
      >
        {insideList.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default MainInsides;
