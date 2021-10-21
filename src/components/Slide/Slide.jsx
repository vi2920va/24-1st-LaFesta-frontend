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
    // useEffect setState 무한루프
    /** 
     * useEffect - setState 무한 루프
     * - 무한 루프 빠지는 것은 의존성 배열을 전달하지 않았을 가능성이 크므로
     *  이 경우에 함수 내에서 사용하는 값을 의존성 배열로 지정하면된다.
     * 
     * - 의존성 배열을 지정되어 있음에도 무한 루프에 빠진 경우 이펙트 함수 내에서
     *   의존성 배열 내의 값을 수정할 가능성이 높다. 
     * -> 두 번째 경우에 값을 지우는 것보다 근본적인 원인을 찾아야 한다.
     * 
     * - useEffect에서 사용되는 cleanup 함수는 이펙트가 실행되기 전에 매 번
     *   호출되며 컴포넌트가 unmount될 때 정리된다. 
     * 
     * - 의존성 배열을 설정하게 되면 리렌더링 되는 것을 방지하고, 의존성
     *   배열에 설정된 값이 변경된다면 이펙트가 실행된다
     */