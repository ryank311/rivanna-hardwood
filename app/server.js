import Iso from 'iso';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';

import alt from 'altInstance';
import routes from 'routes.js';
import html from 'base.html';

// import 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';

/*
 * @param {AltObject} an instance of the Alt object
 * @param {ReactObject} routes specified in react-router
 * @param {Object} Data to bootstrap our altStores with
 * @param {Object} req passed from Express/Koa server
 */
const renderToMarkup = (alt, state, req, res) => {
  let markup, content;
  let location = new createLocation(req.url);
  alt.bootstrap(state);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation)
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    else if (error)
      res.status(500).send(error.message);
    else if (renderProps == null)
      res.status(404).send('Not found');
    else
      content = ReactDOMServer.renderToString(<RouterContext {...renderProps} />);
    markup = Iso.render(content, alt.flush());
  });

  return markup;
};

/*
 * Export render function to be used in server/config/routes.js
 * We grab the state passed in from the server and the req object from Express/Koa
 * and pass it into the Router.run function.
 */
const renderServer = function renderServer(state, req, res) {
  const markup = renderToMarkup(alt, state, req, res);
  return html.replace('CONTENT', markup);
};

export { renderServer };
