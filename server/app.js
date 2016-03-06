'use strict';

var express = require('express');
var app = express();



// Endpoints
app.use('/projects', require('./routes/project'));


// Middleware
app.use(express.static(__dirname + '/../client/dist'));


// Server
app.listen(8000, function () {
	console.log('Server listening on port 8000');
});
