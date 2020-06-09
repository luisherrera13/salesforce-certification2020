'use strict';

var processInclude = require('base/util');

$(document).ready(function () {
  //  console.log('Hi how are you');
    processInclude(require('base/product/quickView'));
    alert('Script tesTile.js ejecutado desde template ismlincludeelements.isml');
})