import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {ALL_SHARE_DATA, LANGUAGE_DATA} from './data/ALL_SHARE_DATA';
import kr from './image/kr.png';
import Button from '../../Button/Button';
import FooterModal from '../../Modal/FooterModal';
import Portal from '../../Modal/Portal';
import "./AllShare.scss";

function AllShare() {
  const [active, setActive] = useState(false);

  const handleOpenModal = () => {
    setActive(true);
  };

  const handleCloseModal = () => {
    setActive(false);
  }

  return (
    <section className="allShare">
      <ul className="allShare__list">
        {ALL_SHARE_DATA.map(data =>
          data.categories.map((item, idx) =>
            <li className="allShare__list-item" key={idx}>
              <Link to="#">{item}</Link>
            </li>
          ))}
      </ul>

      <Button className="button__language" onClick={handleOpenModal}>
        <img src={kr} alt="Korea" />
        <span className="button__language-text">Korea</span>
      </Button>
      {
        active &&
        <Portal>
          <FooterModal data={LANGUAGE_DATA} active={active} onClose={handleCloseModal} />
        </Portal>
      }
    </section>
  );
}
export default AllShare;