var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
var EmailTemplate = require('email-templates').EmailTemplate;
var path = require('path');

var fullMessage = path.join(__dirname, '..', 'templates', 'full-message');
var quickSend = path.join(__dirname, '..', 'templates', 'quick-send');
var emailIcon = path.join(__dirname, '..', '..', 'app', 'images', 'logo-transparent.png');

var _ = require('lodash');
require('jade');
var quickSendTemplate = new EmailTemplate(quickSend);
var fullMessageTemplate = new EmailTemplate(fullMessage);

/**
 * Send the short email
 */
exports.sendShort = function(req, res) {
  var emailData = {};
  quickSendTemplate.render(emailData).then(function(results) {
    var emailRequest = {
      to: req.body.email,
      from: 'chris.cempre@rivannawoodfloors.com',
      replyTo: 'chris.cempre@rivannawoodfloors.com',
      bcc: 'chris.cempre@rivannawoodfloors.com',
      fromName: 'Rivanna Wood Floors LLC.',
      subject: 'Rivanna Wood Floors Consultation Request',
      text: results.text,
      html: results.html,
      files: [
        {
          cid: 'rivanna_logo',
          filename: 'logo-transparent.png',
          path: emailIcon 
        }
      ]
    };
    console.log('Email Consultation Request sending to: ' + req.body.email);
    sendgrid.send(emailRequest, function(err, json) {
      if (err) { return console.error(err); }
      console.log(json);
    });
    res.status(200).send('Success');
  }).catch(function(err) {
    console.log('Errors: ' + JSON.stringify(err));
    res.status(500).send('Error');
  });
};

/**
 * Send the short email
 */
exports.sendLong = function(req, res) {
  var emailData = {
    name: req.body.name,
    phone: req.body.phone,
    message: req.body.message
  };
  console.log('Long Send email request: {' + JSON.stringify(emailData));
  fullMessageTemplate.render(emailData).then(function(results) {
    var emailRequest = {
      to: req.body.email,
      from: 'chris.cempre@rivannawoodfloors.com',
      replyTo: 'chris.cempre@rivannawoodfloors.com',
      bcc: 'chris.cempre@rivannawoodfloors.com',
      fromName: 'Rivanna Wood Floors LLC.',
      subject: 'Rivanna Wood Floors Consultation Request',
      text: results.text,
      html: results.html
    };
    console.log('Email Consultation Request sending to: ' + req.body.email);
    sendgrid.send(emailRequest, function(err, json) {
      if (err) { return console.error(err); }
      console.log(json);
    });
    res.status(200).send('Success');
  }).catch(function(err) {
    console.log('Errors: ' + JSON.stringify(err));
    res.status(500).send('Error');
  });
};
