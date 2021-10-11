import React from 'react';
import './Banner.scss';

function Banner() {
  return (
    <section className="main-banner">
      <small className="main-banner__sub-title">GIFT FROM LAFASTA</small>
      <h2 className="main-banner__title">라페스타가 드리는 선물</h2>
      <div className="main-banner__content">
        <strong>신상품 아이템 구매시, 스포츠 텀블러 증정</strong>
        <p>~ 10월 10일까지</p>
        <button type="button" className="button--details">
          자세히 보기
        </button>
      </div>
    </section>
  );
}
export default Banner;
