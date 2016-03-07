'use strict';

var express = require('express');
var app = express();



// Endpoints
app.use('/projects', require('./routes/project'));


// Middleware (static files)
app.use(express.static(__dirname + '/../client/dist'));


// Server
const PORT = 7000;
app.listen(PORT, function () {
	console.log('Server listening on port %d', PORT);
});
