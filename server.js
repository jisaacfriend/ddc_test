var express = require('express'),
	path = require('path');

var app = express();

app.use('/', express.static(__dirname + '/'));

app.listen(80, function() { console.log('listening'); });