import React from 'react';
import './Footer.scss';

export default class Footer extends React.Component {

  render() {
    return (
      <div className="row footer">
        <footer>
          <div className="col-sm-12 text-center">
            <p>Rivanna Wood Floors LLC.</p>
          </div>
          <div className="col-sm-12 text-center">
            <p>Site by Ryan King &copy; 2015</p>
          </div>
        </footer>
      </div>
    );
  }
}
