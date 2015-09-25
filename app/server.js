import Iso from 'iso';
import React from 'react';
import Router from 'react-router';
import {createMemoryHistory} from 'history';

import alt from 'altInstance';
import routes from 'routes.js';
import html from 'base.html';

/*
 * @param {AltObject} an instance of the Alt object
 * @param {ReactObject} routes specified in react-router
 * @param {Object} Data to bootstrap our altStores with
 * @param {Object} req passed from Express/Koa server
 */
const renderToMarkup = (alt, state, req, res) => {
    let markup;

    let history = createMemoryHistory();
    history.pushState(state, req.path);
    alt.bootstrap(state);
    //if (transition.isCancelled) {
    //  return res.redirect(302, transition.redirectInfo.pathname);
    //}
    let content = React.renderToString(<Router history={history} {...state}>{routes}</Router>);
    markup = Iso.render(content, alt.flush());

    return markup;
};

/* 
 * Export render function to be used in server/config/routes.js
 * We grab the state passed in from the server and the req object from Express/Koa
 * and pass it into the Router.run function.
 */
export default function render(state, req, res) {
  const markup = renderToMarkup(alt, state, req, res);
  return html.replace('CONTENT', markup);
};
