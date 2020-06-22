/**
 * Handles the simple form rendered by the SFRAForm.js controller.
 * 
 */

'use strict';
var server = require('server');
var URLUtils = require('dw/web/URLUtils');


server.post('Show', server.middleware.https, function(req, res, next) {

  var nickname = req.form.nickname;
  var emaily = req.form.emailx;
  var actionUrl1 = URLUtils.url('SFRAForm-Start'); //sets the route to call for the form submit cancel or back action


  res.render('/exercises/SFRAResultTemplate', {
    nickname : nickname,
    emailz : emaily,
    actionUrl2: actionUrl1,
  
  });
   next();
  });

module.exports = server.exports();