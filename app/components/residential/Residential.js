import React from 'react';
import InfoCard from '../common/InfoCard.js';
import Carousel from '../common/Carousel.js';

import './Residential.scss';

export default class Residential extends React.Component {
  render() {
    return (
      <div className="residential-container">
        <div className="row">
            <div className="col-sm-12">
                <div className="logo-container">
                    <div className="logo-no-icon">
                    </div>
                </div>
            </div>
        </div>
        <div className="alt-bg">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2 text-center">
                        <h1>Your Home Deserves the Best</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <InfoCard scrollAnimate={0}>
                            <div className="col-xs-3 text-center">
                                <i className="fa fa-plus-circle fa-4x"></i>
                            </div>
                            <div className="col-xs-9">
                                <h2>Replace Old Floors</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </InfoCard>
                        <InfoCard scrollAnimate={0} fadeDirection="fade-in-right">
                            <div className="col-xs-9">
                                <h2>Re-Finish Worn Floors</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            <div className="col-xs-3 text-center">
                                <i className="fa fa-plus-circle fa-4x"></i>
                            </div>
                        </InfoCard>
                        <InfoCard scrollAnimate={0}>
                            <div className="col-xs-3 text-center">
                                <i className="fa fa-plus-circle fa-4x"></i>
                            </div>
                            <div className="col-xs-9">
                                <h2>Repair Damaged Floors</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </InfoCard>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
        <div className="container">
            <div className="row form-title">
                <div className="col-sm-8 col-sm-offset-2 text-center">
                    <h1>Request A Consultation</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <input className="form-control" placeholder="Name" type="text"/>
                </div>
                <div className="col-sm-4 col-sm-offset-2">
                    <input className="form-control" placeholder="Email Address" type="email"/>
                </div>
                <div className="col-sm-4">
                    <input className="form-control" placeholder="Phone Number" type="phone"/>
                </div>
                <div className="col-sm-8 col-sm-offset-2">
                    <textarea className="form-control" placeholder="Message"/>
                </div>
                <div className="col-sm-8 col-sm-offset-2 text-center">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
        <div className="row">
            <div className="carousel-container">
                <div className="container">
                    <Carousel>
                        <img src={require('../../images/cust1_bates5.jpg')}/>
                        <img src={require('../../images/cust1_bates6.jpg')}/>
                        <img src={require('../../images/cust1_south4.jpg')}/>
                        <img src={require('../../images/cust1_south5.jpg')}/>
                    </Carousel>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
