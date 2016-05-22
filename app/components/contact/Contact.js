import React from 'react';
import InfoCard from '../common/InfoCard.js';

import './Contact.scss';

export default class Contact extends React.Component {

  componentDidMount() {
    document.body.scrollTop = 0;
  }

  render() {
    return (
      <div className="contact-container">
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
                  <h1>Contact Us</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <InfoCard scrollAnimate={0}>
                    <div className="col-sm-3 hidden-xs text-center">
                      <i className="fa fa-envelope-square fa-4x"></i>
                    </div>
                    <div className="col-sm-9">
                      <h2><a href="mailto:chris.cempre@rivannawoodfloors.com">Chris.Cempre@RivannaWoodFloors.com</a></h2>
                    </div>
                  </InfoCard>
                  <InfoCard scrollAnimate={0} fadeDirection="fade-in-right">
                    <div className="col-sm-3 hidden-xs text-center">
                      <i className="fa fa-phone-square fa-4x"></i>
                    </div>
                    <div className="col-sm-9">
                      <h2><a href="tel:434-987-0716">(434) 987-0716</a></h2>
                    </div>
                  </InfoCard>
                  <InfoCard scrollAnimate={0}>
                    <div className="col-sm-3 hidden-xs text-center">
                      <i className="fa fa-facebook-square fa-4x"></i>
                    </div>
                    <div className="col-sm-9">
                      <h2><a href="https://www.facebook.com/rivannawoodfloors">Find Us on Facebook</a></h2>
                    </div>
                  </InfoCard>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }
}
