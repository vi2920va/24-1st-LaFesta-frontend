import React from 'react';
import Button from '../../../../components/Button/Button';
import './Banner.scss';

function Banner() {
  return (
    <section className="banner">
      <small className="banner__sub-title">GIFT FROM LAFASTA</small>
      <h2 className="banner__title">라페스타가 드리는 선물</h2>
      <div className="banner__content">
        <strong>신상품 아이템 구매시, 스포츠 텀블러 증정</strong>
        <p>~ 10월 10일까지</p>
        <Button className="button--details--black" name="자세히 보기" />
      </div>
    </section>
  );
}
export default Banner;
