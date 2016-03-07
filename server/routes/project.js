'use strict';

var express = require('express');
var router = express.Router();
// var _ = require('lodash');
var cors = require('cors');
var mongo = require('./../mongo/mongo');


router.route('/:slug')

	.all(cors())

	.get(function (req, res) {
		var projects = mongo.projects();
		projects.find({ slug: req.params.slug }).toArray(function (err, data) {
			if (err) {
				console.log('Error reading from DB.');
			}
			if (data.length) {
				res.json(data[0]);
			}
			else {
				res.sendStatus(404);
			}
		});
	});

module.exports = router;
