(function () {

	'use strict';

	var dependencies = [

			// Angular
			'ngResource',
			'ngAnimate',

			// Vendor
			'ui.router',
			'angular-loading-bar',

			// Modules
			'moose.data',
			'moose.main',
			'moose.dashboard',
			'moose.project'
		];

	angular.module('moose', dependencies);

})();
