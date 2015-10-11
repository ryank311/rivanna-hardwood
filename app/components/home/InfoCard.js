import React from 'react';
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
    window.addEventListener('scroll', this.state.scrollListener);
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
        </div>
    );
  }

  handleScroll(event) {
    if (!event) {
      return;
    }
    let scrollTop = event.srcElement.body.scrollTop;
    let displayCard = scrollTop > this.props.scrollAnimate;

    this.setState({
      displayCard: this.state.displayCard || displayCard
    });
  }
}

InfoCard.propTypes = {
  scrollAnimate: React.PropTypes.number,
  fadeDirection: React.PropTypes.string,
  children: React.PropTypes.node
};
