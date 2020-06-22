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

  res.render('/exercises/SFRAResultTemplate', {
    nickname : nickname,
    emailz : emaily
  
  });
   next();
  });

module.exports = server.exports();