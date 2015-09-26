import React from 'react';
import Route from 'react-router';

import App from 'components/App';
import About from 'components/About';
import Home from 'components/home/Home';

export default (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="about" component={About} />
  </Route>
);
