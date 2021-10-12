import React from 'react';
import ListItem from './ListItem/ListItem';
import "./Insides.scss"

<<<<<<< HEAD:src/pages/Main/Insides/Insides.jsx
function Insides({ list, count, style, ...props }) {
=======
function Products({ list, count, style, ...props }) {

>>>>>>> main:src/pages/Products/Products.jsx
  const handleNextClick = () => {
    const { nextFunc } = props;

    if (count && list.length) {
      nextFunc(count, style);
    }
  };

  const hadlePrevClick = () => {
    const { prevFunc } = props;
<<<<<<< HEAD:src/pages/Main/Insides/Insides.jsx

=======
    
>>>>>>> main:src/pages/Products/Products.jsx
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
<<<<<<< HEAD:src/pages/Main/Insides/Insides.jsx
        className="inside-list"
        style={{ transform: `translateX(${style}px)` }}
=======
        className="main-products__image-slide"
        style={{transform: `translateX(${style}px)` }}
>>>>>>> main:src/pages/Products/Products.jsx
      >
        {list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
export default Insides;
