import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import classNames from 'classnames';

import './Navigation.scss';
import brandLogo from '../../images/icon.png';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayIcon: props.currentPath !== '/',
      scrollListener: this.handleScroll.bind(this),
      onToggleNavClick: this.onToggleNavClick.bind(this),
      onClickLink: this.onClickLink.bind(this)
    };
  }

  componentDidMount() {
    const isHomepage = this.props.currentPath === '/';
    if (isHomepage) {
      window.addEventListener('scroll', this.state.scrollListener);
    }
  }

  componentWillUnmount() {
    const isHomepage = this.props.currentPath === '/';
    if (isHomepage) {
      window.removeEventListener('scroll', this.state.scrollListener);
    }
  }

  onClickLink() {
    if (this.state.navClicked) {
      $('.navbar-toggle').click();
      this.setState({ navClicked: false });
    }
  }

  onToggleNavClick() {
    this.setState({ navClicked: true });
  }

  handleScroll(event) {
    if (!event) {
      return;
    }
    const scrollTop = $(document).scrollTop();
    const displayIcon = scrollTop > 500;

    if (displayIcon !== this.state.displayIcon) {
      this.setState({
        displayIcon
      });
    }
  }

  render() {
    const isHomepage = this.props.currentPath === '/';
    const navClass = classNames(
        'navbar',
        'navbar-fixed-top',
        'rivanna-nav',
        isHomepage ? 'homepage' : '',
        this.state.displayIcon ? 'logo-visible' : '');
    const brandClass = classNames('navbar-brand', this.state.displayIcon ? 'show' : '');
    return (
      <nav className={navClass} role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              onClick={this.state.onToggleNavClick}
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar-collapse-target"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className={brandClass}>
              <img src={brandLogo} role="presentation" />
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse-target">
            <ul className="nav navbar-nav navbar-right">
              <li onClick={this.state.onClickLink}><Link to="/services">Services</Link></li>
              <li onClick={this.state.onClickLink}><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Navigation.propTypes = {
  currentPath: React.PropTypes.string
};
