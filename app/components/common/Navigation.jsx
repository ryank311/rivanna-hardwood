import React from 'react';
import { Link } from 'react-router';

import styles from './Navigation.scss';

export default class Navigation extends React.Component {

  render() {
    return (
      <nav className={'navbar navbar-fixed-top ' + styles.navbar} role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-target" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse-target">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/residential">Residential</Link></li>
              <li><Link to="/commercial">Commercial</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}

Navigation.propTypes = { UserStore: React.PropTypes.object };
