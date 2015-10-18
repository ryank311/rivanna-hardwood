import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import './Navigation.scss';
import brandLogo from '../../images/icon.png';

export default class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      displayIcon: true,
      scrollListener: this.handleScroll.bind(this)
    };
  }

  componentDidMount() {
    let isHomepage = this.props.currentPath === '/';
    if (isHomepage) {
      this.setState({displayIcon: false});
      window.addEventListener('scroll', this.state.scrollListener);
    }
  }

  componentWillUnmount() {
    let isHomepage = this.props.currentPath === '/';
    if (isHomepage) {
      window.removeEventListener('scroll', this.state.scrollListener);
    }
  }

  render() {
    let isHomepage = this.props.currentPath === '/';
    let navClass = classNames('navbar', 'navbar-fixed-top', 'rivanna-nav', isHomepage ? 'homepage' : '');
    let brandClass = classNames('navbar-brand', this.state.displayIcon ? 'show' : '');
    return (
      <nav className={navClass} role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-target" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <Link to="/" className={brandClass}>
                <img src={brandLogo}/>
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse-target">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  handleScroll(event) {
    if (!event) {
      return;
    }
    let scrollTop = event.srcElement.body.scrollTop;
    let displayIcon = scrollTop > 500;

    if (displayIcon !== this.state.displayIcon) {
      this.setState({
        displayIcon
      });
    }
  }
}

Navigation.propTypes = {
    currentPath: React.PropTypes.string
};
