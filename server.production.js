'use strict';

var express = require('express');
var app = new express();
var bodyParser = require('body-parser');
var middleware = require('./lib/middleware').default;
var port = 8080;

app.use('/dist', express.static(__dirname + '/dist'));
app.use('/static', express.static(__dirname + '/static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(middleware);
app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info(
      '==> 🌎  Listening on port %s.',
      port
    );
  }
});
