(function () {

	'use strict';

	angular.module('moose.main')

		.controller('MainCtrl', MainCtrl);

	function MainCtrl($scope) {
		$scope.appName = 'moose';
	}

})();
