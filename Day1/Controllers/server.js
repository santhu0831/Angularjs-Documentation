var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var request = require('request');
var compression = require('compression');

var port = 8080;
var app = express();

app.use(compression());

// Serve App
app.use('/', express.static(__dirname + '/app'));

// handle unknown paths
app.use(function(req, res, next){
  // send status and render message
  res.status(404);
  res.send('Unavailable');
});

app.listen(port, function() {
  console.log('listening localhost:' + port);
});
