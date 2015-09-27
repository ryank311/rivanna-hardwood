import React from 'react';
import classNames from 'classnames';
import styles from './Home.scss';

export default class Home extends React.Component {

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
    let cardClasses = classNames('text-center', styles['info-card'], (showCards ? styles['show-card'] : ''));
    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <div className={styles['home-logo-container']}>
                        <div className={styles['home-logo']}>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'row ' + styles['media-bg']}>
                <div className="col-sm-12">
                    <div className={'container ' + styles['card-container']}>
                        <div className="col-sm-4">
                            <div className={cardClasses}>
                                <i className="fa fa-home"></i>
                                <h2>Residential</h2>
                                <p>Repairs, Replacements and Upgrades</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className={cardClasses}>
                                <i className="fa fa-building-o"></i>
                                <h2>Commercial</h2>
                                <p>High quality detail with professional results</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className={cardClasses}>
                                <i className="fa fa-map-marker"></i>
                                <h2>Local</h2>
                                <p>Locally owned and proudly serving the Rivanna area</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'row ' + styles['alt-bg']}>
                <div className="col-sm-12">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1>About Rivanna Wood Floors</h1>
                            </div>
                        </div>
                        <div className={'col-sm-12 ' + styles['about-card']}>
                            <div className="col-sm-8">
                                <h2>Chris Cempre</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="col-sm-4">
                                <div className={styles['about-hero']}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop;
    let displayInfoCards = scrollTop > 200;

    this.setState({
      displayInfoCards: this.state.displayInfoCards || displayInfoCards
    });
  }
}
