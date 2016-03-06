(function () {

	'use strict';

	angular.module('moose.project')

		.controller('ProjectCtrl', ProjectCtrl);

	function ProjectCtrl($scope, $stateParams, ProjectSrv) {

		function init() {
			ProjectSrv.get($stateParams.id, success, failure);
		}

		///

		function success(data) {
			$scope.projects = data;
		}

		function failure(err) {
			$scope.projects = err.statusText;
		}

		init();

	}

})();
