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
      <AltContainer stores={{
        ConsultationStore: ConsultationStore
      }}>
        <Navigation currentPath={currentPath}/>
        <div className="container-fluid">
            {this.props.children}
        </div>
        <Footer/>
      </AltContainer>
    );
  }
}

App.propTypes = {
    children: React.PropTypes.object,
    location: React.PropTypes.object,
    'location.pathname': React.PropTypes.string
};
