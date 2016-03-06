'use strict';

var express = require('express');
var app = express();


// Middleware
app.use(express.static(__dirname + '/../client/dist'));

app.listen(8000, function () {
	console.log('Server listening on port 8000');
});
