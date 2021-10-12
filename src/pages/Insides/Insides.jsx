import React from 'react';
import ListItem from './ListItem/ListItem';
import "./Insides.scss"

function Insides({ list, count, style, ...props }) {
  const handleNextClick = () => {
    const { nextFunc } = props;

    if (count && list.length) {
      nextFunc(count, style);
    }
  };

  const hadlePrevClick = () => {
    const { prevFunc } = props;

    if (!list < list.length && count > 1) {
      prevFunc(count);
    }
  };
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
            <span>{list.length}</span>
          </li>
          <li>
            <button
              type="button"
              className="button--next"
              onClick={hadlePrevClick}
              disabled={count === list.length}
            >
              <i className="fas fa-chevron-right" />
            </button>
          </li>
        </ol>
      </div>
      <ul
        className="inside-list"
        style={{ transform: `translateX(${style}px)` }}
      >
        {list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
export default Insides;
