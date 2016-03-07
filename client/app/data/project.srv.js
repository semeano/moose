(function () {

	'use strict';

	angular.module('moose.data')

		.constant('API_PROJECTS', 'http://localhost:7000/projects/:slug')

		.factory('ProjectSrv', ProjectSrv);


	function ProjectSrv($resource, API_PROJECTS) {

		var service =  { get: get };

		///

		// Get project
		function get(slug, success, failure) {
			if (angular.isDefined(slug)) {
				return $resource(API_PROJECTS, { project: '@project' }).get({ slug: slug }, null, success, failure);
			}
			else {
				failure('Invalid slug');
			}
		}

		return service;

	}

})();
