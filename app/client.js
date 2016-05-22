import React from 'react';
import ReactDOM from 'react-dom';
import Iso from 'iso';
import { Router, browserHistory } from 'react-router';

import alt from './altInstance';
import routes from './routes';

import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

/*
 * Client side bootstrap with iso and alt
 */
Iso.bootstrap((state, container) => {
  alt.bootstrap(state);
  ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, container);
});
