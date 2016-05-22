/**
 * Routes for express app
 */
var email = require('../controllers/email');
var express = require('express');
var mongoose = require('mongoose');
var _ = require('lodash');
var glob = require('glob');
var App = require('../../public/assets/app.server');

var appPath = 'app.js';
var files = glob.sync('**/app.*.js');
if (files && files.length > 0) {
  var appJSFile = files[0];
  appPath = appJSFile.substring( appJSFile.lastIndexOf('/') + 1 );
  console.log('application js file found at: ' + appPath);
}
appPath = '/assets/' + appPath;

module.exports = function(app, passport) {

  app.post('/email', function(req, res) {
    email.sendShort(req, res);
  });

  app.post('/request-consultation', function(req, res) {
    email.sendLong(req, res);
  });

  // This is where the magic happens. We take the locals data we have already
  // fetched and seed our stores with data.
  // App is a function that requires store data and url to initialize and return the React-rendered html string
  app.get('*', function (req, res, next) {
    var html = App.renderServer(JSON.stringify(res.locals.data || {}), req, res);

    if(process.env.NODE_ENV === 'development') {
      html = html.replace("LINK", '');
    } else {
      html = html.replace("LINK", Header.link);
    }

    if(process.env.NODE_ENV === 'development') {
      html = html.replace("SOURCE", '/assets/app.js');
    } else {
      html = html.replace("SOURCE", appPath);
    }

    res.contentType = "text/html; charset=utf8";
    res.end(html);
  });

};;
