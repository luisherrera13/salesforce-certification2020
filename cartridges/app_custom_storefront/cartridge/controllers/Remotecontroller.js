
//var page = require('./Exerciseisml2');
var server = require('server');

//server.extend(page);

server.get('Show', function(req, res, next) {
//server.append('Show', function(req, res, next) {
  // res.json({ value: 'this json response comes from a Hellopeople.js controller called from a ismodule tag'});
  //  res.render('components/footer/exerciseFooter', { value: 'Hello World' });
  res.render("components/remotehello.isml");
 // res.setViewData({ value: 'Hello Commerce Cloud' });
    next();
});

module.exports = server.exports();