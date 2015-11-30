import React from 'react';
import Modal from 'react-modal';
import classNames from 'classnames';

import ConsultationActions from '../../actions/ConsultationActions.js';
import Cards from './Cards.js';
import InfoCard from '../common/InfoCard.js';
import './Home.scss';

export default class Home extends React.Component {
  constructor(params) {
    super(params);
    this.state = {email: null};
  }

  render() {
    let showSuccess = this.props.ConsultationStore.emailSentSuccess;
    let showError = this.props.ConsultationStore.emailSentFailure;
    let inputGroupContainer = classNames('input-group', 'quote-request');
    let customStyles = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(140, 140, 140, 0.80)',
        zIndex: 9999
      },
      content: {
        position: 'absolute',
        maxWidth: '400px',
        maxHeight: '400px',
        top: '20%',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'
      }
    };
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
                            <input type="email" className="form-control" placeholder="Enter Your Email Address" onChange={this.handleEmailChange.bind(this)}/>
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={this.handleEmailSubmit.bind(this)}>Submit</button>
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
                            <InfoCard scrollAnimate={800}>
                                <div className="col-sm-4">
                                    <div className="about-logo">
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <h2>Rivanna Wood Floors</h2>
                                    <p>
                                        Rivanna Wood Floors specializes in the installation, sanding, re-finishing, and repairing of any and all species of hardwood flooring.  We provide a top quality service that is unique because we take every project on treating each floor like our very own, and considering our clients’ every need.  Our main goal as a company is to go above and beyond our clients’ expectations in their flooring plans.  We use techniques unique to the Charlottesville area to achieve the look that our customers want.  From the lightest to the darkest of colors in the spectrum of staining, dying, and sheen, we work with you to achieve your desired result. Our clients can expect to see a beautiful final product, completed in a timely and efficient manner, and ending with a thorough and detailed cleaning.
                                    </p>
                                </div>
                            </InfoCard>
                            <InfoCard scrollAnimate={1250} fadeDirection="fade-in-right">
                                <div className="col-sm-8">
                                    <h2>Chris Cempre</h2>
                                    <p>
                                        Owner, Chris Cempré began working on construction sites at a very young age, helping out during the summers with his grandfather’s construction company.  There, as well as in other service jobs he held, he developed a very strong work ethic and an understanding of customer service.  Chris began specializing in hardwood flooring in 2004 where he worked for Albemarle Floors.  A few years later, he became co-owner of Albemarle Floors, improving the standard of work, made new and valuable customer relationships, improved efficiency, and researched new methods of flooring applications.  During his last couple years of co-owning Albemarle Floors he was completing the Business Administration program at Piedmont Virginia Community College (while holding down other evening positions).  In 2012 Chris resigned from Albemarle Floors and transferred to the University of Virginia where he earned his bachelor’s degree in Environmental Science in 2014.
                                    </p>
                                </div>
                                <div className="col-sm-4">
                                    <div className="about-hero">
                                    </div>
                                </div>
                            </InfoCard>
                            <InfoCard scrollAnimate={1700}>
                                <div className="col-sm-4">
                                    <div className="floor-hero">
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <h2>Established 2015</h2>
                                    <p>
                                        Chris got back into flooring after graduation immediately realizing the demand for his high quality floor work and returning to his true passion.  After finishing a few small projects he began working with Jerry Sikman Hardwood Floors, consecutively maintaining his own side practice.  In July 2015, Chris decided to finally make a decade-long dream come true, and founded Rivanna Wood Floors, LLC.  When Chris isn’t making beautiful hardwood floors, he can be found in the Rivanna River, a river that represents beauty, strength, locality, longevity, life, and evolution, which are all things that Chris feels are important in his hardwood floor work.
                                    </p>
                                </div>
                            </InfoCard>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={showSuccess} onRequestClose={ConsultationActions.resetStatus} style={customStyles}>
              <div className="text-center">
                <h1><i className="fa fa-check-circle-o fa-4x"></i></h1>
                <h1>Success</h1>
                <p>We received your request.  Check your inbox for a confirmation email.</p>
              </div>
            </Modal>
            <Modal isOpen={showError} onRequestClose={ConsultationActions.resetStatus} style={customStyles}>
              <div className="text-center">
                <h1><i className="fa fa-exclamation-triangle fa-4x"></i></h1>
                <h1>Error</h1>
                <p>Sorry, something went wrong while processing your request.  Please check your email address and try again later.</p>
              </div>
            </Modal>
        </div>
    );
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleEmailSubmit() {
    if (!this.state.email || this.state.email === '') {
      return;
    }
    ConsultationActions.registerEmail(this.state.email);
  }

}

Home.propTypes = {
  'ConsultationStore': React.PropTypes.object,
  'ConsultationStore.emailSentSuccess': React.PropTypes.bool,
  'ConsultationStore.emailSentFailure': React.PropTypes.bool
};
