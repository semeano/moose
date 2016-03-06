(function () {

	'use strict';

	angular.module('moose.dashboard')

		.controller('DashboardCtrl', DashboardCtrl);

	function DashboardCtrl($scope) {
		$scope.viewName = 'dash';
	}

})();
