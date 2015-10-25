import React from 'react';
import AltContainer from 'alt/AltContainer';
import Navigation from 'components/common/Navigation';
import Footer from 'components/common/Footer';
import ConsultationStore from 'stores/ConsultationStore';

import '../scss/main.scss';

export default class App extends React.Component {
  render() {
    let currentPath = this.props.location ? this.props.location.pathname : '';
    return (
      <div className="container-fluid">
        <AltContainer stores={{
          ConsultationStore: ConsultationStore
        }}>
          <Navigation currentPath={currentPath}/>
          {this.props.children}
          <Footer/>
        </AltContainer>
      </div>
    );
  }
}

App.propTypes = {
    children: React.PropTypes.object,
    location: React.PropTypes.object,
    'location.pathname': React.PropTypes.string
};
