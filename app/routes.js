import React from 'react';
import Route from 'react-router';

import App from './components/App';
import Home from './components/home/Home';
import Residential from './components/residential/Residential.js';
import Commercial from './components/commercial/Commercial.js';
import Contact from './components/contact/Contact.js';

export default (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="services" component={Residential} />
    <Route path="commercial" component={Commercial} />
    <Route path="contact" component={Contact} />
  </Route>
);
