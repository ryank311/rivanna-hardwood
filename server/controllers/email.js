var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
var EmailTemplate = require('email-templates').EmailTemplate;
var path = require('path');

var fullMessage = path.join(__dirname, '..', 'templates', 'full-message');
var quickSend = path.join(__dirname, '..', 'templates', 'quick-send');

var _ = require('lodash');
require('jade');

console.log('Full Message path: ' + fullMessage);
console.log('Quick Send path: ' + quickSend);


/**
 * Send the short email
 */
exports.sendShort = function(req, res) {
  // TODO validate request
  var emailData = {};
  var quickSendTemplate = new EmailTemplate(quickSend);
  quickSendTemplate.render(emailData).then(function(results) {
    console.log('Message template: ' + JSON.stringify(results));
    var emailRequest = {
      to: req.body.email,
      from: 'chris.cempre@rivannawoodfloors.com',
      subject: 'Consultation Request Rivanna Wood Floors',
      text: results.html
    };
    console.log('Sending Email: ' + JSON.stringify(emailRequest));
    sendgrid.send(emailRequest, function(err, json) {
      if (err) { return console.error(err); }
      console.log(json);
    });
  }).catch(function(err) {
    console.log('Errors: ' + JSON.stringify(err));
  });
};

/**
 * Send the short email
 */
exports.sendLong = function(req, res) {
  // TODO validate request
  var emailData = {
    name: req.body.name,
    phone: req.body.phone,
    message: req.body.message
  };
  console.log('Long Send email request: ' + JSON.stringify(emailData));
  var fullMessageTemplate = new EmailTemplate(fullMessage);
  fullMessageTemplate.render(emailData).then(function(results) {
    console.log('Message template: ' + JSON.stringify(results));
    var emailRequest = {
      to: req.body.email,
      from: 'chris.cempre@rivannawoodfloors.com',
      subject: 'Consultation Request Rivanna Wood Floors',
      text: results.html
    };
    console.log('Sending Email: ' + emailRequest);
    sendgrid.send(emailRequest, function(err, json) {
      if (err) { return console.error(err); }
      console.log(json);
    });
  }).catch(function(err) {
    console.log('Errors: ' + JSON.stringify(err));
  });
};
