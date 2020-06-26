/**
 * A simple form controller.
 *
 */

'use strict';
var server = require('server');
var URLUtils = require('dw/web/URLUtils');
//Use the following for CSRF protection: add middleware in routes and hidden field on form
var csrfProtection = require('*/cartridge/scripts/middleware/csrf');

server.get('Start', server.middleware.https,
csrfProtection.generateToken, function(req, res, next) {
    var actionUrl = URLUtils.url('SFRAFormResultV2-Show'); //sets the route to call for the form submit action
    var actionUrl1 = URLUtils.url('SFRAFormV2-Start'); //sets the route to call for the form submit cancel or back action
    var SFRAFormForm = server.forms.getForm('SFRAFormDef'); //creates empty JSON object using the form definition
    SFRAFormForm.clear();
 
   res.render('/exercises/SFRAFormTemplateV2', {
       actionUrl: actionUrl,
       actionUrl2: actionUrl1,
       SFRAFormForm: SFRAFormForm
   });
 next();
});

module.exports = server.exports();

