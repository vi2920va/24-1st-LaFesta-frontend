import React, { useState, useEffect } from 'react';
import CollectionsItem from './CollectionsItem/CollectionsItem';
import './Colletions.scss';

function Colletions() {
  const [collectionList, setCollectionList] = useState([]);

  useEffect(() => {
    fetch('/data/mockData.json')
      .then(res => res.json())
      .then(data => setCollectionList(data.collections));
  }, []);
  return (
    <section className="collections">
      <h2 className="collections__title">The LaFesta World</h2>
      <ul className="collections__list">
        {collectionList.map(item => (
          <CollectionsItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
export default Colletions;
