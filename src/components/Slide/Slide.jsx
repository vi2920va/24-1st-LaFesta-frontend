import React, { useState } from 'react';
import Button from '../Button/Button';
import './Slide.scss';

function Slide({ title, list, name, children, onSlide }) {
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

  if (list.length === 0) {
    return null;
  }
  return (
    <section className="slide">
      <div className={`slide-wrapper__${name}`}>
        <h3 className={`slide-title__${name}`}>{title}</h3>
        <ol className={`slide-count__list-${name}`}>
          <li>
            <Button
              className="button--prev"
              disabled={slideCount === 1}
              onClick={hadlePrevClick}
            >
              <i className="fas fa-chevron-left" />
            </Button>
          </li>
          <li className="start-count">
            <span>{slideCount}</span>
          </li>
          <li className="center">
            <span>/</span>
          </li>
          <li className="end-count">
            <span>{list.length}</span>
          </li>
          <li>
            <Button
              className="button--next"
              onClick={handleNextClick}
              disabled={slideCount === list.length}
            >
              <i className="fas fa-chevron-right" />
            </Button>
          </li>
        </ol>
      </div>
      {children}
    </section>
  );
}

export default Slide;
