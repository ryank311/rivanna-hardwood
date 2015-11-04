import React from 'react';
import $ from 'jquery';
import classNames from 'classnames';

import './InfoCard.scss';

export default class InfoCard extends React.Component {

  constructor() {
    super();
    this.state = {
      displayCard: false,
      scrollListener: this.handleScroll.bind(this)
    };
  }

  componentDidMount() {
    if (this.props.scrollAnimate === 0) {
      this.setState({ displayCard: true });
    } else {
      window.addEventListener('scroll', this.state.scrollListener);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.state.scrollListener);
  }

  render() {
    let showCard = this.state.displayCard;
    let fadeDirection = this.props.fadeDirection || 'fade-in-left';
    let aboutCardClass = classNames('col-sm-12', 'about-card', (showCard ? '' : fadeDirection));

    return (
        <div className={aboutCardClass}>
            {this.props.children}
            <div className="clearfix"></div>
        </div>
    );
  }

  handleScroll(event) {
    if (!event) {
      return;
    }
    let scrollTop = $(document).scrollTop();
    let displayCard = scrollTop > this.props.scrollAnimate;
    displayCard = this.state.displayCard || displayCard;
    if (this.state.displayCard !== displayCard) {
      this.setState({
        displayCard
      });
    }
  }
}

InfoCard.propTypes = {
  scrollAnimate: React.PropTypes.number,
  fadeDirection: React.PropTypes.string,
  children: React.PropTypes.node
};
