'use strict';

var express = require('express');
var router = express.Router();
var _ = require('lodash');
var cors = require('cors');



// Dummy data
var projects = [{ slug: '1', name: 'The one', description: 'ksjdfksjd' },
								{ slug: '2', name: 'da number tu', description: '000000' },
								{ slug: 'asd', name: 'asd', description: 'qweqqewqwe' }];

router.route('/:slug')

	.all(cors())

	.get(function (req, res) {
		var project = _.find(projects, function (p) { return p.slug === req.params.slug; });
		if (project) {
			res.json(project);
		}
		else {
			res.sendStatus(404);
		}
	});

module.exports = router;
