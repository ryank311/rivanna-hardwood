import React from 'react';
import $ from 'jquery';
import classNames from 'classnames';

import './InfoCard.scss';

export default class InfoCard extends React.Component {

  constructor() {
    super();
    this.state = {
      displayCard: this.props.scrollAnimate === 0,
      scrollListener: this.handleScroll.bind(this)
    };
  }

  componentDidMount() {
    if (!this.state.displayCard) {
      window.addEventListener('scroll', this.state.scrollListener);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.state.scrollListener);
  }

  handleScroll(event) {
    if (!event) {
      return;
    }
    const scrollTop = $(document).scrollTop();
    let displayCard = scrollTop > this.props.scrollAnimate;
    displayCard = this.state.displayCard || displayCard;
    if (this.state.displayCard !== displayCard) {
      this.setState({
        displayCard
      });
    }
  }

  render() {
    const showCard = this.state.displayCard;
    const fadeDirection = this.props.fadeDirection || 'fade-in-left';
    const aboutCardClass = classNames('col-sm-12', 'about-card', (showCard ? '' : fadeDirection));

    return (
      <div className={aboutCardClass}>
        {this.props.children}
        <div className="clearfix"></div>
      </div>
    );
  }
}

InfoCard.propTypes = {
  scrollAnimate: React.PropTypes.number,
  fadeDirection: React.PropTypes.string,
  children: React.PropTypes.node
};
