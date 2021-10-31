import React from 'react';
import ICON_DATA from './data/ICON_DATA';
import IconItem from './IconItem/IconItem';
import './IconList.scss';

function IconList() {
  return (
    <ul className="icon__list">
      {ICON_DATA.map((icon) =>
        <IconItem key={icon.id} icon={icon} />
      )}
    </ul>
  );
}

export default IconList;