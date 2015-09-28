import React from 'react';
import Carousel from 'nuka-carousel';
import Cards from './Cards.js';
import InfoCard from './InfoCard.js';
import styles from './Home.scss';

export default class Home extends React.Component {

  render() {
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
                    <Cards scrollAnimate={100}/>
                </div>
                <div className="clearfix"></div>
                <div className={'container text-center ' + styles['quote-container']}>
                    <div className="col-sm-12">
                        <h3>Request a Quote</h3>
                    </div>
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className="input-group">
                            <input type="email" className="form-control" placeholder="Enter Your Email Address"/>
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button">Submit</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'row ' + styles['alt-bg']}>
                <div className="col-sm-12">
                    <div className={'container ' + styles['info-card-container']}>
                        <div className="row">
                            <div className={styles['about-title']}>
                                <div className="col-sm-12 text-center">
                                    <h1>About Rivanna Wood Floors</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <InfoCard scrollAnimate={900}>
                                <div className="col-sm-4">
                                    <div className={styles['about-logo']}>
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <h2>Rivanna Wood Floors</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </InfoCard>
                            <InfoCard scrollAnimate={1200} fadeDirection="fade-in-right">
                                <div className="col-sm-8">
                                    <h2>Chris Cempre</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div className="col-sm-4">
                                    <div className={styles['about-hero']}>
                                    </div>
                                </div>
                            </InfoCard>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'row'}>
                <div className={styles['carousel-container']}>
                    <div className="text-center">
                        <h1>Recent Installations</h1>
                    </div>
                    <Carousel>
                        <img src={require('../../images/carousel1.jpg')}/>
                        <img src={require('../../images/carousel2.jpg')}/>
                        <img src={require('../../images/carousel3.jpg')}/>
                        <img src={require('../../images/carousel4.jpg')}/>
                        <img src={require('../../images/carousel5.jpg')}/>
                        <img src={require('../../images/carousel6.jpg')}/>
                    </Carousel>
                </div>
            </div>
        </div>
    );
  }
}
