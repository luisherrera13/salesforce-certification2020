
var server = require('server');

server.get('Show', function(req, res, next) {
   // res.json({ value: 'Hello World'});
  //  res.render('exercises/exerciseIsml', { value: 'Hello World' });
  res.render("/exercises/exerciseIsml");
    next();
});

module.exports = server.exports();