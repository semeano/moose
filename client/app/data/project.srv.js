(function () {

	'use strict';

	angular.module('moose.data')

		.constant('API_PROJECTS', '/projects/:id')

		.factory('ProjectSrv', ProjectSrv);


	function ProjectSrv($resource, API_PROJECTS) {

		var service =  { get: get };

		///

		// Get project
		function get(id, success, failure) {
			if (angular.isDefined(id)) {
				return $resource(API_PROJECTS, { project: '@project' }).get({ id: id }, null, success, failure);
			}
			else {
				return $resource(API_PROJECTS, { project: '@project' }).query(success, failure);
			}
		}

		return service;

	}

})();
