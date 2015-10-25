import React from 'react';
import InfoCard from '../common/InfoCard.js';
import Carousel from '../common/Carousel.js';
import ConsultationActions from '../../actions/ConsultationActions.js';

import './Residential.scss';

export default class Residential extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      name: null,
      email: null,
      phone: null,
      message: ''
    };
  }

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
        <div className="row">
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
                                <div className="col-sm-3 hidden-xs text-center">
                                    <div className="example1-hero"></div>
                                </div>
                                <div className="col-xs-12 col-sm-9">
                                    <h2>Replace Old Floors</h2>
                                    <p>
                                        We can remove any old and outdated floor covering and replace it with new hardwood flooring.  One of the most common floor replacements is removing carpet and installing hardwood.  Carpet can collect years of dust, dirt, stains, and many other pollutants that continuously become air born with general use and maintenance.  In other instances we have replaced vinyl, tile, engineered floor, and even hardwood with new hardwood if it is beyond salvageable.
                                    </p>
                                </div>
                            </InfoCard>
                            <InfoCard scrollAnimate={0} fadeDirection="fade-in-right">
                                <div className="col-sm-9 col-xs-12">
                                    <h2>Re-Finish Worn Floors</h2>
                                    <p>
                                        We can re-finish almost any hardwood floor as long as the damage over time has not been too substantial.  We have re-finished floors in multiple houses that were over 100 years old and made them brand new again.  The most extreme cases require an aggressive sanding and possibly replacing a couple of boards where things such as urine stains, water damage, and other liquids have penetrated deep into the wood and cannot be sanded out.  In some cases where the floor has gone through normal wear, a simple light sanding and fresh coat or two of finish will make them look new again.
                                    </p>
                                </div>
                                <div className="col-sm-3 hidden-xs text-center">
                                    <div className="example2-hero"></div>
                                </div>
                            </InfoCard>
                            <InfoCard scrollAnimate={0}>
                                <div className="col-sm-3 hidden-xs text-center">
                                    <div className="example3-hero"></div>
                                </div>
                                <div className="col-sm-9 col-xs-12">
                                    <h2>Repair Damaged Floors</h2>
                                    <p>
                                        Almost any floor is repairable as long as some of the original material is still available with pre-finished or engineered products.  Most other solid wood flooring can be found or custom milled to replace and match damaged floor.  After replacing the damaged flooring we will take the necessary steps to ensure that the new flooring blends in and matches the existing floor as seamlessly as possible.
                                    </p>
                                </div>
                            </InfoCard>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
        <div className="container">
            <div className="row form-title">
                <div className="col-sm-10 col-sm-offset-1 text-center">
                    <h1>Request A Consultation</h1>
                    <p>
                        We are more than happy to meet up with you to take a look at your flooring situation, discuss possible options, and develop a plan of action to achieve your desired result.  If you could please enter the following information, and in the message field, provide a detailed description of what you would like to have done as well as how you would prefer a response, we will get back to you as soon as possible to set up an appointment.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-10 col-sm-offset-1">
                    <input name="name" className="form-control" placeholder="Name" type="text" onChange={this.handleChange.bind(this)}/>
                </div>
                <div className="col-sm-5 col-sm-offset-1">
                    <input name="email" className="form-control" placeholder="Email Address" type="email" onChange={this.handleChange.bind(this)}/>
                </div>
                <div className="col-sm-5">
                    <input name="phone" className="form-control" placeholder="Phone Number" type="phone" onChange={this.handleChange.bind(this)}/>
                </div>
                <div className="col-sm-10 col-sm-offset-1">
                    <textarea name="message" className="form-control" placeholder="Message" onChange={this.handleChange.bind(this)}/>
                </div>
                <div className="col-sm-10 col-sm-offset-1 text-center">
                    <button className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</button>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
        <div className="row">
            <div className="carousel-container">
                <div className="container">
                    <Carousel>
                        <img src={require('../../images/carousel2.jpg')}/>
                        <img src={require('../../images/carousel1.jpg')}/>
                        <img src={require('../../images/carousel3.jpg')}/>
                        <img src={require('../../images/carousel4.jpg')}/>
                        <img src={require('../../images/carousel5.jpg')}/>
                        <img src={require('../../images/carousel6.jpg')}/>
                    </Carousel>
                </div>
            </div>
        </div>
      </div>
    );
  }

  handleChange(event) {
    let newState = [];
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit() {
    if (!this.state.email || this.state.email === '') {
      return;
    }
    ConsultationActions.requestConsultation(this.state);
  }

}
