
//var page = require('./Exerciseisml2');
var server = require('server');

//server.extend(page);

server.get('Show', function(req, res, next) {
//server.append('Show', function(req, res, next) {
   res.json({ value: 'this json response comes from a Jsonrequest.js controller called from a component tag'});
  //  res.render('components/footer/exerciseFooter', { value: 'Hello World' });
 // res.render("/exercises/exerciseIsml");
 // res.setViewData({ value: 'Hello Commerce Cloud' });
    next();
});

module.exports = server.exports();