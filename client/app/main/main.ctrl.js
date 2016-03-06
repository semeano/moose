(function () {

	'use strict';

	MainCtrl.$inject = ["$scope"];
	angular.module('moose.main')

		.controller('MainCtrl', MainCtrl);

	function MainCtrl($scope) {
		$scope.appName = 'moose';
	}

})();
