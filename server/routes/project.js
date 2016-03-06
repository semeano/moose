'use strict';

var express = require('express');
var router = express.Router();
var _ = require('lodash');



// Dummy data
var projects = [{ id: '1', name: 'The one' },
								{ id: 'asd', name: 'asd' }];

router.route('/:id')

	.get(function (req, res) {
		var project = _.find(projects, function (p) { return p.id === req.params.id; });
		if (project) {
			res.json(project);
		}
		else {
			res.sendStatus(404);
		}
	});

module.exports = router;
