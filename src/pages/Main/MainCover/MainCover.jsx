import React from 'react';
import video from './video/video.mp4';
import Button from '../../../components/Button/Button';
import './MainCover.scss';

function MainCover() {
  return (
    <section className="main-cover">
      <div className="main-cover__video">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      </div>
      <div className="main-cover__content">
        <h2 className="main-cover__title">라코스테 가을 베스트</h2>
        <strong className="main-cover__text">온라인 베스트 아이템20순위</strong>
        <Button name="구매하기" className="button--plus--white" />
      </div>
    </section>
  );
}
export default MainCover;
