import React from 'react';
import ListItem from './ListItem/ListItem';
import "./Collections.scss";

function Collections({ list }) {
  return (
    <section className="main-collections">
      <h2 className="main-collections__title">The LaFesta World</h2>
      <ul className="main-collections__list">
        {list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
export default Collections;
