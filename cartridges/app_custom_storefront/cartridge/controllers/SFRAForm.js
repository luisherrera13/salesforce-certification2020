/**
 * A simple form controller.
 *
 */

'use strict';
var server = require('server');
var URLUtils = require('dw/web/URLUtils');

server.get('Start', function(req, res, next) {
    var actionUrl = URLUtils.url('SFRAFormResult-Show'); //sets the route to call for the form submit action
    var actionUrl1 = URLUtils.url('SFRAForm-Start'); //sets the route to call for the form submit cancel or back action
    var SFRAhelloform = server.forms.getForm('SFRAFormDef'); //creates empty JSON object using the form definition
    SFRAhelloform.clear();
 
   res.render('/exercises/SFRAFormTemplate', {
       actionUrl: actionUrl,
       actionUrl2: actionUrl1,
       SFRAhelloform: SFRAhelloform
   });
 next();
});

module.exports = server.exports();

