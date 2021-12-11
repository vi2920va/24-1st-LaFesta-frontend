import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Button from '../Button/Button';
import './Slide.scss';

function Slide({ title, list, name, children, onSlide }) {
  const [slideBg, setSlideBg] = useState('');
  const [slideCount, setSlideCount] = useState(1);

  const handleNextClick = () => {
    if (slideCount < list.length) {
      setSlideCount(prev => prev + 1);
      onSlide('next', slideCount);
    }
  };
  const hadlePrevClick = () => {
    if (slideCount > 1) {
      setSlideCount(prev => prev - 1);
      onSlide('prev', slideCount);
    }
  };

  useEffect(() => {
    let slideItem = list.find(item => item.id === slideCount);
    setSlideBg(slideItem && slideItem.background);

  }, [list, slideCount]);

  if (list.length === 0) {
    return null;
  }

  return (
    <section className={`slide`} style={{ background: slideBg }}>
      <div className={`slide-wrapper__${name}`}>
        <h3 className={`slide-title__${name}`}>{title}</h3>
        <ol className={`slide-count__list-${name}`}>
          <li>
            <Button
              className="button--prev"
              disabled={slideCount === 1}
              onClick={hadlePrevClick}
            >
              <FiChevronLeft />
            </Button>
          </li>
          <li className="count--item">
            <div className="count--item__text">
              <span>{slideCount}</span>
              <span>/</span>
              <span>{list.length}</span>
            </div>
          </li>
          <li>
            <Button
              className="button--next"
              onClick={handleNextClick}
              disabled={slideCount === list.length}
            >
              <FiChevronRight />
            </Button>
          </li>
        </ol>
      </div>
      {children}
    </section>
  );
}

export default Slide;
