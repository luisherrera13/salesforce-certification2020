/**
 * Handles the simple form rendered by the SFRAForm.js controller.
 * 
 */


'use strict';
var server = require('server');
var URLUtils = require('dw/web/URLUtils');
//Use the following for CSRF protection: add middleware in routes and hidden field on form
var csrfProtection = require('*/cartridge/scripts/middleware/csrf');


server.post('Show', csrfProtection.validateAjaxRequest,
server.middleware.https,  function (req, res, next) {

  //var nickname1 = req.form.nickname;
  //var emaily = req.form.emailx;
  var actionUrl1 = URLUtils.url('SFRAFormV2-Start'); //sets the route to call for the form submit cancel or back action


  var SFRAFormForm = server.forms.getForm('SFRAFormDef');
  var CustomObjectMgr = require('dw/object/CustomObjectMgr');

  // Perform any server-side validation before this point, and invalidate form accordingly.
    if (SFRAFormForm.valid) {
      var Transaction = require('dw/system/Transaction');
          try {
              Transaction.wrap(function () {
              
              var CustomObject = CustomObjectMgr.createCustomObject('SFRAFormDef', SFRAFormForm.emailx.value);
            CustomObject.custom.nickname = SFRAFormForm.nickname.value;
            

            res.render('/exercises/SFRAResultTemplateV2', {
              actionUrl2: actionUrl1,
              SFRAFormForm: server.forms.getForm('SFRAFormDef') });
          
            });

          } catch (e) {
            var err = e;
            var Resource = require('dw/web/Resource');
            if (err.javaName === "MetaDataException") {
              /* Duplicate primary key on CO: send back message to client-side, but don't log error. 
                 This is possible if the user tries to subscribe with the same email multiple times */
                res.json({
                  success: false,
                      error: [Resource.msg('error.subscriptionexists', 'sfradef', null)]
                  });
            } else {
                  /* Missing CO definition: Log error with message for site admin, set the response to error, 
                 and send error page URL to client-side */
              var Logger = require('dw/system/Logger');
              Logger.getLogger("hello-user").error(Resource.msg('error.customobjectmissing', 'sfradef', null));
              // Show Newsletter error page: there is nothing else to do
                  res.setStatusCode(500);
                  res.json({
                      error: true,
                      redirectUrl: URLUtils.url('Error-Start').toString()
                  });
            }
          }
    } else {
      // Handle server-side validation errors here: this is just an example
          res.setStatusCode(500);
          res.json({
          success: false,
              error: [Resource.msg('error.crossfieldvalidation', 'sfradef', null)]
          });
    }

      next();
  }
);

module.exports = server.exports();