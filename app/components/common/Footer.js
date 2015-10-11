import React from 'react';
import './Footer.scss';

export default class Footer extends React.Component {

  render() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <p>Rivanna Wood Floors LLC.</p>
                    </div>
                    <div className="col-sm-12 text-center">
                        <p>Site by Ryan King &copy; 2015</p>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}
