import React from 'react';
import classNames from 'classnames';

import './Cards.scss';

export default class Cards extends React.Component {

  constructor() {
    super();
    this.state = {
      displayInfoCards: false,
      scrollListener: this.handleScroll.bind(this)
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.state.scrollListener);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.state.scrollListener);
  }

  render() {
    let showCards = this.state.displayInfoCards;
    let cardClass1 = classNames('text-center', 'delay-1', 'info-card', (showCards ? 'show-card' : ''));
    let cardClass2 = classNames('text-center', 'delay-2', 'info-card', (showCards ? 'show-card' : ''));
    let cardClass3 = classNames('text-center', 'delay-3', 'info-card', (showCards ? 'show-card' : ''));

    return (
        <div className="container card-container">
            <div className="col-sm-12 text-center">
                <h1 className="card-container-title">
                    Rivanna Wood Floors Serves You
                </h1>
            </div>
            <div className="col-sm-4">
                <div className={cardClass1}>
                    <i className="fa fa-home"></i>
                    <h2>Your Home</h2>
                    <p>Repairs, Replacements and Upgrades</p>
                </div>
            </div>
            <div className="col-sm-4">
                <div className={cardClass2}>
                    <i className="fa fa-building-o"></i>
                    <h2>Your Business</h2>
                    <p>High quality detail with professional results</p>
                </div>
            </div>
            <div className="col-sm-4">
                <div className={cardClass3}>
                    <i className="fa fa-map-marker"></i>
                    <h2>Your Community</h2>
                    <p>Locally owned and proudly serving the Charlottesville area</p>
                </div>
            </div>
        </div>
    );
  }

  handleScroll(event) {
    if (!event) {
      return;
    }
    let scrollTop = event.srcElement.body.scrollTop;
    let displayInfoCards = scrollTop > this.props.scrollAnimate;

    this.setState({
      displayInfoCards: this.state.displayInfoCards || displayInfoCards
    });
  }
}

Cards.propTypes = {
  scrollAnimate: React.PropTypes.number
};
