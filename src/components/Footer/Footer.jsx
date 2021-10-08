import React from 'react';
import { Link } from 'react-router-dom';
import syncIcon from './images/sync.svg';
import truckIcon from './images/truck.svg';
import cardIcon from './images/card.svg';
import headsetIcon from './images/headset.svg';
import kakaoIcon from './images/kakao.svg';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-icon__list">
        <li>
          <button>
            <img src={syncIcon} alt="무료반품" />
            <span>무료반품</span>
          </button>
        </li>
        <li>
          <button>
            <img src={truckIcon} alt="무료배송" />
            <span>무료배송</span>
          </button>
        </li>
        <li>
          <button>
            <img src={cardIcon} alt="무료배송" />
            <span>안전결제</span>
          </button>
        </li>
        <li>
          <button>
            <img src={headsetIcon} alt="고객센터" />
            <span>도움이 필요하세요?</span>
          </button>
        </li>
      </ul>
      <section className="footer-link-wrapper">
        <div className="kakao">
          <div className="kakao-title-wrapper">
            <img src={kakaoIcon} alt="라페스타 카카오 플러스 친구" />
            <h3 className="kakao__title">LAFESTA KAKAO FRIEND</h3>
          </div>
          <p className="kakao__desc">
            라페스타 카카오 플러스 친구가 되시면 다양한 쇼핑정보 및 혜택을
            받아보실 수 있습니다.
          </p>
          <button className="button__kakao">등록하기</button>
        </div>
        <div className="footer-link">
          <div className="footer-link__about">
            <h4 className="footer-link__title">ABOUT LAFESTA</h4>
            <ul className="footer-link__list">
              <li>
                <Link to="#">라페스타 멤버쉽</Link>
              </li>
              <li>
                <Link to="#">라페스타 그룹</Link>
              </li>
              <li>
                <Link to="#">라페스타 채용</Link>
              </li>
            </ul>
          </div>
          <div className="footer-link__collection">
            <h4 className="footer-link__title">라페스타 컬렉션</h4>
            <ul className="footer-link__list">
              <li>
                <Link to="#">남성 POLO</Link>
              </li>
              <li>
                <Link to="#">여성 POLO</Link>
              </li>
              <li>
                <Link to="#">라페스타 키즈</Link>
              </li>
              <li>
                <Link to="#">라페스타 라이브</Link>
              </li>
              <li>
                <Link to="#">라페스타 스포츠</Link>
              </li>
            </ul>
          </div>
          <div className="footer-link__serive">
            <h4 className="footer-link__title">도움말 및 연락처</h4>
            <ul className="footer-link__list">
              <li>
                <strong>고객센터</strong>
                <em>1588-9619</em>
                <address>
                  라페스타의 고객 센터는 고객님을 위해 주중 오전 9시부터 6시까지
                  언제나 열려있습니다. (점심시간 12:30~13:30)
                </address>
              </li>
              <li>
                <Link to="#">1:1 문의하기</Link>
              </li>
              <li>
                <Link to="#">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="footer-address">
        <div className="footer-address__policy">
          <p>
            (주)위워크 타워대표이사 위코드ᅵ서울특별시 강남구 테헤란로 427 위워크
            타워
          </p>
          <p>
            사업자등록번호 123-45-05491 사업자정보확인 ▶ᅵ통신판매업신고번호제
            2021-서울선릉-01234호
          </p>
          <p>
            개인정보관리책임자: 위워크 CUSTOMER SERVICE TEL 1555-7777,
            CS-KR@LACOFESTA.COM
          </p>
        </div>
        <div className="footer-address__privacy"></div>
        <p>서울보증보험(주) 이행보증보험</p>
        <p>
          고객님은 안전거래를 위해 현금등으로 결제시 결제금액 전액에 대해 저희
          쇼핑몰에서 가입한
        </p>
        <p>서울보증보험(주)의 이행보증보험 서비스를 이용하실 수 있습니다</p>
      </div>
      <div className="footer-menu">
        <ul className="footer-menu__list">
          <li>
            <Link to="#">사이트맵</Link>
          </li>
          <li>
            <Link to="#">법적 고지</Link>
          </li>
          <li>
            <Link to="#">이용약관</Link>
          </li>
          <li>
            <Link to="#">개인정보처리방침</Link>
          </li>
          <li>
            <Link to="#">사이즈 가이드</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
