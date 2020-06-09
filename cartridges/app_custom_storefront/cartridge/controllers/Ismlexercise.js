'use strict';

var server = require('server');
var pageMetaData = require('*/cartridge/scripts/middleware/pageMetaData');
var cache = require('*/cartridge/scripts/middleware/cache');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');


server.get('Show', function (req, res, next) {
  var a = [
    {
      nombre: 'juan'
    },
    {
      nombre: 'pedro'
    },
    {
      nombre: 'pepe'
    },
    {
      nombre: 'luis'
    },

  ];

  res.render("exercises/ismlincludeelements", { viewData: a });
  next();
});

module.exports = server.exports();