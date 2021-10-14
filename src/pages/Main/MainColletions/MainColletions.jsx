import React, { useState, useEffect } from 'react';
import CollectionsItem from './collectionsItem/collectionsItem';
import './MainColletions.scss';

function MainColletions() {
  const [collectionList, setCollectionList] = useState([]);

  useEffect(() => {
    fetch('/data/mockData.json')
      .then((res) => res.json())
      .then((data) => setCollectionList(data.collections));
  },[]);
  return (
    <section className="main-collections">
      <h2 className="main-collections__title">The LaFesta World</h2>
      <ul className="main-collections__list">
        {collectionList.map((item) => (
          <CollectionsItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
export default MainColletions;
