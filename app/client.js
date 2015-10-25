import React from 'react';
import Iso from 'iso';
import {createHistory} from 'history';
import { Router } from 'react-router';

import alt from 'altInstance';
import routes from 'routes.js';

import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'sweetalert/dist/sweetalert.css';

let history = createHistory();

/*
 * Client side bootstrap with iso and alt
 */
Iso.bootstrap((state, _, container) => {
  alt.bootstrap(state);
  React.render(<Router history={history}>{routes}</Router>, container);
});
