import React from 'react';
import Cards from './Cards.js';
import InfoCard from './InfoCard.js';
import './Home.scss';
import classNames from 'classnames';

export default class Home extends React.Component {

  render() {
    let inputGroupContainer = classNames('input-group', 'quote-request');
    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="home-logo-container">
                        <div className="home-logo">
                        </div>
                    </div>
                </div>
            </div>
            <div className="row hero-bg">
                <div className="col-sm-12">
                    <Cards scrollAnimate={100}/>
                </div>
                <div className="clearfix"></div>
                <div className="container text-center quote-container">
                    <div className="col-sm-12">
                        <h3>Request a Consultation</h3>
                    </div>
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className={inputGroupContainer}>
                            <input type="email" className="form-control" placeholder="Enter Your Email Address"/>
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button">Submit</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="row alt-bg">
                <div className="col-sm-12">
                    <div className="container info-card-container">
                        <div className="row">
                            <div className="about-title">
                                <div className="col-sm-12 text-center">
                                    <h1>About Rivanna Wood Floors</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <InfoCard scrollAnimate={900}>
                                <div className="col-sm-4">
                                    <div className="about-logo">
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
                                    <div className="about-hero">
                                    </div>
                                </div>
                            </InfoCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
