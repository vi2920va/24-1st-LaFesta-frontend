import React from 'react';
import Button from '../../../components/Button/Button';
import './Collaboration.scss';

function Collaboration() {
  return (
    <section className="main-collaboration">
      <div className="main-collaboration__image">
        <img
          src="https://i.postimg.cc/YCjKtS1Q/l001-story-desk-1.webp"
          alt="컬렉션"
        />
      </div>
      <div className="main-collaboration__content">
        <div className="main-collaboration__text">
          <small className="main-collaboration__sub-title">
            LACOSTE X W L001
          </small>
          <h2 className="main-collaboration__title">
            자이언티 헤이즈 콜드의 스니커즈
          </h2>
          <p>
            독보적인 아이코닉 뮤지션, 자이언티, 헤이즈, 콜드가 라코스테의 새로운
            스니커즈 L001과 함께했습니다. 라코스테의 새로운 컬렉션과 함께한
            감각적인 이들의 가을 룩도 놓치지 마세요.
          </p>
          <Button name="자세히 보기" className="button--plus" />
        </div>
      </div>
    </section>
  );
}
export default Collaboration;
