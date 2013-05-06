// for express
var express = require('express');

// create the express instance
var app = module.exports = express.createServer();

// configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({ secret: "Harness session" }))
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// ******************
// register endpoint
// ******************

var port = process.env.PORT || 3001;
app.listen(port, function() {
  console.log("Phonegap Harness is Listening on " + port);
});