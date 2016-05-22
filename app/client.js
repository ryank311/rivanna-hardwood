import React from 'react';
import ReactDOM from 'react-dom';
import Iso from 'iso';
import { createHistory } from 'history';
import { Router } from 'react-router';

import alt from './altInstance';
import routes from './routes';

import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

let history = createHistory();

/*
 * Client side bootstrap with iso and alt
 */
Iso.bootstrap((state, _, container) => {
  alt.bootstrap(state);
  ReactDOM.render(<Router history={history}>{routes}</Router>, container);
});
