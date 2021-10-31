import React from 'react'
import { Link } from 'react-router-dom';
import LINK_DATA from './data/LINK_DATA';
import Button from '../../Button/Button';
import kakaoIcon from './image/kakao.svg';
import "./LinkList.scss";

function LinkList() {
  return  (
    <section className="link">
      <div className="link__wrapper">
      <div className="link__kakao-wrapper">
        <div className="link__kakao-wrapper__content">
          <img src={kakaoIcon} alt="라페스타 카카오 플러스 친구" />
          <h3 className="link__kakao-wrapper__title">LAFESTA KAKAO FRIEND</h3>
        </div>
        <div className="link__kakao-wrapper__description">
          라페스타 카카오 플러스 친구가 되시면 다양한 쇼핑정보 및 혜택을
          받아보실 수 있습니다.
        </div>

        <Button className="button__kakao" name="등록하기" />

        <div className="link__store">
          <small className="link__store-count">240개의 매장</small>
          <Button className="button__search" name="매장 찾기" />
        </div>
      </div>

      <div className="link__list">
        {LINK_DATA.map((link, idx) => (
          <div className={`link__list-${link.name}__wrapper`} key={idx}>
            <h4 className={'link__list-title'}>{link.title}</h4>
            <ul className={'link__list-inner__list'}>
              {link.categories.map((item, idx) => (
                <li key={idx}>
                  <Link className="link__item" to="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}
export default LinkList;