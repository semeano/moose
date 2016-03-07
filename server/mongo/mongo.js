'use strict';

var mongo = require('mongodb');
var client = mongo.MongoClient;
var _db;

module.exports = {
	connect: function () {
		client.connect('mongodb://localhost:27017/moose-dev',
			function (err, db) {
				if (err) {
					console.log('Error connecting to Mongo.');
					process.exit(1);
				}
				_db = db;
				console.log('Connected to Mongo!');
			});
	},
	projects: function () {
		return _db.collection('projects');
	}
};
