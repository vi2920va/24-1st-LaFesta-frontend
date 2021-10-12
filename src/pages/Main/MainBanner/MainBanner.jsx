import React from 'react';
<<<<<<< HEAD:src/pages/Main/MainBanner/MainBanner.jsx
import Button from '../../../components/Button/Button';
=======
import Button from '../../components/Button/Button';
>>>>>>> main:src/pages/Banner/Banner.jsx
import './Banner.scss';

function MainBanner() {
  return (
    <section className="main-banner">
      <small className="main-banner__sub-title">GIFT FROM LAFASTA</small>
      <h2 className="main-banner__title">라페스타가 드리는 선물</h2>
      <div className="main-banner__content">
        <strong>신상품 아이템 구매시, 스포츠 텀블러 증정</strong>
        <p>~ 10월 10일까지</p>
        <Button className="button--details"  name="자세히 보기"/>
      </div>
    </section>
  );
}
export default MainBanner;
