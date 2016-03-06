(function () {

	'use strict';

	angular.module('moose.project')

		.controller('ProjectCtrl', ProjectCtrl);

	function ProjectCtrl($scope, $stateParams, ProjectSrv) {

		function init() {
			ProjectSrv.get($stateParams.slug, success, failure);
		}

		///

		function success(data) {
			$scope.project = data;
		}

		function failure(err) {
			$scope.project = err.statusText;
		}

		init();

	}

})();
