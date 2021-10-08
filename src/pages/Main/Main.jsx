import React, { Component } from 'react';
import CarouselItem from './CarouselItem/CarouselItem';
import './Main.scss';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventCount: 1,
      insideCount: 1,
      eventList: [],
      collectionList: [],
      insideList: [],
    };
    this.saleMargin = 0;
    this.insideMargin = 0;
  }

  handleNextClick = () => {
    const { eventCount, eventList } = this.state;
    const length = eventList.length;

    if (eventCount < length) {
      this.setState({
        eventCount: eventCount + 1,
      });
      this.saleMargin -= 421;
    }
  };

  handlePrevClick = () => {
    const { eventCount, eventList } = this.state;
    const length = eventList.length;

    if (!eventCount < length && eventCount > 1) {
      this.setState({
        eventCount: eventCount - 1,
      });
      this.saleMargin += 421;
    }
  };

  handleInSideNextClick = () => {
    const { insideCount, insideList } = this.state;
    const length = insideList.length;

    if (insideCount < length) {
      this.setState({
        insideCount: insideCount + 1,
      });

      this.insideMargin -= 1566;
    }
  };

  handleInSidePrevClick = () => {
    const { insideCount, insideList } = this.state;

    const length = insideList.length;
    if (!insideCount < length && insideCount > 1) {
      this.setState({
        insideCount: insideCount - 1,
      });

      this.insideMargin += 1566;
    }
  };

  componentDidMount() {
    fetch('/data/mockData.json')
      .then((res) => res.json())
      .then((lists) => {
        const init = {
          insideList: [],
          eventList: [],
          collectionList: [],
        };

        const listInit = {
          inside: 'insideList',
          collection: 'collectionList',
          event: 'eventList',
        };

        lists.forEach((item) => {
          init[listInit[item.category]].push(item);
        });

        this.setState({
          insideList: init.insideList,
          eventList: init.eventList,
          collectionList: init.collectionList,
        });
      });
  }

  render() {
    const { eventCount, eventList, insideCount, insideList, collectionList } =
      this.state;
    const saleLength = insideList.length;
    const insideLength = eventList.length;

    const saleStyle = {
      marginLeft: this.saleMargin,
    };
    const insideStyle = {
      marginLeft: this.insideMargin,
    };

    return (
      <main>
        <section className="banner-wrapper">
          <small className="sub-title">GIFT FROM LAFASTA</small>
          <h2 className="banner-title">라페스타가 드리는 선물</h2>
          <div className="banner-content">
            <strong>신상품 아이템 구매시, 스포츠 텀블러 증정</strong>
            <p>~ 10월 10일까지</p>
            <button type="button" className="button--details">
              자세히 보기
            </button>
          </div>
        </section>
        <section className="products-wrapper">
          <div className="slide-wrapper">
            <h3 className="products-title">당신만의 라페스타</h3>
            <ol className="slide-count__list">
              <li>
                <button
                  type="button"
                  className="button--prev"
                  onClick={this.handlePrevClick}
                  disabled={eventCount === 1}
                >
                  <i className="fas fa-chevron-left" />
                </button>
              </li>
              <li className="start--count">
                <span>{eventCount}</span>
              </li>
              <li className="center">
                <span>/</span>
              </li>
              <li className="end--count">
                <span>{saleLength}</span>
              </li>
              <li>
                <button
                  type="button"
                  className="button--next"
                  onClick={this.handleNextClick}
                  disabled={eventCount === saleLength}
                >
                  <i className="fas fa-chevron-right" />
                </button>
              </li>
            </ol>
          </div>
          <ul className="products-list" style={saleStyle}>
            {eventList.map((item) => (
              <CarouselItem key={item.id} item={item} />
            ))}
          </ul>
        </section>
        <section className="collection-wrapper">
          <img
            src="https://i.postimg.cc/YCjKtS1Q/l001-story-desk-1.webp"
            alt="컬렉션"
          />
          <div className="cellection-content">
            <small className="sub-title">LACOSTE X W L001</small>
            <h2 className="collection-title">
              자이언티 헤이즈 콜드의 스니커즈
            </h2>
            <p>
              독보적인 아이코닉 뮤지션, 자이언티, 헤이즈, 콜드가 라코스테의
              새로운 스니커즈 L001과 함께했습니다. 라코스테의 새로운 컬렉션과
              함께한 감각적인 이들의 가을 룩도 놓치지 마세요.
            </p>

            <button type="button" className="button--plus">
              자세히 보기
            </button>
          </div>
        </section>
        <section className="world-wrapper">
          <h2 className="world-title">The Lacoste World</h2>
          <ul className="world-list">
            {collectionList.map((item) => (
              <CarouselItem key={item.id} item={item} />
            ))}
          </ul>
        </section>
        <section className="inside-wrapper">
          <div className="slide-wrapper">
            <h3 className="inside-title">Lacoste Inside</h3>
            <ol className="slide-count__list">
              <li>
                <button
                  type="button"
                  className="butto--prev"
                  onClick={this.handleInSidePrevClick}
                  disabled={insideCount === 1}
                >
                  <i className="fas fa-chevron-left" />
                </button>
              </li>
              <li className="start--count">
                <span>{insideCount}</span>
              </li>
              <li className="center">
                <span>/</span>
              </li>
              <li className="end-count">
                <span>{insideLength}</span>
              </li>
              <li>
                <button
                  type="button"
                  className="button--next"
                  onClick={this.handleInSideNextClick}
                  disabled={insideCount === insideLength}
                >
                  <i className="fas fa-chevron-right" />
                </button>
              </li>
            </ol>
          </div>
          <ul className="inside-list" style={insideStyle}>
            {insideList.map((item) => (
              <CarouselItem key={item.id} item={item} />
            ))}
          </ul>
        </section>
      </main>
    );
  }
}
export default Main;
