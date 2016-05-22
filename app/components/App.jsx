import React from 'react';
import AltContainer from 'alt-container';
import Navigation from './common/Navigation';
import Footer from './common/Footer';
import ConsultationStore from '../stores/ConsultationStore';

import '../scss/main.scss';

const App = (props) => {
  const currentPath = props.location ? props.location.pathname : '';
  return (
    <div className="container-fluid">
      <AltContainer stores={{ ConsultationStore }}>
        <Navigation currentPath={currentPath} />
        {props.children}
        <Footer />
      </AltContainer>
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.object,
  location: React.PropTypes.object,
  'location.pathname': React.PropTypes.string
};

export default App;
